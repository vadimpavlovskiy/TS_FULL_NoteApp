import axios from "axios";

export async function createUser(
  email: string,
  password: string,
  fullName: string
) {
  try {
    const newUser = await axios.post("users/register", {
      email: email,
      password: password,
      fullName: fullName,
    });
    return console.log(newUser);
  } catch (err) {
    return err;
  }
}
