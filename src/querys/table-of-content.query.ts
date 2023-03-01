export const chapterModelQuery = `{
    mainChapterCollection {
        items {
          sys {
            id
          }
          headline
          chapter
          textContent{json}
        }
      }
    }
  `;
