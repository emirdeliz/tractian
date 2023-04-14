import { useLoading } from "@/ui";
import { useCallback } from "react";

export const useFetch = () => {
  const { appendLoadingOnStack, removeLoadingStack } = useLoading();
  const makeFetch = useCallback(
    async <T>(url: string) => {
      appendLoadingOnStack();
      const response = await fetch(url);
      const result = (await response.json()) as T;
      removeLoadingStack();
      return result;
    },
    [appendLoadingOnStack, removeLoadingStack]
  );

  return {
    makeFetch,
  };
};
