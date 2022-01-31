import React from "react";
import styled from "styled-components";


import Modal from "./Modal";
import { Button } from "../../styles/styles";

const ErrorButton = styled(Button)`
  background-color: var(--secondary-color);
  text-align: center;
  margin: 0;

  &:hover {
    background-color: var(--primary-color);
  }
`

const StyledP = styled.p`
  color: #666;
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
