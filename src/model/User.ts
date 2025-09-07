import mongoose , {Schema,Document} from "mongoose"


 export interface Message extends Document {
    content :string;
    createdAt:Date;

 }
 const MessageSchema: Schema<Message> = new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
 })
 export interface User extends Document {
    username:string;
    email:string;
    password:string;
    messages:Message[];
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerified:boolean;
    isAcceptingMessages:boolean;

 }
 const UserSchema:Schema<User> = new Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:true,

    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Please enter a valid email"]

    },
    verifyCode:{
        type:String,
        required:[true,"Verify Code is required"],

 },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"Verify Code Expiry is required"],

 },
    isVerified:{
        type:Boolean,
       
        default:false
    },
    isAcceptingMessages:{
        type:Boolean,
        default:false
    },
    messages:[MessageSchema]



})
const UserModel =(mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)
export default UserModel;