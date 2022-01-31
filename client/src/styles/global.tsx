import { createGlobalStyle } from "styled-components";

import flamencoReg from "./fonts/Flamenco/Flamenco-Regular.ttf";
import openSansReg from "./fonts/Open_Sans/static/OpenSans/OpenSans-Regular.ttf";

export default createGlobalStyle`
  :root {
    --primary-color: rgb(123, 123, 233);
    --secondary-color: rgb(238, 144, 56);
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
`;
