"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; // from "next Navigation"
import React from "react";
import axios from "axios";

// "We think" as usual the NextJS will create a route for this but not as the Folder name we give as signup is correct but the file name should be page.tsx but not signup.tsx --> Now renamed
// testing go on "/signup"
function SignupPage(){
  const [user,setUser]=React.useState({
    email:"",
    password:"",
    username:"",
  });

  const onSignup=async()=>{

  }

  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
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
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Signup Page</button>
            <Link href="/login">Visit login page</Link>
        </div>
    </div>
  )
}

export default SignupPage