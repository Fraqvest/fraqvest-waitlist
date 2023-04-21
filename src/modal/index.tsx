/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useModalContext } from '@/contex/modalContext';
import React, { useEffect, useRef } from 'react';

type Props = {
  children?: React.ReactNode;
};

function ModalWraper({ children }: Props) {
  const modalHook = useModalContext();
  // close the modal when clicking outside the modal.
  const modalRef = useRef<HTMLElement>();
  const modalClose = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === modalRef.current) {
      if (modalHook) modalHook.closeModal();
    }
  };
  useEffect(() => {
    if (modalHook?.displayModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalHook?.displayModal]);
  return (
    <div className={`container w-full`} ref={modalRef as React.RefObject<HTMLDivElement>} onClick={modalClose}>
      <main className="modal">{children}</main>
    </div>
  );
}

export default ModalWraper;
