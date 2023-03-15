import React, { useState } from 'react';

function CamelCaseScreen() {
    const [text, setText] = useState('');

    function formatText(text) {
        const words = text.split(' ');
        const formattedWords = words.map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        });
        return formattedWords.join('');
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <div>
            <h1>CamelCase Converter</h1>
            <input type="text" value={text} onChange={handleChange} placeholder="Type some text" />
            <p>{formatText(text)}</p>
        </div>
    );
}

export default CamelCaseScreen;
