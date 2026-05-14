import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true,unique:true,lowercase:true,trim:true},
password:{type:String,required:true},
role:{type:String,enum:["admin","manager","accountant","sales","support"],default:"admin"},
phone:{type:String,trim:true},
avatar:{type:String},
isActive:{type:Boolean,default:true},
lastLogin:{type:Date}
},{timestamps:true});

export default mongoose.model("User",userSchema);