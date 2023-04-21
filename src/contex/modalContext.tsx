import { createContext, useContext, useState } from 'react';
import { IProps, ModalProps } from './interface';

const ModalContext = createContext<ModalProps | null>(null);

const ModalProvider = ({ children }: IProps) => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  // toggle modal function
  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  return <ModalContext.Provider value={{ displayModal, toggleModal, closeModal }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;

export const useModalContext = () => {
  return useContext(ModalContext);
};
