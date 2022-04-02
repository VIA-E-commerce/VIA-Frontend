import React, { ReactNode, useEffect } from 'react';

import { Overlay } from './Modal.styles';

interface ModalProps {
  show: boolean;
  children: ReactNode;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
}

const Modal = ({ show, children, onMouseDown }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'visible';
  }, [show]);

  return (
    <Overlay show={show} onMouseDown={onMouseDown}>
      {children}
    </Overlay>
  );
};

export default React.memo(Modal);
