export interface ChapterModel {
	headline: string;
	chapter: number;
	textContent?: string | undefined;
}

export interface ChapterItemApiModel {
	headline: string;
	chapter: number;
	textContent?: any | undefined;
}

interface RichText {
	json: string;
}
