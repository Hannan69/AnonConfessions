import mongoose, {Schema, Document} from "mongoose"

export interface Message extends Document {
    content: string;
    createdAt: Date

}
const MessageSchema : Schema <Message>= new Schema ({
    content:{
        type:String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default:Date.now
    }
})

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    isVerified: boolean;
    verifyCodeExpiry: Date;
    isAcceptingMsg: boolean;
    //stores the message of every user
    messages: Message[]

}

const UserSchema : Schema <User> = new Schema ({
    username:{
        type: String,
        required: [true,"Username is Required"],
        //removes the spaces trim:true
        trim:true,
        unique:true
    },
    email:{
        type: String,
        required: [true,"Email is Required"],
        unique: true,
        match: [
            /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,"Please enter a valid Email",],
    },
    password:{
        type:String,
        required: [true, "Password is Required"]

    },
    verifyCode:{
        type: String,
        required:[true,"Verification is Required"]
    },
    verifyCodeExpiry:{
        type: Date,
        required:[true,"Expiry Required"]
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAcceptingMsg:{
        type:Boolean,
        default: true
    },
    // the below syntax is different because message type is already defined in messageSchema above 
    messages: [MessageSchema]
})

// mongoose.models.User checks if the User is present in the Database, mongoose.model<User> stores the users in User form  whereas mongoose.Model<User> is basically typescript type safety ensuring data entered is of User Data type
const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)
export default UserModel