import { CompanyModel } from "@/model";

export const getCompanies = async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/tractian/fake-api/companies"
  );
  return (await response.json()) as Array<CompanyModel>;
};
