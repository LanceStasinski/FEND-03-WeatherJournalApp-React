import React, { useRef, ReactNode } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import { Card, ModalHeading, HR, Footer } from "../../styles/styles";

const ModalOverlay = styled(Card)`
  box-shadow: none;
  top: 20vh;
  z-index: 100;
  position: fixed;
  left: 15%;
  width: 70%;
  padding: 0.5rem;

  @media (min-width: 768px) {
    width: 40%;
    left: 30%;
  }
`;

interface Props {
  show: boolean;
  onCancel: () => void;
  header?: string;
  footer?: ReactNode;
}

const Modal: React.FC<Props> = (props) => {
  const nodeRef = useRef(null);
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={300}
        classNames="slide-down"
        nodeRef={nodeRef}
      >
        <ModalOverlay ref={nodeRef}>
          <ModalHeading>{props.header}</ModalHeading>
          <HR />
          {props.children}
          <Footer>{props.footer}</Footer>
        </ModalOverlay>
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
