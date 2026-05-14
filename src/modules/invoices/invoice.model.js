import mongoose from "mongoose";

const itemSchema=new mongoose.Schema({
productName:String,
quantity:Number,
price:Number,
total:Number
});

const invoiceSchema=new mongoose.Schema({
invoiceNumber:{type:String,required:true,unique:true},
customer:{type:mongoose.Schema.Types.ObjectId,ref:"Customer",required:true},
items:[itemSchema],
subtotal:Number,
tax:Number,
discount:Number,
grandTotal:Number,
paymentMethod:{type:String,enum:["cash","card","bank","mobile-banking"]},
paymentStatus:{type:String,enum:["paid","pending","failed"],default:"pending"},
invoiceStatus:{type:String,enum:["draft","approved","cancelled"],default:"draft"},
issueDate:Date,
dueDate:Date,
notes:String,
createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
approvedBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
},{timestamps:true});

export default mongoose.model("Invoice",invoiceSchema);