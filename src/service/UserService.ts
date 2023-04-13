import { UserModel } from "@/model";

export const getUsers = async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/tractian/fake-api/users"
  );
  return (await response.json()) as Array<UserModel>;
};
