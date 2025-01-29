import { useEffect, useRef, useState } from "react";

export const useModalManager = () => {
  const [currentModal, setCurrentModal] = useState(null);
  const modalRef = useRef(null);
  const openModal = (modalName) => setCurrentModal(modalName);
  const closeModal = () => setCurrentModal(null);

  const toggleModal = (modalName) => {
    if (currentModal === modalName) {
      closeModal();
    } else {
      openModal(modalName);
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      if (
        event.target.className.indexOf("swal2") === -1 &&
        !event.target.closest("#react-confirm-alert")
      ) {
        closeModal();
      }
    }
  };

  useEffect(() => {
    if (currentModal) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [currentModal]);

  return {
    currentModal,
    openModal,
    closeModal,
    toggleModal,
    modalRef,
    controller: { currentModal, openModal, closeModal, toggleModal, modalRef },
  };
};
