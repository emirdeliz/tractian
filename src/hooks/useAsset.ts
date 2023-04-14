import { AssetModel } from "@/model";
import { useFetch } from "./useFetch";
import { useCallback } from "react";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useAsset = () => {
  const { makeFetch } = useFetch();
  const getAssets = useCallback(async () => {
    const url = `${NEXT_PUBLIC_API_URL}/assets`;
    const result = await makeFetch<Array<AssetModel>>(url);
    return result;
  }, [makeFetch]);
  return {
    getAssets,
  };
};
