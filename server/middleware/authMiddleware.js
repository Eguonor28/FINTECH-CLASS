import jwt from "jsonwebtoken";
import User from "../models/User.js";

//create a function an authentication middleware to protect
// it varifies jwt token and attaches a user to the request object

const protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res.status(401).json({ message: "Not authorized, no token" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (err) {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

export default protect;
