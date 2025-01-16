import axios, { AxiosError } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IUser } from "@/types/user.interface";

const getAllUsers = async () => {
  const res = await axios.get("http://localhost:3001/users");

  return res.data;
};

export const useGetAllUsers = () => {
  return useQuery<IUser[], AxiosError>({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });
};

const editUser = async (data: IUser) => {
  const res = await axios.put(`http://localhost:3001/users/${data.id}`, data);

  return res.data;
};

export const useEditUser = () => {
  return useMutation({
    mutationFn: ({ data }: { data: IUser }) => editUser(data),
  });
};
const addUser = async (data: Omit<IUser, "id">) => {
  const res = await axios.post(`http://localhost:3001/users`, data);

  return res.data;
};

export const useAddUser = () => {
  return useMutation({
    mutationFn: ({ data }: { data: Omit<IUser, "id"> }) => addUser(data),
  });
};
