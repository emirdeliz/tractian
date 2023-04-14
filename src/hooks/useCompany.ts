import { CompanyModel } from "@/model";
import { useFetch } from "./useFetch";
import { useCallback } from "react";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useCompany = () => {
  const { makeFetch } = useFetch();
  const getCompanies = useCallback(async () => {
    const url = `${NEXT_PUBLIC_API_URL}/companies`;
    const result = await makeFetch<Array<CompanyModel>>(url);
    return result;
  }, [makeFetch]);
  return {
    getCompanies,
  };
};
