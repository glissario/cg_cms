<script context="module">
	import contentfulFetch from '../lib/contentfulClient';
	export async function load(section = '') {
		const response = await contentfulFetch(sectionQuery(section));
		const data = await response.json();
		return data.data;
	}
</script>

<script lang="ts">
	export let chapterIndex: string;
	export let chapter: ChapterModel;
	let panel1Open = false;
	let sections: SectionModel[] = [];
	import { onMount } from 'svelte';
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import type { ChapterModel } from '../types/tableOfContent.types';
	import type { SectionItemApiModel, SectionModel } from '../types/section.types';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import Section from './section.svelte';
	import { sectionQuery } from '../querys/section.query';

	onMount(async () => {
		const sectionsDocument = await load(chapterIndex);
		let sectionApiCollection: SectionItemApiModel[] = sectionsDocument.sectionCollection.items;
		sectionApiCollection.forEach((element) => {
			const newSection = {
				headline: element.headline,
				chapterNumber: element.chapterNumber.toString(),
				sectionNumber: element.sectionNumber.toString(),
				literature: documentToHtmlString(element.literature?.json),
				summary: documentToHtmlString(element.summary?.json),
				textContent: documentToHtmlString(element.textContent?.json)
			};
			sections.push(newSection);
		});
		sections = sections.sort((a, b) => (a.sectionNumber > b.sectionNumber ? 1 : -1));
	});
</script>

<div class="accordion-container">
	<Accordion multiple>
		<Panel bind:open={panel1Open}>
			<Header>
				<h2 class="headline">{chapter.chapter + ' ' + chapter.headline}</h2>
				<IconButton slot="icon" toggle pressed={panel1Open}>
					<Icon class="material-icons" on>expand_less</Icon>
					<Icon class="material-icons">expand_more</Icon>
				</IconButton>
			</Header>
			<Content>
				{#if chapter.textContent}
					<div>{@html chapter.textContent}</div>
				{/if}
				{#each sections as section}
					<Section {section} sectionIndex={section.sectionNumber} {chapterIndex} />
				{:else}{/each}
			</Content>
		</Panel>
	</Accordion>
</div>

<style lang="scss">
	.headline {
		color: var(--color-theme-2);
		font-size: 1.25rem;
	}
</style>
