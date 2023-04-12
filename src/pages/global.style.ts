import { createGlobalStyle } from "styled-components";

const BODY_MIN_WIDTH = "300px";

const Global = createGlobalStyle`
  html, body, main, #__next {
    margin: 0;
    padding: 0;
		width: 100%;
		height: 100%;
  }

  body {
    min-width: ${BODY_MIN_WIDTH};
  }

  main {
    overflow: auto;
  }
`;

export default Global;
