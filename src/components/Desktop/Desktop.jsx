import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Icon from '../Icon/icon';
import s from './Desktop.module.css';
import icons from '../../assets/icons.json';

import LectionsContent from '../Content/Lections';
import HTMLContent from '../Content/Html';
import CSSContent from '../Content/Css';

const Desktop = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalType) => {
    setOpenModal(modalType);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {icons.map((icon) => (
          <li key={icons.id}>
            <Icon
              modalType={icons.modalType}
              svgUrl={icons.svgUrl}
              iconTitle={icons.iconTitle}/>
          </li>
        ))}
    </ul>

      {openModal === 'lections' && (
        <Modal title="Lections" close={handleCloseModal} layout={s.modal_window_outside}>
          <LectionsContent />
        </Modal>
      )}
      {openModal === 'html' && (
        <Modal title="HTML" close={handleCloseModal} layout={s.modal_window_outside}>
          <HTMLContent />
        </Modal>
      )}
      {openModal === 'css' && (
        <Modal title="CSS" close={handleCloseModal} layout={s.modal_window_outside}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'js' && (
        <Modal title="JavaScript" close={handleCloseModal} layout={s.modal_window_outside}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'react' && (
        <Modal title="React.JS" close={handleCloseModal} layout={s.modal_window_outside}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'node' && (
        <Modal title="Node.JS" close={handleCloseModal} layout={s.modal_terminal_outside}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'libraries' && (
        <Modal title="LIBRARIES & API" close={handleCloseModal} layout={s.modal_window_outside}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'youtube' && (
        <Modal title="YouTube dor Developers" close={handleCloseModal} layout={s.modal_window_outside}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'vscode' && (
        <Modal title="VS Code Plugins" close={handleCloseModal} layout={s.modal_window_outside}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'img' && (
        <Modal title="IMAGE EDITORS" close={handleCloseModal} layout={s.modal_window_outside}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'design' && (
        <Modal title="WEB DESIGN" close={handleCloseModal} layout={s.modal_window_outside}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'helpfull' && (
        <Modal title="HELPFULL STUFF" close={handleCloseModal} layout={s.modal_window_outside}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'repository' && (
        <Modal title="REPOSITORY SETUP" close={handleCloseModal} layout={s.modal_window_outside}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'git' && (
        <Modal title="GIT TIPS & TRICKS" close={handleCloseModal} layout={s.modal_terminal_outside}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'job' && (
        <Modal title="Job Searching Resources" close={handleCloseModal} layout={s.modal_window_outside}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'organizer' && (
        <Modal title="WORK ORGANIZERS" close={handleCloseModal} layout={s.modal_window_outside}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'english' && (
        <Modal title="ENGLISH LEARNING TOOLS" close={handleCloseModal} layout={s.modal_window_outside}>
          <CSSContent />
        </Modal>
      )}


    </div>
  );
};

export default Desktop;
