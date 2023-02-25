<script context="module">
	import contentfulFetch from '../lib/contentfulClient';
	import { introQuery } from '../querys/introduction';
	export async function load() {
		let posts;
		const response = await contentfulFetch(introQuery);
		const data = await response.json();
		return data.data;
	}
</script>

<script lang="ts">
	import '../styles/styles.scss';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import { onMount } from 'svelte';
	let viewModel: { headline: String; textContent: string } = { headline: '', textContent: '' };
	onMount(async () => {
		const introduction = await load();
		viewModel.headline = introduction.introduction?.headline;
		viewModel.textContent = documentToHtmlString(introduction?.introduction?.textContent.json);
	});
</script>

<svelte:head>
	<title>Willkommen</title>
	<meta name="introduction" content="colored glasses concept page" />
</svelte:head>

<section>
	<h1>{viewModel.headline}</h1>
	<div class="content">{@html viewModel.textContent}</div>
</section>

<style>
	@import '../styles/layout.scss';

	h1 {
		color: var(--color-theme-2);
	}
</style>
