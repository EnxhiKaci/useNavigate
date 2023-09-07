/*import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Style() {
  const { word, color1, color2 } = useParams();
  return (
    <div style={{ color: color1, backgroundColor: color2 }}>
      <h1>Color</h1>
      <p>The word is {word}.</p>
      <p>The text color is {color1}.</p>
      <p>The background color is {color2}.</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default Style;
*/
import React from 'react';
import { useParams } from 'react-router-dom';

function Style() {
  const { word, color1, color2 } = useParams();
  const style = {
    color: color1,
    backgroundColor: color2,
  };
  return <h1 style={style}>{word}</h1>;
}

export default Style;
