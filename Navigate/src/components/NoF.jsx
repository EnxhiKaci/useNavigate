import React from 'react';

const NoF = () => {
  const { number } = useParams();

  const isValidNumber = !isNaN(Number(number));

  return isValidNumber ? <h1>{number}</h1> : <h1>Invalid Number</h1>;
};

export default NoF;
