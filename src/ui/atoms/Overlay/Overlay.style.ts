import styled from "styled-components";
import { OverlayProps } from "..";

export const Overlay = styled.div<OverlayProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({ zIndex }) => zIndex};
  opacity: 0.5;
  background-color: #000;
`;
