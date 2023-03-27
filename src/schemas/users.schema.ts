import * as yup from "yup";
import { Schema } from "yup";
import { IUser, IUserRequest, IUserUpdate } from "../interfaces/users";

export const createUsersSchema: Schema<IUserRequest> = yup.object().shape({
  name: yup.string().min(2).trim().required(`Name is required`),
  password: yup.string().trim().required(`Password is required`),
  email: yup
    .string()
    .trim()
    .email(`Invalid email`)
    .required(`Valid email required`),
  phone: yup.string().required(`Can't create account without a phone number`),
});

export const removedPasswordSchema: Schema<IUser> = yup.object().shape({
  id: yup.string().uuid().required(),
  name: yup.string().min(2).trim().required(),
  email: yup.string().trim().email(`Invalid email`).required(),
  phone: yup.string().length(11).required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  isActive: yup.boolean().required(),
});

export const updateUsersSchema: Schema<IUserUpdate> = yup.object().shape({
  name: yup.string().min(2).trim(),
  email: yup.string().trim().email(),
  password: yup.string().trim()
});

export const listRemovedPassowrdSchema = yup.array(removedPasswordSchema);