import React, { ReactNode } from 'react';

import { Overlay } from './Modal.styles';

interface ModalProps {
  show: boolean;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Modal = ({ show, children, onClick }: ModalProps) => {
  return (
    <Overlay show={show} onClick={onClick}>
      {children}
    </Overlay>
  );
};

export default React.memo(Modal);
