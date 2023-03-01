export function sectionQuery(chapter: string): string {
	return (
		`{sectionCollection (where: { chapterNumber:` +
		chapter +
		`}){
		  items {
			sys {
			  id
			}
			chapterNumber
			sectionNumber
			headline
			literature{json}
			summary{json}
			textContent{json}
		  }
		}
	  }`
	);
}
