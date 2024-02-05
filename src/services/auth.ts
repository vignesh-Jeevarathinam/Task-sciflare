import userModel from "../models/user";
import bcrypt from "bcryptjs/dist/bcrypt";
// import * as faker from 'faker';

const admin_credential = { userName: "Sciflare", password: "Qwerty@123" };

export const prepareSignup = async (
  userName: string,
  password: string,
  email: string,
  role: string,
  phone_number: number
) => {
  try {
    console.log("services prepareSignup");
    let user = new userModel({
      // employee_Id: faker.datatype.number({min:1, max: 200}),
      email: email,
      username: userName,
      password: bcrypt.hashSync(password, 10),
      role: role,
      phone_number: phone_number,
    });

    const user_Data = await user.save();

    console.log(
      "user data",
      password,
      bcrypt.hashSync(password, 10),
      user_Data
    );

    return { status: true, message: "user added successfully" };
  } catch (error) {
    console.log("ERROR in prepareSignup", error);
  }
};
