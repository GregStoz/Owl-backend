export interface IUser {
  name: string;
  email: string;
  phone: string;
  password: string;
}
export interface IUserReturn {
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IUserUpdate {
  name: string;
  email: string;
  phone: string;
  password: string;
  updatedAt: Date;
}
export interface IUserLogin{
  email: string;
  password: string;
}
export interface IUserData{
    id: string;
    name: string;
    email: string;
    phone: string;
}