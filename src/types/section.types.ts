export interface SectionItemApiModel {
	headline: string;
	chapterNumber: number;
	sectionNumber: number;
	literature: any | undefined;
	summary: any | undefined;
	textContent?: any | undefined;
}

export interface SectionModel {
	headline: string;
	chapterNumber: string;
	sectionNumber: string;
	literature: string;
	summary: string;
	textContent?: string;
}
