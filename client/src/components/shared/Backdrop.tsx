import React from "react";
import ReactDOM from "react-dom";

import { StyledBackdrop } from "../../styles/styles";

const Backdrop: React.FC<{ onClick: () => void }> = (props) => {
  return ReactDOM.createPortal(
    <StyledBackdrop onClick={props.onClick} />,
    document.getElementById("backdrop-hook") as HTMLElement
  );
};

export default Backdrop;