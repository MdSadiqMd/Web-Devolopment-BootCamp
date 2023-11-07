"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; // from "next Navigation"
import React, { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

// ***In app directory we need to create a folder for every page and a file with name of "page.tsx" only then the nextJS will create that page without neccessarly us needed to create route for that page
// If we give any name other than page.tsx tha app crashes
// Don't Need to bother about routes this page inside app will automatically create a route no manually route creating steps required
const LoginPage = () => {
  const router=useRouter();
  const [user,setUser]=React.useState({
    email:"",
    password:"",
  });
  
  const [buttonDisabled,setButtonDisabled]=React.useState(false);
  const [loading,setLoading]=React.useState(false);

  useEffect(() => {
    if(user.email.length>0 && user.password.length>0){
      setButtonDisabled(false);
    } else{
      setButtonDisabled(true);
    }
  }, [user])

  const onLogin=async()=>{
    try{
      setLoading(true);
      const response=await axios.post("/api/users/login",user);
      console.log("login Sucess",response.data);
      router.push("/profile")
    } catch(error:any){
      console.log("login failed");
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading?"Loading":"Login page"}</h1>
        <hr />
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
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled?"Fill up all feilds":"Login"}</button>
            <Link href="/signup">Visit Signup Page</Link>
        </div>
    </div>
  )
}

export default LoginPage