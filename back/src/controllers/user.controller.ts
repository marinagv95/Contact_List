import { Request, Response } from "express";
import createUsersService from "../services/users/createUserService.service";
import { TUserRequest, TUserResponse, TUsersUpdateRequest } from "../interfaces/users.interface";
import deleteUsersService from "../services/users/deleteUserService.service";
import updateUsersService from "../services/users/updateUserService.service";
import listUserService from "../services/users/listUserService.service";
import retrieveUserService from "../services/users/retrieveUserService.service";

const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = req.body;
  const newUser = await createUsersService(userData);
  return res.status(201).json(newUser);
};

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listUserService();
  return res.json(users);
};

const retrieveUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  const user: TUserResponse = await retrieveUserService(userId);

  return res.json(user);
};

const updateUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUsersUpdateRequest = req.body;
  const userId: number = parseInt(req.params.id);

  const newUserData: TUserResponse = await updateUsersService(userData, userId);
  return res.json(newUserData);
};

const deleteUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  await deleteUsersService(userId);

  return res.status(204).send();
};


  export { createUsersController, updateUsersController, deleteUsersController, listUsersController, retrieveUsersController };