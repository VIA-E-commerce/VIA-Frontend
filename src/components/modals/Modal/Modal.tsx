import React, { ReactNode } from 'react';

import { Overlay } from './Modal.styles';

interface ModalProps {
  show: boolean;
  children: ReactNode;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
}

const Modal = ({ show, children, onMouseDown }: ModalProps) => {
  return (
    <Overlay show={show} onMouseDown={onMouseDown}>
      {children}
    </Overlay>
  );
};

export default React.memo(Modal);
