import mongoose from "mongoose";

const transactionSchema=new mongoose.Schema({
transactionId:{type:String,required:true,unique:true},
invoice:{type:mongoose.Schema.Types.ObjectId,ref:"Invoice"},
customer:{type:mongoose.Schema.Types.ObjectId,ref:"Customer"},
amount:{type:Number},
transactionType:{type:String,enum:["income","expense","refund"]},
paymentMethod:{type:String,enum:["cash","card","bank","mobile-banking"]},
transactionStatus:{type:String,enum:["completed","pending","failed"],default:"pending"},
reference:{type:String},
description:{type:String},
createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
transactionDate:{type:Date}
},{timestamps:true});

export default mongoose.model("Transaction",transactionSchema);