import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './18_redux/slice/todo';

function App() {
  const dispatch = useDispatch();
  
  return (
    <div className='App'>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch todos</button>
    </div>
  );
}

export default App;
