import userModel from "../models/user";
// import * as faker from 'faker';

export const prepareList = async () => {
  try {
    console.log("services prepareList");
    const userDetails = await userModel.find();
    return { status: true, message: "successfully", data: userDetails };
  } catch (error) {
    console.log("ERROR in prepareList", error);
  }
};

export const prepareUpdate = async (
  _id: string,
  userName: string,
  password: string,
  email: string,
  role: string,
  phone_number: number
) => {
  try {
    console.log("services prepareUpdate");
    const userDetails = await userModel.findByIdAndUpdate(_id, {
      userName,
      password,
      email,
      role,
      phone_number,
    });
    return { status: true, message: "Updated successfully", data: userDetails };
  } catch (error) {
    console.log("ERROR in prepareUpdate", error);
  }
};

export const prepareDelete = async (_id: string) => {
  try {
    console.log("services prepareDelete");
    const userDetails = await userModel.findByIdAndDelete(_id);
    return { status: true, message: "Deleted successfully", data: userDetails };
  } catch (error) {
    console.log("ERROR in prepareDelete", error);
  }
};
