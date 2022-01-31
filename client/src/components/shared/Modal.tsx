import React, { useRef } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import { Card } from '../../styles/styles';

const ModalOverlay = styled(Card)`
  box-shadow: none;
  top: 20vh;
`

interface Props {
  show: boolean;
  onCancel: () => void;
  header?: string;
  footer?: string;
  nodeRef: React.MutableRefObject<null>;
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
        <ModalOverlay>

        </ModalOverlay>
      </CSSTransition>
    </React.Fragment>
  );
};
