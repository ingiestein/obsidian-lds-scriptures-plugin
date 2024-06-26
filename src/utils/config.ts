import {BookData} from '../types';

let CHURCH_ROOT_URL = "https://www.churchofjesuschrist.org"
let ALL_CONFERENCES_URL = CHURCH_ROOT_URL + "/study/general-conference"
let SCRIPTURES_ROOT_URL = CHURCH_ROOT_URL + "/study/scriptures"


export const NAME_QUERIES = [
    { name: 'h1', id: 'title1' },
    { name: 'h1', id: 'p1' },
    { name: 'h1', id: 'p4' },
    { name: 'h1', id: 'title56' }
];

export const AUTHOR_QUERIES = [
    { name: 'p', id: 'author1' },
    { name: 'p', id: 'p1' },
    { name: 'p', class: 'author-name' }
];

export const AUTHOR_TITLE = [
    { name: 'p', id: 'author2' },
    { name: 'p', class: 'author-role' }
]

export const PARAGRAPHS_IN_BODY_QUERY = { name: 'p' };

export const book_data:BookData = {
    "1-ne": { "volume": "bofm", "n_ch": 22, "names": ["1 Nephi", "1 Ne."] },
    "2-ne": { "volume": "bofm", "n_ch": 33, "names": ["2 Nephi", "2 Ne."] },
    "jacob": { "volume": "bofm", "n_ch": 7, "names": ["Jacob"] },
    "enos": { "volume": "bofm", "n_ch": 1, "names": ["Enos"] },
    "jarom": { "volume": "bofm", "n_ch": 1, "names": ["Jarom"] },
    "omni": { "volume": "bofm", "n_ch": 1, "names": ["Omni"] },
    "w-of-m": {
      "volume": "bofm",
      "n_ch": 1,
      "names": ["Words of Mormon", "W of M"]
    },
    "mosiah": { "volume": "bofm", "n_ch": 29, "names": ["Mosiah"] },
    "alma": { "volume": "bofm", "n_ch": 63, "names": ["Alma"] },
    "hel": { "volume": "bofm", "n_ch": 16, "names": ["Helaman", "Hel."] },
    "3-ne": { "volume": "bofm", "n_ch": 30, "names": ["3 Nephi", "3 Ne."] },
    "4-ne": { "volume": "bofm", "n_ch": 1, "names": ["4 Nephi", "4 Ne."] },
    "morm": { "volume": "bofm", "n_ch": 9, "names": ["Mormon", "Morm."] },
    "ether": { "volume": "bofm", "n_ch": 15, "names": ["Ether"] },
    "moro": { "volume": "bofm", "n_ch": 10, "names": ["Moroni", "Moro."] },
    "moses": { "volume": "pgp", "n_ch": 8, "names": ["Moses"] },
    "abr": { "volume": "pgp", "n_ch": 5, "names": ["Abraham", "Abr."] },
    "js-m": {
      "volume": "pgp",
      "n_ch": 1,
      "names": ["Joseph Smith—Matthew", "JS—M"]
    },
    "js-h": {
      "volume": "pgp",
      "n_ch": 1,
      "names": ["Joseph Smith—History", "JS—H"]
    },
    "a-of-f": {
      "volume": "pgp",
      "n_ch": 1,
      "names": ["Articles of Faith", "A of F"]
    },
    "dc": {
      "volume": "dc-testament",
      "n_ch": 138,
      "names": ["Doctrine and Covenants", "D&C"]
    },
    "gen": { "volume": "ot", "n_ch": 50, "names": ["Genesis", "Gen."] },
    "ex": { "volume": "ot", "n_ch": 40, "names": ["Exodus", "Ex."] },
    "lev": { "volume": "ot", "n_ch": 27, "names": ["Leviticus", "Lev."] },
    "num": { "volume": "ot", "n_ch": 36, "names": ["Numbers", "Num."] },
    "deut": { "volume": "ot", "n_ch": 34, "names": ["Deuteronomy", "Deut."] },
    "josh": { "volume": "ot", "n_ch": 24, "names": ["Joshua", "Josh."] },
    "judg": { "volume": "ot", "n_ch": 21, "names": ["Judges", "Judg."] },
    "ruth": { "volume": "ot", "n_ch": 4, "names": ["Ruth"] },
    "1-sam": { "volume": "ot", "n_ch": 31, "names": ["1 Samuel", "1 Sam."] },
    "2-sam": { "volume": "ot", "n_ch": 24, "names": ["2 Samuel", "2 Sam."] },
    "1-kgs": { "volume": "ot", "n_ch": 22, "names": ["1 Kings", "1 Kgs."] },
    "2-kgs": { "volume": "ot", "n_ch": 25, "names": ["2 Kings", "2 Kgs."] },
    "1-chr": { "volume": "ot", "n_ch": 29, "names": ["1 Chronicles", "1 Chr."] },
    "2-chr": { "volume": "ot", "n_ch": 36, "names": ["2 Chronicles", "2 Chr."] },
    "ezra": { "volume": "ot", "n_ch": 10, "names": ["Ezra"] },
    "neh": { "volume": "ot", "n_ch": 13, "names": ["Nehemiah", "Neh."] },
    "esth": { "volume": "ot", "n_ch": 10, "names": ["Esther", "Esth."] },
    "job": { "volume": "ot", "n_ch": 42, "names": ["Job"] },
    "ps": { "volume": "ot", "n_ch": 150, "names": ["Psalm", "Ps."] },
    "prov": { "volume": "ot", "n_ch": 31, "names": ["Proverbs", "Prov."] },
    "eccl": { "volume": "ot", "n_ch": 12, "names": ["Ecclesiastes", "Eccl."] },
    "song": {
      "volume": "ot",
      "n_ch": 8,
      "names": ["Song of Solomon", "Song.", "Song"]
    },
    "isa": { "volume": "ot", "n_ch": 66, "names": ["Isaiah", "Isa."] },
    "jer": { "volume": "ot", "n_ch": 52, "names": ["Jeremiah", "Jer."] },
    "lam": { "volume": "ot", "n_ch": 5, "names": ["Lamentations", "Lam."] },
    "ezek": { "volume": "ot", "n_ch": 48, "names": ["Ezekiel", "Ezek."] },
    "dan": { "volume": "ot", "n_ch": 12, "names": ["Daniel", "Dan."] },
    "hosea": { "volume": "ot", "n_ch": 14, "names": ["Hosea"] },
    "joel": { "volume": "ot", "n_ch": 3, "names": ["Joel"] },
    "amos": { "volume": "ot", "n_ch": 9, "names": ["Amos"] },
    "obad": { "volume": "ot", "n_ch": 1, "names": ["Obadiah", "Obad."] },
    "jonah": { "volume": "ot", "n_ch": 4, "names": ["Jonah"] },
    "micah": { "volume": "ot", "n_ch": 7, "names": ["Micah"] },
    "nahum": { "volume": "ot", "n_ch": 3, "names": ["Nahum"] },
    "hab": { "volume": "ot", "n_ch": 3, "names": ["Habakkuk", "Hab."] },
    "zeph": { "volume": "ot", "n_ch": 3, "names": ["Zephaniah", "Zeph."] },
    "hag": { "volume": "ot", "n_ch": 2, "names": ["Haggai", "Hag."] },
    "zech": { "volume": "ot", "n_ch": 14, "names": ["Zechariah", "Zech."] },
    "mal": { "volume": "ot", "n_ch": 4, "names": ["Malachi", "Mal."] },
    "matt": { "volume": "nt", "n_ch": 28, "names": ["Matthew", "Matt."] },
    "mark": { "volume": "nt", "n_ch": 16, "names": ["Mark"] },
    "luke": { "volume": "nt", "n_ch": 24, "names": ["Luke"] },
    "john": { "volume": "nt", "n_ch": 21, "names": ["John"] },
    "acts": { "volume": "nt", "n_ch": 28, "names": ["Acts"] },
    "rom": { "volume": "nt", "n_ch": 16, "names": ["Romans", "Rom."] },
    "1-cor": { "volume": "nt", "n_ch": 16, "names": ["1 Corinthians", "1 Cor."] },
    "2-cor": { "volume": "nt", "n_ch": 13, "names": ["2 Corinthians", "2 Cor."] },
    "gal": { "volume": "nt", "n_ch": 6, "names": ["Galatians", "Gal."] },
    "eph": { "volume": "nt", "n_ch": 6, "names": ["Ephesians", "Eph."] },
    "philip": { "volume": "nt", "n_ch": 4, "names": ["Philippians", "Philip."] },
    "col": { "volume": "nt", "n_ch": 4, "names": ["Colossians", "Col."] },
    "1-thes": {
      "volume": "nt",
      "n_ch": 5,
      "names": ["1 Thessalonians", "1 Thes."]
    },
    "2-thes": {
      "volume": "nt",
      "n_ch": 3,
      "names": ["2 Thessalonians", "2 Thes."]
    },
    "1-tim": { "volume": "nt", "n_ch": 6, "names": ["1 Timothy", "1 Tim."] },
    "2-tim": { "volume": "nt", "n_ch": 4, "names": ["2 Timothy", "2 Tim."] },
    "titus": { "volume": "nt", "n_ch": 3, "names": ["Titus"] },
    "philem": { "volume": "nt", "n_ch": 1, "names": ["Philemon", "Philem."] },
    "heb": { "volume": "nt", "n_ch": 13, "names": ["Hebrews", "Heb."] },
    "james": { "volume": "nt", "n_ch": 5, "names": ["James"] },
    "1-pet": { "volume": "nt", "n_ch": 5, "names": ["1 Peter", "1 Pet."] },
    "2-pet": { "volume": "nt", "n_ch": 3, "names": ["2 Peter", "2 Pet."] },
    "1-jn": { "volume": "nt", "n_ch": 5, "names": ["1 John", "1 Jn."] },
    "2-jn": { "volume": "nt", "n_ch": 1, "names": ["2 John", "2 Jn."] },
    "3-jn": { "volume": "nt", "n_ch": 1, "names": ["3 John", "3 Jn."] },
    "jude": { "volume": "nt", "n_ch": 1, "names": ["Jude"] },
    "rev": { "volume": "nt", "n_ch": 22, "names": ["Revelation", "Rev."] }
  }
  