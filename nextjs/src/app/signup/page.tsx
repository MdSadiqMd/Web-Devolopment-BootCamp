"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; // from "next Navigation"
import React, { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

// "We think" as usual the NextJS will create a route for this but not as the Folder name we give as signup is correct but the file name should be page.tsx but not signup.tsx --> Now renamed
// testing go on "/signup"

// After signup and got to mongoDB and click on Database --> Browse Collections
function SignupPage(){
  const router=useRouter();
  const [user,setUser]=React.useState({
    email:"",
    password:"",
    username:"",
  });

  const [buttonDisabled,setButtonDisabled]=React.useState(false);
  const [loading,setLoading]=React.useState(false);

  useEffect(() => {
    if(user.email.length>0 && user.password.length>0 && user.username.length>0){
      setButtonDisabled(false);
    } else{
      setButtonDisabled(true);
    }
  }, [user])
  
  const onSignup=async()=>{
    try{
      setLoading(true);
      const response=await axios.post("/api/users/signup",user);
      console.log("signup Sucess",response.data);
      router.push("/login")
    } catch(error:any){
      console.log("Signup failed");
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading ? "Loading" : "Signup Page"}</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />
        <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"> {buttonDisabled?"No Signup Fill up the feilds":"Sign up"} </button>
            <Link href="/login">Visit login page</Link>
        </div>
    </div>
  )
}

export default SignupPage