export interface Verse {
    volume_title: string;
    book_title: string;
    book_short_title: string;
    chapter_number: number;
    verse_number: number;
    verse_title: string;
    verse_short_title: string;
    scripture_text: string;
}

export interface Chapter {
    volume_title: string;
    book_title: string;
    book_short_title: string;
    chapter_number: number;
    verses: Verse[];
}

export interface Book {
    volume_title: string;
    book_title: string;
    book_short_title: string;
    chapters: Chapter[];
}
