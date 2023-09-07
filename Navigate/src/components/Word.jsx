/*import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Word() {
  const { word } = useParams();
  return (
    <div>
      <h1>Word</h1>
      <p>The word is {word}.</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
  export default Word;
}*/


import React from 'react';
import { useParams } from 'react-router-dom';

function Word() {
  const { word } = useParams();
  return <h1>{word}</h1>;
}

export default Word;
