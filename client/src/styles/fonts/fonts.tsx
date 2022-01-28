import { createGlobalStyle } from "styled-components";

import flamencoReg from "./Flamenco/Flamenco-Regular.ttf";
import openSansReg from "./Open_Sans/static/OpenSans/OpenSans-Regular.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: 'Flamenco';
    src: local('FlamencoReg'), url(${flamencoReg});
    font-weight: 400;
  }
  @font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'), url(${openSansReg});
    font-weight: 400;
  }
`;
