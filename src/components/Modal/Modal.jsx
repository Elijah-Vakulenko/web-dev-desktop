import React, { useEffect } from 'react';
import s from './Modal.module.css';

const Modal = ({ title, close, children, customStyles }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [close]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  const outsideClass = customStyles?.outside || s.modal_window_outside;
  const insideClass = customStyles?.inside || s.modal_window_inside;
  const crossIconClass = customStyles?.crossIcon || s.cross_icon;

  return (
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={outsideClass}>
        <div className={s.title_button}>
          <p className={s.folder_title}>{title}</p>
          <button onClick={close} className={crossIconClass}>
            <svg style={{ fill: "white" }} width="20" height="20">
              <use href="/img/symbol-defs.svg#icon-close"></use>
            </svg>
          </button>
        </div>
        <div className={insideClass}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
