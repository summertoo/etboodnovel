import { NextRequest, NextResponse } from "next/server";
import { getChapter } from "@/data/chapters";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string; chapter: string }> }
) {
  const { slug, chapter } = await context.params;
  const chapterNumber = parseInt(chapter, 10);

  if (isNaN(chapterNumber)) {
    return NextResponse.json({ error: "Invalid chapter number" }, { status: 400 });
  }

  const content = await getChapter(slug, chapterNumber);

  if (!content) {
    return NextResponse.json({ error: "Chapter not found" }, { status: 404 });
  }

  return NextResponse.json(content);
}
