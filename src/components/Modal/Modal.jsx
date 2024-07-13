import React, { useEffect } from 'react';
import s from './Modal.module.css';

const Modal = ({ title, close, layout, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return (
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={layout}>
        <div className={s.title_button}>
          <p className={s.folder_title}>{title}</p>
          <button onClick={close} className="cross-icon">
            <svg className="white" width="20" height="20">
              <use href="./img/symbol-defs.svg#icon-close"></use>
            </svg>
          </button>
        </div>
        <div className={s.modal_window_inside}>
          {children} {/* Дочерние элементы будут отрендерены здесь */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
