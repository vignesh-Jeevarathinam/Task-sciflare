import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
  //   employee_Id: {
  //     type: Number,
  //     required: true,
  //     unique: true,
  //   },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },

  phone_number: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const userModel = mongoose.model("user", user_schema);

export default userModel;
