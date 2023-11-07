import mongoose, { MongooseError } from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide Username"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Please Provide email"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please Provide password"],
    },
    isVerified:{
        type:Boolean,
        default:true,
    },
    isAdmin:{
        type:Boolean,
        default:true,
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:String,
    verifyToken:String,
    verifyTokenExpiry:Date,
})

const User=mongoose.models.user || mongoose.model("users",userSchema);

export default User;