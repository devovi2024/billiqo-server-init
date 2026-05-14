import mongoose from "mongoose";

const aiInsightSchema=new mongoose.Schema({
title:String,
insight:String,
insightType:{type:String,enum:["sales","revenue","expense","prediction","customer"]},
priority:{type:String,enum:["low","medium","high"]},
generatedBy:{type:String,enum:["openai","gemini"]},
relatedData:Object,
isRead:{type:Boolean,default:false}
},{timestamps:true});

export default mongoose.model("AIInsight",aiInsightSchema);