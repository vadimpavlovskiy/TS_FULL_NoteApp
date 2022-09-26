import jwt from "jsonwebtoken";

const verifyToken = async (token: string) => {
  const verifiedToken = await jwt.verify(token, process.env.JWT_SECRET);
  return verifiedToken;
};

export default verifyToken;
