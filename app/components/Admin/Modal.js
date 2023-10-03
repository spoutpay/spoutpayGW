"use client";
import React, { useCallback, useEffect, useRef } from "react";

const Modal = ({ onClose, children, title, modalWrapperClassname }) => {
  const modalWrapperRef = useRef();

  const backDropHandler = useCallback((e) => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      onClose();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", backDropHandler);
    });
  }, []);

  useEffect(() => {
    return () => window.removeEventListener("click", backDropHandler);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div
        className={`${styles.modalWrapper}${modalWrapperClassname}`}
        ref={modalWrapperRef}
      >
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            {/* <a href="#" onClick={handleCloseClick}>
              x
            </a> */}
          </div>
          {title && <h1 className={styles.title}>{title}</h1>}
          <div className={styles.modalBody}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
