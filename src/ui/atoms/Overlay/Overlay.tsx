import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import * as S from "./Overlay.style";

export interface OverlayProps {
  children?: ReactNode;
  visible?: boolean;
  maxWidth?: string;
  maxHeight?: string;
  zIndex?: number;
  onClick?: () => void;
}

export const Overlay = ({ children, visible, ...props }: OverlayProps) => {
  return visible
    ? createPortal(<S.Overlay {...props}>{children}</S.Overlay>, document.body)
    : null;
};
