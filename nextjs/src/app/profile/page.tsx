"use client"
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"; 

function ProfilePage() {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success("Logout Successful");
      router.push("/login");
    } catch (error:any) {
      toast.error(error.message)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <h1>Profile Page</h1>
      <hr />
      <hr />
      <button
        onClick={logout}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Log out
      </button>
    </div>
  );
}

export default ProfilePage;
