import React from "react";
import { Overlay } from "..";
import {
  Context as LoadingContext,
  Provider as LoadingProvider,
} from "./context/LoadingContext";
import { useLoading } from "./hooks/useLoading";
import * as S from "./Loading.style";
import { Spin } from "antd";

export const Loading = () => {
  const { hasLoadingActive } = useLoading();
  return (
    <S.Container>
      {hasLoadingActive && (
        <>
          <Overlay visible zIndex={999} />
          <S.Spin>
            <Spin size="large" tip="Loading..." />
          </S.Spin>
        </>
      )}
    </S.Container>
  );
};

export { LoadingContext, LoadingProvider, useLoading };
