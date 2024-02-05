import { authServices } from "../services";
import { Request, Response } from "express";

export const signUp = (request: Request, response: Response) => {
  const { userName, password, email, role, phone_number } = request.body;
  console.log("login controllers", request.body);
  authServices
    .prepareSignup(userName, password, email, role, phone_number)
    .then((result) => {
      return response
        .status(200)
        .json({ status: result?.status, message: result?.message });
    }).catch(err => response.status(404).send(err.message));
};

export const login = (request: Request, response: Response) => {
  const { userName, password } = request.body;
  console.log("login controllers", request.body);
  const result = authServices.prepareLogin(userName, password);

  response.send(result);
};
