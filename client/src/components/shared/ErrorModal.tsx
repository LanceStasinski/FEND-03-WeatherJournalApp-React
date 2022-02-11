import React from "react";
import styled from "styled-components";


import Modal from "./Modal";
import { ErrorButton } from "../../styles/styles";



const StyledP = styled.p`
  color: #666;
  text-align: center;
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
