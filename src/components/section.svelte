<script context="module">
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import { onMount } from 'svelte';
	import contentfulFetch from '../lib/contentfulClient';
	import { articleQuery } from '../querys/article.query';

	export async function load(chapter = '', section = '') {
		const response = await contentfulFetch(articleQuery(chapter, section));
		const data = await response.json();
		return data.data;
	}
</script>

<script lang="ts">
	import type { ArticleModel, ArticleItemApiModel } from '../types/article.types';
	import type { SectionModel } from '../types/section.types';
	import Article from './article.svelte';
	import Content from './content.svelte';

	export let sectionIndex: string;
	export let chapterIndex: string;
	export let section: SectionModel;
	let articles: ArticleModel[] = [];

	onMount(async () => {
		const articleDocument = await load(chapterIndex, sectionIndex);
		let articleApiCollection: ArticleItemApiModel[] = articleDocument.articleCollection.items;
		articleApiCollection.forEach((element) => {
			const newArticle: ArticleModel = {
				headline: element.headline,
				chapterNumber: element.chapterNumber.toString(),
				sectionNumber: element.sectionNumber.toString(),
				articleNumber: element.articleNumber.toString(),
				literature: documentToHtmlString(element.literature?.json),
				summary: documentToHtmlString(element.summary?.json),
				textContent: documentToHtmlString(element.textContent?.json)
			};
			articles.push(newArticle);
		});
		articles = articles.sort((a, b) => (a.articleNumber > b.articleNumber ? 1 : -1));
	});
</script>

<section class="content">
	<Content content={section} articleIndex={undefined} />
	{#each articles as article}
		<Article {article} {sectionIndex} {chapterIndex} articleIndex={article.articleNumber} />
	{:else}{/each}
</section>

<style lang="scss">
	h4 {
		margin: 0;
	}
	.content {
		padding: 0;
		box-shadow: none;
	}
	.summary {
		padding: 1rem;
		border: 4px solid var(--color-theme-2);
	}

	.literature {
		margin-top: 2rem;
		padding: 1rem;
		border: 4px solid purple;
	}
</style>
