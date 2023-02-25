<script lang="ts">
	import type { ArticleModel } from '../types/article.types';
	import type { SectionModel } from '../types/section.types';

	export let content: SectionModel | ArticleModel;
	export let articleIndex: string | undefined;
</script>

<section class="content">
	{#if articleIndex}
		<h3>{content.chapterNumber}.{content.sectionNumber}.{articleIndex}: {content.headline}</h3>
	{:else}
		<h3>{content.chapterNumber}.{content.sectionNumber}: {content.headline}</h3>
	{/if}
	{#if content.textContent}
		<div>{@html content.textContent}</div>
	{/if}
	{#if content.summary}
		<div class="summary">
			<h4>Zusammenfassung:</h4>
			<div>{@html content.summary}</div>
		</div>
	{/if}
	{#if content.literature}
		<div class="literature">
			<h4>Literaturtipps:</h4>
			<div>{@html content.literature}</div>
		</div>
	{/if}
</section>

<style lang="scss">
	h3 {
		margin: 0;
		color: var(--color-theme-2);
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
