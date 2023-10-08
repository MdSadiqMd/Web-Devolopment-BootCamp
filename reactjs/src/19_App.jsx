import React from 'react'
import { getDatabase , ref , set } from "firebase/database"
import { app } from './19_firebase'

const db=getDatabase(app);

function App() {

  const putdata=()=>{
    set(ref(db,"users/sadiq"),{
      id:1,
      name:"sadiq",
      age:21,
    });
  };

  return (
    <div className='App'>
      <h1>Firebase</h1>
      <button onClick={putdata}>putdata</button>
    </div>
  )
}

export default App