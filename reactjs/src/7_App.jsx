import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // Here we have the variables which we give default values using useState
  const [length, setLength] = useState(8); // Default length of password
  const [numberAllowed, setNumberAllowed] = useState(false); // as check box we give default unchecked check box means false
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState(""); // First we have empty password and fastly as the page renders we ceate one

  const passwordRef = useRef(null); // The useRef hook is used to take reference of any object in the web and manipulate it --> we use this to take refernce of generated password and when the password is copied the blue texture of password that it has copied

  const passwordGenerator = useCallback(() => {  // useCallback takes two inputs function,dependencies that manipulated by function
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass) // This line is to update the existing password when a parameter is changed
  }, [length, numberAllowed, charAllowed, setPassword]); // ** Here the last dependecy parameter we have given setpassword other than password as it is a way for optimization that when we add a parameter like add numbers rather than ceating a whole new password it just adds numbers in existing password

  const copyPasswordToClipboard = useCallback(() => { // This function is behind the copying of code 
    passwordRef.current?.select(); 
    passwordRef.current?.setSelectionRange(0, 999); // The selection range is the length of the password that to be copied for more understanding setSelectionRange(0, 3) and copy a password
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { // use effect takes two values funtion,dependencies but the difference between useCallback and useEffect is useEffect will run the function only any one of the dependencies get change and useCallback is used to run the function based on dependencies
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // we need to pass a ref Object in the text that need to be manipulated by reference
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}} // Manipulating the length using ***variable setLength as given in top
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App