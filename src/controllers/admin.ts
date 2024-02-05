import { Request, Response } from "express";
import { adminServices } from "../services";

export const getUserList = (request: Request, response: Response) => {
  console.log("getUserList controllers");
  adminServices
    .prepareList()
    .then((result) => {
      return response
        .status(200)
        .json({
          status: result?.status,
          message: result?.message,
          data: result?.data,
        });
    })
    .catch((err) => response.status(404).send(err.message));
};

export const updateUser = (request: Request, response: Response) => {
  const { _id, userName, password, email, role, phone_number } = request.body;
  console.log("updateUser controllers");
  adminServices
    .prepareUpdate(_id, userName, password, email, role, phone_number)
    .then((result) => {
      return response
        .status(200)
        .json({
          status: result?.status,
          message: result?.message,
          data: result?.data,
        });
    })
    .catch((err) => response.status(404).send(err.message));
};

export const deleteUser = (request: Request, response: Response) => {
  const { user_id } = request.params;
  adminServices
    .prepareDelete(user_id)
    .then((result) => {
      return response
        .status(200)
        .json({
          status: result?.status,
          message: result?.message,
          data: result?.data,
        });
    })
    .catch((err) => response.status(404).send(err.message));
};
