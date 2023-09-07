import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Number() {
  const { num } = useParams();
  return (
    <div>
      <h1>Number</h1>
      <p>The number is {num}.</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default Number;
