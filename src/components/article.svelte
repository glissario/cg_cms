<script lang="ts">
	import type { ArticleModel } from '../types/article.types';
	import Content from './content.svelte';

	export let sectionIndex: string;
	export let chapterIndex: string;
	export let articleIndex: string;
	export let article: ArticleModel;
</script>

{#if article}
	<section class="content-wrapper">
		<Content {articleIndex} content={article} />
	</section>
{/if}

<style lang="scss">
	.content-wrapper {
		margin: 0;
		padding: 0;
		padding-left: 1rem;
		box-shadow: none;
	}
</style>
