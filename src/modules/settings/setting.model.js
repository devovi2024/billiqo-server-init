import mongoose from "mongoose";

const settingsSchema=new mongoose.Schema({
companyName:String,
companyEmail:String,
companyPhone:String,
currency:String,
timezone:String,
invoicePrefix:String,
taxPercentage:Number,
aiProvider:{type:String,enum:["openai","gemini"]},
theme:{type:String,enum:["light","dark"]},
updatedBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
},{timestamps:true});

export default mongoose.model("Settings",settingsSchema);