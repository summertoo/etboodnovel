export interface ChapterContent {
  zh: string[];
  en: string[];
}

export async function getChapter(novelSlug: string, chapterNumber: number): Promise<ChapterContent | null> {
  try {
    const chapterData = await import(`./${novelSlug}/${chapterNumber}.json`);
    return chapterData.default as ChapterContent;
  } catch {
    return null;
  }
}