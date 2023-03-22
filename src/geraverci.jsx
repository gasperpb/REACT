import React, { useState } from 'react';

const BibleVerse = () => {
    const [verse, setVerse] = useState('');

    const generateVerse = () => {
        const books = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'];

        const randomBook = books[Math.floor(Math.random() * books.length)];
        const randomChapter = Math.floor(Math.random() * 50) + 1;
        const randomVerse = Math.floor(Math.random() * 20) + 1;

        fetch(`https://bible-api.com/${randomBook}+${randomChapter}:${randomVerse}`)
            .then(response => response.json())
            .then(data => setVerse(`${data.reference}: ${data.text}`));
    };

    return (
        <div>
            <h1>Bible Verse Generator</h1>
            <button onClick={generateVerse}>Generate Verse</button>
            <p>{verse}</p>
        </div>
    );
};

export default BibleVerse;
