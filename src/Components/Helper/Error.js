import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  return <p style={{ color: 'red' }}>{error}</p>;
};

export default Error;
