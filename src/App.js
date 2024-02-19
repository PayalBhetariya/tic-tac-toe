import React, { useState, useRef } from 'react';
import './style.css';
import Square from './components/square';

export default function App() {
  const [input, setInput] = useState(['', '', '', '', '', '', '', '', '']);
  const [turn, setTurn] = useState('X');
  const winner = useRef();
  const addInput = function (position) {
    if (input[position]) return;
    const newInput = [...input];
    newInput[position] = turn;
    setInput(newInput);
    if (turn === 'X') {
      setTurn('O');
    } else setTurn('X');
    if (
      newInput[0] &&
      newInput[0] === newInput[1] &&
      newInput[1] === newInput[2]
    ) {
      winner.current = turn;
    }
    if (
      newInput[3] &&
      newInput[3] === newInput[4] &&
      newInput[4] === newInput[5]
    ) {
      winner.current = turn;
    }
    if (
      newInput[6] &&
      newInput[6] === newInput[7] &&
      newInput[7] === newInput[8]
    ) {
      winner.current = turn;
    }
    if (
      newInput[0] &&
      newInput[0] === newInput[3] &&
      newInput[3] === newInput[6]
    ) {
      winner.current = turn;
    }
    if (
      newInput[1] &&
      newInput[1] === newInput[4] &&
      newInput[4] === newInput[7]
    ) {
      winner.current = turn;
    }
    if (
      newInput[2] &&
      newInput[2] === newInput[5] &&
      newInput[5] === newInput[8]
    ) {
      winner.current = turn;
    }
    if (
      newInput[0] &&
      newInput[0] === newInput[4] &&
      newInput[4] === newInput[8]
    ) {
      winner.current = turn;
    }
    if (
      newInput[2] &&
      newInput[2] === newInput[4] &&
      newInput[4] === newInput[6]
    ) {
      winner.current = turn;
    }
  };

  return (
    <>
      {winner.current ? (
        <div>winner: {winner.current}</div>
      ) : (
        <div>
          <div className="board-row">
            <Square data={input[0]} onClick={() => addInput(0)} />
            <Square data={input[1]} onClick={() => addInput(1)} />
            <Square data={input[2]} onClick={() => addInput(2)} />
          </div>
          <div className="board-row">
            <Square data={input[3]} onClick={() => addInput(3)} />
            <Square data={input[4]} onClick={() => addInput(4)} />
            <Square data={input[5]} onClick={() => addInput(5)} />
          </div>
          <div className="board-row">
            <Square data={input[6]} onClick={() => addInput(6)} />
            <Square data={input[7]} onClick={() => addInput(7)} />
            <Square data={input[8]} onClick={() => addInput(8)} />
          </div>
        </div>
      )}

      {/* {winner.current} */}
    </>
  );
}
