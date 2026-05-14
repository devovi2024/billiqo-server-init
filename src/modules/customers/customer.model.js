import mongoose from "mongoose";

const customerSchema=new mongoose.Schema({
customerId:{type:String,required:true,unique:true},
name:{type:String,required:true},
email:String,
phone:String,
company:String,
address:{
street:String,
city:String,
country:String,
zipCode:String
},
totalOrders:{type:Number,default:0},
totalSpent:{type:Number,default:0},
tags:[String],
notes:String,
createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
assignedTo:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
status:{type:String,enum:["active","inactive","blocked"],default:"active"}
},{timestamps:true});

export default mongoose.model("Customer",customerSchema);