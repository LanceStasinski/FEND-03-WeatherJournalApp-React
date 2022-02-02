import React from "react";
import styled from "styled-components";


import Modal from "./Modal";
import { Button } from "../../styles/styles";

const ErrorButton = styled(Button)`
  background-color: var(--secondary-color);
  text-align: center;
  margin: 0;

  &:hover {
    animation: turnBlue 300ms linear forwards;
  }

  @keyframes turnBlue {
    from {
      background-color: var(--secondary-color);
    }
    to {
      background-color: var(--primary-color);
    }
  }
`

const StyledP = styled.p`
  color: #666;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

const ErrorModal: React.FC<{
  error: string | undefined;
  onClear: () => void;
}> = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An error occurred!"
      show={!!props.error}
      footer={<ErrorButton onClick={props.onClear}>Okay</ErrorButton>}
    >
      <StyledP>{props.error}</StyledP>
    </Modal>
  );
};

export default ErrorModal;
