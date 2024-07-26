import React, { useState, useEffect } from 'react';
import './TwoTextBoxes.css';

const TwoTextBoxes = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [uniqueText, setUniqueText] = useState('');

  const processText = (text) => {
    return text
      .split('\n')
      .filter((line, index) => {
        return (
          !line.includes('profile picture') &&
          !line.includes('Instagram recommended') &&
          index % 2 !== 0
        );
      })
      .join('\n');
  };

  const handleText1Change = (e) => {
    const rawText = e.target.value;
    const processedText = processText(rawText);
    setText1(processedText);
  };

  const handleText2Change = (e) => {
    const rawText = e.target.value;
    const processedText = processText(rawText);
    setText2(processedText);
  };

  useEffect(() => {
    const set1 = new Set(text1.split('\n').filter(line => line.trim() !== ''));
    const set2 = new Set(text2.split('\n').filter(line => line.trim() !== ''));
    const unique = [...set1].filter(x => !set2.has(x)).concat([...set2].filter(x => !set1.has(x)));
    setUniqueText(unique.join('\n'));
  }, [text1, text2]);

  return (
    <div className="container">
      <textarea
        value={text1}
        onChange={handleText1Change}
        placeholder="Enter text here..."
        className="text-box"
      />
      <textarea
        value={text2}
        onChange={handleText2Change}
        placeholder="Paste text here..."
        className="text-box"
      />
      <textarea
        value={uniqueText}
        readOnly
        placeholder="Unique text will appear here..."
        className="text-box"
      />
    </div>
  );
};

export default TwoTextBoxes;
