<script context="module">
	import contentfulFetch from '../../lib/contentfulClient';
	import { chapterModelQuery } from '../../querys/table-of-content';
	export async function load() {
		let posts;
		const response = await contentfulFetch(chapterModelQuery);
		const data = await response.json();
		return data.data;
	}
</script>

<script lang="ts">
	import '../../styles/styles.scss';
	import { onMount } from 'svelte';
	import Chapter from '../../components/chapter.svelte';
	import type { ChapterItemApiModel, ChapterModel } from '../../types/tableOfContent.types';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	let chapters: ChapterModel[] | [] = [];
	onMount(async () => {
		const mainChapters = await load();
		let chapterItems: ChapterModel[] = [];
		let chapterItemApiCollection: ChapterItemApiModel[] = mainChapters.mainChapterCollection.items;
		chapterItemApiCollection.forEach((element) => {
			const chapterItem: ChapterModel = {
				headline: element.headline,
				chapter: element.chapter,
				textContent: documentToHtmlString(element.textContent?.json)
			};
			chapterItems.push(chapterItem);
		});
		chapters = chapterItems.sort((a, b) => (a.chapter > b.chapter ? 1 : -1));
	});
</script>

<svelte:head>
	<title>Konzept</title>
	<meta name="description" content="workshop-concept" />
</svelte:head>

<section>
	<h1>Inhaltsverzeichnis</h1>
	<ul>
		{#each chapters as chapter}
			<li>
				<h2>{chapter.chapter + ' - ' + chapter.headline}</h2>
			</li>
		{:else}
			<p>loading</p>
		{/each}
	</ul>
</section>

<section class="content">
	{#each chapters as chapter}
		<Chapter {chapter} chapterIndex={chapter.chapter.toString()} />
	{:else}
		<p>loading</p>
	{/each}
</section>

<style>
	@import '../../styles/layout.scss';

	h1 {
		color: var(--color-theme-2);
	}
	li {
		color: var(--color-theme-2);
		list-style: none;
	}
	.content {
		margin-top: 0;
		padding: 1rem 1rem;
	}
</style>
