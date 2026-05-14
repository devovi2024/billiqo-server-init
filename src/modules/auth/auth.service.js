import bcrypt from "bcryptjs";
import User from "../users/user.model.js";
import { generateToken } from "../../utils/jwt.js";

export const registerUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    role: data.role || "admin",
  });
  return user;
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Wrong password");
  const token = generateToken(user);
  return { user, token };
};