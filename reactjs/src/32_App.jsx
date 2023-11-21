import React, { useState } from 'react';
import Model from './32_Components/Model';

const App = () => {
    const [showModel,setShowModel]=useState(false);
    // This function will decide whether to showPopup or not
    const handlePopup=()=>{
        setShowModel(!showModel);
    }
  return (
    <div className='bg-black text-white'>
      <div className='h-screen flex flex-col items-center gap-6'>
        <h1 className='text-5xl font-bold mt-4'>Popup Modal</h1>
        <button onClick={handlePopup} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Click Me</button>
      </div>
      {showModel&&<Model onClose={()=>setShowModel(false)}/>}
    </div>
  );
}

export default App;
