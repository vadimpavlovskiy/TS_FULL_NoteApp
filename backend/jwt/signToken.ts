import jwt from "jsonwebtoken";

const getToken = async (email: string) => {
  return await jwt.sign({ email: email }, process.env.JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: process.env.JWT_EXPIRED,
  });
};

export default getToken;
