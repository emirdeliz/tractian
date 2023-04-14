import { UserModel } from "@/model";
import { useFetch } from "./useFetch";
import { useCallback } from "react";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useUser = () => {
  const { makeFetch } = useFetch();
  const getUsers = useCallback(async () => {
    const url = `${NEXT_PUBLIC_API_URL}/users`;
    const result = await makeFetch<Array<UserModel>>(url);
    return result;
  }, [makeFetch]);
  return {
    getUsers,
  };
};
