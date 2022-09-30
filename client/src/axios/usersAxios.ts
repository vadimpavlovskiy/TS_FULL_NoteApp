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

export async function loginUser(email: string, password: string) {
  try {
    const user = await axios.post("users/login", {
      email: email,
      password: password,
    });
    return console.log(user);
  } catch (err) {
    return err;
  }
}
