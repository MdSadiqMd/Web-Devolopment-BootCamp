import React from 'react'
import square from './squares'

function Board() {
  return (
    <div className='board-container'>
        <div className='board-row'>
            <square />
            <square />
            <square />
        </div>
        <div className='board-row'>
            <square />
            <square />
            <square />
        </div>
        <div className='board-row'>
            <square />
            <square />
            <square />
        </div>
    </div>
  )
}

export default Board;