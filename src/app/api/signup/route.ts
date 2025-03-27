import dbConnect from "@/lib/dbConnect";
import { NextRequest,NextResponse } from "next/server";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs"
import { sendVerificationEmail } from "../send/route";


export async function POST (request: NextRequest){
    await dbConnect()
    try {
        const {username,email,password} = await request.json()
        //will return user who are verified
        const userExistsUsername = await UserModel.findOne({
            username,
            isVerified: true
        })
        if(userExistsUsername){
            return Response.json({
                success: false,
                message: 'Username is already taken'
            },{
                status:400
            })
        }
        const checkEmail = await UserModel.findOne({email})

        if(checkEmail){
            
        }
    } catch (error) {
        console.log("Error signing up", error)
        return Response.json({
            success: false,
            message: 'Error while registering'
        },{
            status:500
        })
    }
}
