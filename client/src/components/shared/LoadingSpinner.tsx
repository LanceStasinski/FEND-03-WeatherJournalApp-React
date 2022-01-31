import React from "react";

import styled from "styled-components";

//animation derived from https://tobiasahlin.com/spinkit/

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  margin-bottom: 15rem;
  width: 70px;
  height: 70px;
  position: absolute;
  text-align: center;
  -webkit-animation: rotate 2s infinite linear;
  animation: rotate 2s infinite linear;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const Dot1 = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: var(--primary-color);
  border-radius: 100%;
  animation: bounce 2s infinite ease-in-out;

  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }

  @-webkit-keyframes bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }
`;

const Dot2 = styled(Dot1)`
  top: auto;
  bottom: 0;
  background-color: var(--secondary-color);
  animation-delay: -1s;
  -webkit-animation-delay: -1s;
`;

const LoadingSpinner: React.FC = () => {
  return (
    <Overlay>
      <Spinner>
        <Dot1></Dot1>
        <Dot2></Dot2>
      </Spinner>
    </Overlay>
  );
};

export default LoadingSpinner;
