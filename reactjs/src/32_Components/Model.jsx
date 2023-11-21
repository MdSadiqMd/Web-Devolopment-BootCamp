import React, { useRef } from 'react'
import { CopyX, Download } from 'lucide-react'

const Model = ({onClose}) => {
  const modelRef=useRef();
  // This function makes sure that when we click on any other place other than popup model then the block popup dissappears
  const closeModel=(e)=>{
    if(modelRef.current===e.target){
      onClose();
    }
  }
  return (
    <div ref={modelRef} onClick={closeModel} className='fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center'>
        <div className='mt-10 flex flex-col gap-5 text-white'>
            <button onClick={onClose} className='place-self-end'><CopyX size={30}/></button>
            <div className='bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
                <h1 className='text-3xl font-extrabold'>Lorem, ipsum dolor.</h1>
                <p className='text-3xl font-bold max-w-md text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <form>
                    <input type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your email" required/>
                    <button className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black'><Download />Lorem, ipsum dolor.</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Model