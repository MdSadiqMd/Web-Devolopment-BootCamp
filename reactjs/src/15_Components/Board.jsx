import React, { useState } from 'react';
import Square from './Square';

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isX, setX] = useState(true);

  const winnerLogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (const logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const copyState = [...state];
    if (copyState[index] || checkWinner()) {
      return;
    }
    copyState[index] = isX ? 'X' : 'O';
    setState(copyState);
    setX(!isX);
  };

  const winner = checkWinner();
  let status;

  if (winner) {
    status = 'Winner: ' + winner;
  } else if (state.every((square) => square)) {
    status = 'It\'s a draw!';
  } else {
    status = 'Next player: ' + (isX ? 'X' : 'O');
  }

  return (
    <div className='board-container' style={{ margin: "20px" }}>
      <div className='board-row' style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <Square onClick={() => handleClick(0)} value={state[0]} />
        <Square onClick={() => handleClick(1)} value={state[1]} />
        <Square onClick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className='board-row' style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <Square onClick={() => handleClick(3)} value={state[3]} />
        <Square onClick={() => handleClick(4)} value={state[4]} />
        <Square onClick={() => handleClick(5)} value={state[5]} />
      </div>
      <div className='board-row' style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <Square onClick={() => handleClick(6)} value={state[6]} />
        <Square onClick={() => handleClick(7)} value={state[7]} />
        <Square onClick={() => handleClick(8)} value={state[8]} />
      </div>
    </div>
  );
}

export default Board;
