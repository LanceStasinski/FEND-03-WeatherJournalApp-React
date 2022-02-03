import { createGlobalStyle } from "styled-components";

import flamencoReg from "./fonts/Flamenco/Flamenco-Regular.ttf";
import openSansReg from "./fonts/Open_Sans/static/OpenSans/OpenSans-Regular.ttf";
import openSansMed from './fonts/Open_Sans/static/OpenSans/OpenSans-Medium.ttf'

export default createGlobalStyle`
  :root {
    --primary-color: rgb(123, 123, 233);
    --secondary-color: rgb(238, 144, 56);
    --tertiary-color: #EC6D4E;
    --fourth-color: #f5d4a6;
  }

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

  @font-face {
    font-family: 'Open Sans Medium';
    src: local('Open Sans Medium'), url(${openSansMed});
    font-weight: 500;
  }
`;
