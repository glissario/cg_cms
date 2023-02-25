export interface ArticleItemApiModel {
	headline: string;
	chapterNumber: number;
	sectionNumber: number;
	articleNumber: number;
	literature: any | undefined;
	summary: any | undefined;
	textContent?: any | undefined;
}

export interface ArticleModel {
	headline: string;
	chapterNumber: string;
	sectionNumber: string;
	articleNumber: string;
	literature: string;
	summary: string;
	textContent?: string;
}
