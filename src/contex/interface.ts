import React from 'react';

export interface ModalProps {
  displayModal: boolean | undefined;
  toggleModal: () => void;
  closeModal: () => void;
}

export interface IProps {
  children: React.ReactNode;
}
