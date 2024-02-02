import { useState } from 'react';
import BaseModal from '@components/Modal/BaseModal';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const checkIsScroll = () => {
    return document.documentElement.scrollHeight > window.innerHeight;
  };

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    if (checkIsScroll()) {
      document.body.style.marginRight = '8px';
    }
  };
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      document.body.style.cssText = '';
    }
  };

  return {
    BaseModal,
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
