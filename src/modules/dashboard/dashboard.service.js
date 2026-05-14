import User from "../users/user.model.js";
import Customer from "../customers/customer.model.js";
import Invoice from "../invoices/invoice.model.js";
import Transaction from "../transactions/transaction.model.js";
import AIInsight from "../ai-insights/ai.model.js";
import Analytics from "../analytics/analytics.model.js";

export const getDashboardService = async () => {
  const [totalUsers,totalCustomers,totalInvoices,totalTransactions]=await Promise.all([
    User.countDocuments(),
    Customer.countDocuments(),
    Invoice.countDocuments(),
    Transaction.countDocuments()
  ]);

  const revenueAgg=await Transaction.aggregate([
    {$match:{transactionType:"income"}},
    {$group:{_id:null,totalRevenue:{$sum:"$amount"}}}
  ]);

  const totalRevenue=revenueAgg[0]?.totalRevenue||0;

  const [recentInvoices,recentCustomers,aiInsights,analytics]=await Promise.all([
    Invoice.find().populate("customer","name email phone").sort({createdAt:-1}).limit(5),
    Customer.find().sort({createdAt:-1}).limit(5),
    AIInsight.find().sort({createdAt:-1}).limit(5),
    Analytics.findOne().sort({createdAt:-1})
  ]);

  return {
    summary:{
      totalUsers,
      totalCustomers,
      totalInvoices,
      totalTransactions,
      totalRevenue
    },
    recentInvoices,
    recentCustomers,
    aiInsights,
    analytics
  };
};