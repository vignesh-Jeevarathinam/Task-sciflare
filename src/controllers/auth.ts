import { authServices } from "../services";
import { Request, Response } from "express";

export const signUp = (request: Request, response: Response) => {
  const { userName, password, email, role } = request.body;
  console.log("login controllers", request.body);
  const { status, message } = authServices.prepareSignup(
    userName,
    password,
    email,
    role
  );
  // .then(({ status, message }) => {
  //   console.log(status, message);
  // })
  // .catch((error) => {
  //   console.error("Error:", error);
  // });
  return response.status(200).json({ status: status, message: message });
};

export const login = (request: Request, response: Response) => {
  const { userName, password } = request.body;
  console.log("login controllers", request.body);
  const result = authServices.prepareLogin(userName, password);

  response.send(result);
};
