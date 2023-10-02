import React, { useState } from 'react';
import Square from './squares';

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
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if(state[index]!==null){ // This if block is used to not re-write the X/O
      return;
    }
    const copyState = [...state];
    if (copyState[index] || checkWinner()) {
      return;
    }
    copyState[index] = isX ? 'X' : 'O';
    setState(copyState);
    setX(!isX);
  };

  const handlereset = () => {
    setState(Array(9).fill(null));
    setX(true);
  };

  const winner = checkWinner();

  return (
    <div className='board-container' style={{ margin: "20px" }}>
      {winner ? (
        <>
          {winner} won the game {" "}
          <button onClick={handlereset} style={{border: "2px solid black"}}>Play again</button>
        </>
      ) : (
        <>
          <h4>Player {isX ? "X" : "O"} turn</h4>
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
        </>
      )}
    </div>
  );
}

export default Board;
