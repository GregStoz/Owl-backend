import { Request, Response } from "express";
import { IUserUpdate } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { getEspecificUserService } from "../services/users/getEspecificUser.service";
import { getUsersService } from "../services/users/getUsers.service";
import { updateUserService } from "../services/users/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const user = await createUserService(userData);
  return res.status(201).json(user);
};

export const getUsersController = async (req: Request, res: Response) => {
  const users = await getUsersService();
  return res.status(200).json(users);
};

export const getEspecificUserController = async (
  req: Request,
  res: Response
) => {
  const userId = req.user.id;
  const user = await getEspecificUserService(userId);
  return res.status(200).json(user);
};
export const updateUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const userData: IUserUpdate = req.body;
  const updatedUser = await updateUserService(userData, userId);
  return res.status(200).json(updatedUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const softDeleted = await deleteUserService(userId);
  return res.status(204).json(softDeleted);
};
