import React, { useState } from 'react';

const MadLibs = () => {
  const [noun, setNoun] = useState('');
  const [verb, setVerb] = useState('');
  const [adjective, setAdjective] = useState('');
  const [adverb, setAdverb] = useState('');
  const [story, setStory] = useState('');

  const generateStory = () => {
    const newStory = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} ${adverb}. The end.`;
    setStory(newStory);
  };

  return (
    <div>
      <h1>Mad Libs Story Generator</h1>
      <label>
        Noun:
        <input type="text" value={noun} onChange={(e) => setNoun(e.target.value)} />
      </label>
      <br />
      <label>
        Verb:
        <input type="text" value={verb} onChange={(e) => setVerb(e.target.value)} />
      </label>
      <br />
      <label>
        Adjective:
        <input type="text" value={adjective} onChange={(e) => setAdjective(e.target.value)} />
      </label>
      <br />
      <label>
        Adverb:
        <input type="text" value={adverb} onChange={(e) => setAdverb(e.target.value)} />
      </label>
      <br />
      <button onClick={generateStory}>Generate Story</button>
      <br />
      <p>{story}</p>
    </div>
  );
};

export default MadLibs;