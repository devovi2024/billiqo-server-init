import mongoose from "mongoose";

const analyticsSchema=new mongoose.Schema({
date:Date,
totalRevenue:Number,
totalExpense:Number,
totalProfit:Number,
totalInvoices:Number,
totalCustomers:Number,
topSellingProducts:[{name:String,sales:Number}],
salesByDay:[{day:String,amount:Number}],
customerGrowth:Number
},{timestamps:true});

export default mongoose.model("Analytics",analyticsSchema);