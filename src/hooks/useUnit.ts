import { UnitModel } from "@/model";
import { useFetch } from "./useFetch";
import { useCallback } from "react";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useUnit = () => {
  const { makeFetch } = useFetch();
  const getUnits = useCallback(async () => {
    const url = `${NEXT_PUBLIC_API_URL}/units`;
    const result = await makeFetch<Array<UnitModel>>(url);
    return result;
  }, [makeFetch]);
  return {
    getUnits,
  };
};
