import React from 'react';
import Model from './32_Components/Model';

const App = () => {
  return (
    <div className='bg-black text-white'>
      <div className='h-screen flex flex-col items-center gap-6'>
        <h1 className='text-5xl font-bold mt-4'>Popup Modal</h1>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Click Me</button>
      </div>
      <Model />
    </div>
  );
}

export default App;
