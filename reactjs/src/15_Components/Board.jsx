import React from 'react';
import Square from './squares';

function Board() {
  return (
    <div className='board-container' style={{margin:"20px"}}>
      <div className='board-row' style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row' style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row' style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default Board;
