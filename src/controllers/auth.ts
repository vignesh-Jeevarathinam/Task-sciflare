import { authServices } from "../services";
import { Request, Response } from "express";

export const signUp = (request: Request, response: Response) => {
  const { userName, password, email, role, phone_number } = request.body;
  console.log("signUp controllers", request.body);
  authServices
    .prepareSignup(userName, password, email, role, phone_number)
    .then((result) => {
      return response
        .status(200)
        .json({ status: result?.status, message: result?.message });
    }).catch(err => response.status(404).send(err.message));
};



