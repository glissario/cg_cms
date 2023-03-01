export function articleQuery(chapter: string, section: string): string {
	return (
		`{articleCollection (where: { chapterNumber:` +
		chapter +
		`, sectionNumber:` +
		section +
		`}){
		  items {
			sys {
			  id
			}
			chapterNumber
			sectionNumber
			articleNumber
			headline
			literature{json}
			summary{json}
			textContent{json}
		  }
		}
	  }`
	);
}
