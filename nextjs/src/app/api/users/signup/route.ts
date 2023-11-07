import {connect} from '@/db/db';
import User from '@/models/userModel'
import { NextRequest,NextResponse} from "next/server"
import bycrypt from 'bcryptjs';

connect();

export async function POST(request:NextRequest) {
    try{
        const reqBody=await request.json()
        const {username,email,password}=reqBody;

        // Check if user Exists
        const user= await User.findOne({email});
        if(user){
            return NextResponse.json({
                error:"User Not Found"
            },{status:500});
        }

        //hashing
        const salt=await bycrypt.genSalt(10) // hashing over 10 rounds
        const hashedPassword=await bycrypt.hash(password,salt);

        const newUser=new User({
            username,
            password:hashedPassword,
            email,
        })
        const savedUser=await newUser.save()

        return NextResponse.json({
            message:"User Crated Succesfully",
            success:true,
            savedUser
        })

    } catch(error:any){
        return NextResponse.json({error:error.message},{status:500});
    }
}