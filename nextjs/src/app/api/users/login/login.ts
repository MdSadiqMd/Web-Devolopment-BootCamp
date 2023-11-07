import {connect} from '@/db/db';
import User from '@/models/userModel'
import { NextRequest,NextResponse} from "next/server"
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

connect();

export async function POST(request:NextRequest){
    try{
        const reqBody=await request.json();
        const {email,password}=reqBody;
        console.log(reqBody);

        // Check if the user exists or not
        const user=await User.findOne({email});
        if(!user){
            return NextResponse.json({error:"User not Exist"},{status:400})
        }

        //check if password is correct
        const validatePassword=await bycrypt.compare(password,user.password)
        if(!validatePassword){
            return NextResponse.json({error:"Password is Invalid"},{status:400})
        }

        // create token data
        const tokenData={
            id:user._id, // in mongoDB Databse it is saved as _id
            username:user.username,
            email:user.email,
        }

        // create token
    } catch(error:any){
        return NextResponse.json({error:error.message},{status:500});
    }
}