import React, { useState ,useCallback } from "react";

function App(){
    const [length,setlength]=useState(8);
    const [numberAllowed,setNumberAllowed]=useState(false); // as chek box we use truw and false
    const [charAllowed,setCharAllowed]=useState(false);
    const [password,setpassword]=useState("");

    const passwordGenerator=useCallback(()=>{
        let pass="";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberAllowed) {
            str+="0123456789";
        } if(charAllowed) {
            str=+"! @ # $ % ^ & * ( ) _ + - = { } [ ] |  : ; ' < > , . ? / ~ `";
        }
        for(let i=1;i<Array.length;i++){
            let char=Math.floor(Math.random()*str.length+1);
            pass=str.charAt(char);
        }
        setpassword(pass);
    },[length,numberAllowed,charAllowed,setpassword()]);
    return(
        <>
            <h1 className="text-4xl text-center">Password Generator</h1>
        </>
    );
};
export default App