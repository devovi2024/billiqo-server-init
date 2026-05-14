import { getDashboardService } from "./dashboard.service.js";

export const getAdminDashboard = async (req,res) => {
  try {
    const data=await getDashboardService();
    return res.status(200).json({
      success:true,
      message:"Admin dashboard fetched successfully",
      data
    });
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:error.message
    });
  }
};