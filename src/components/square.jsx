import React from 'react';

export default function Square({ data, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {data}
    </button>
  );
}
