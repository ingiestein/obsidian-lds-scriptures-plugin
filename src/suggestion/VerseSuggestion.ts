import * as fs from "fs/promises";
import { getScripturesPath } from "../metadata";
import { AvailableLanguage } from "../lang";
import { Book, Verse } from "../types";
// import {App} from "obsidian"

export class VerseSuggestion {
    public text: string;
    public previewText: string;
    public verses: Verse[];

    constructor(
        public pluginName: string,
        public book: string,
        public chapter: number,
        public verseStart: number,
        public verseEnd: number | null,
        public lang: AvailableLanguage,
        public linkType: "wiki" | "markdown",
        public createChapterLink: boolean,
    ) {}

    public getReplacement(): string {
        const url = this.getUrl();
        let linktype = this.linkType;

        const range =
            this.verseEnd === null
                ? `${this.verseStart}`
                : `${this.verseStart}-${this.verseEnd}`;

        if (this.createChapterLink) {
            if (linktype == "wiki") {
                // Wiki style link to chapter document and outside URL
                const headerFront = `[[${this.book} ${this.chapter}|${this.book} ${this.chapter}:${range}]]`;
                const head = `> [!Mormon] ${headerFront} \n [churchofjesuschrist.org](${url})`;
                return head + "\n" + this.text + "\n";
            } else if (linktype == "markdown") {
                // Markdown style link with spaces encoded as %20
                const encodedBookChapter = encodeURIComponent(
                    `${this.book} ${this.chapter}`,
                );
                const headerFront = `[${this.book} ${this.chapter}:${range}](${encodedBookChapter})`;
                const head = `> [!Mormon] ${headerFront} \n [churchofjesuschrist.org](${url})`;
                return head + "\n" + this.text + "\n";
            }
        }

        // Normal function
        const headerFront = `${this.book} ${this.chapter}:`;
        const head = `> [!Mormon] [${headerFront}${range}](${url})`;
        return head + "\n" + this.text + "\n";
    }

    private getUrl(): string {
        const { volume_title_short, book_title_short, chapter_number } =
            this.verses[0];
        const { lang } = this;

        const start = `p${this.verseStart}`;
        const range =
            this.verseEnd === null ? start : `${start}-p${this.verseEnd}`;

        return `https://www.churchofjesuschrist.org/study/scriptures/${volume_title_short}/${book_title_short}/${chapter_number}?lang=${lang}&id=${range}#${start}`;
    }

    private async fetchVerses(): Promise<Verse[]> {
        const fileContent = await fs.readFile(
            `${getScripturesPath(this.pluginName, this.lang)}/${this.book}.json`,
        );
        const book: Book = JSON.parse(fileContent.toString());
        const chapter = book.chapters[this.chapter - 1];
        if (this.verseEnd === null)
            return [chapter.verses[this.verseStart - 1]];

        return chapter.verses.slice(this.verseStart - 1, this.verseEnd);
    }

    private toText(verses: Verse[]): string {
        return (
            `> <ol start="${verses[0].verse_number}">` +
            `${verses
                .map(({ scripture_text }) => `<li>${scripture_text}</li>`)
                .join(" ")}` +
            "</ol>"
        );
    }

    private toPreviewText(verses: Verse[]): string {
        return verses
            .map(
                ({ verse_number, scripture_text }) =>
                    `${verse_number}. ${scripture_text}`,
            )
            .join("\n");
    }

    public async loadVerse(): Promise<void> {
        const verses = await this.fetchVerses();
        this.verses = verses;
        this.text = this.toText(verses);
        this.previewText = this.toPreviewText(verses);
    }

    public render(el: HTMLElement): void {
        const outer = el.createDiv({ cls: "obr-suggester-container" });
        outer.createDiv({ cls: "obr-shortcode" }).setText(this.previewText);
    }
}
