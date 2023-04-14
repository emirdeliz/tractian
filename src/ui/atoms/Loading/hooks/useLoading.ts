import { LoadingContext } from "../Loading";
import { useCallback, useContext, useMemo } from "react";

export interface LoadingSimpleMessageProps {
  title?: string;
  message?: string;
}

export const useLoading = () => {
  const { loadingIdStack, setLoadingIdStack } = useContext(LoadingContext);
  const hasLoadingActive = useMemo(() => {
    return loadingIdStack.length > 0;
  }, [loadingIdStack.length]);

  const appendLoadingOnStack = useCallback(() => {
    const loadingId = `loading-${Date.now()}`;
    setLoadingIdStack((prevValue) => [...prevValue, loadingId]);
    return loadingId;
  }, [setLoadingIdStack]);

  const removeLoadingStack = useCallback(
    (loadingId?: string) => {
      setLoadingIdStack((prevValue) => {
        if (!loadingId) {
          const loadingIdStackUpdated = [...prevValue];
          loadingIdStackUpdated.pop();
          return loadingIdStackUpdated;
        }

        const stackUpdated = prevValue.filter((id) => id !== loadingId);
        return stackUpdated;
      });
    },
    [setLoadingIdStack]
  );

  return {
    hasLoadingActive,
    appendLoadingOnStack,
    removeLoadingStack,
  };
};
