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
    return newUser;
  } catch (error: any) {
    return error.status;
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const user = await axios.post(
      "users/login",
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    );
    if (user.status === 200) {
      return user.data;
    }
  } catch (error: any) {
    return error.toJSON();
  }
}

export async function getUsersNotes() {
  try {
    const notes = await axios.get("notes", { withCredentials: true });

    console.log("====================================");
    console.log(notes.data);
    console.log("====================================");
    return notes.data;
  } catch (err) {
    return err;
  }
}
