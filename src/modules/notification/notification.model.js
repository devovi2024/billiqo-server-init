import mongoose from "mongoose";

const notificationSchema=new mongoose.Schema({
title:String,
message:String,
notificationType:{type:String,enum:["invoice","payment","ai-insight","system"]},
receiver:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
isRead:{type:Boolean,default:false}
},{timestamps:true});

export default mongoose.model("Notification",notificationSchema);