import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Icon from '../Icon/Icon';
import s from './Desktop.module.css';
import icons from '../../assets/icons.json';
//------------------------------------------
import Lections from  '../Content/Lections'
import HTMLContent from '../Content/Html';
import CSSContent from '../Content/Css';
import JavaScript from '../Content/JavaScript';
import ReactLinks from '../Content/ReactLinks';
import NodeLinks from '../Content/NodeLinks';
import Libraries from '../Content/Libraries';
import YouTube from '../Content/YouTube';
import VSCode from '../Content/VSCode';
import ImageEditors from '../Content/ImageEditors';
import WebDesign from '../Content/WebDesign';
import HelpfulStuff from '../Content/HelpfulStuff';
import Repository from '../Content/Repository';
import Git from '../Content/Git';
import Job from '../Content/Job';
import Organizer from '../Content/Organizer';
import Eng from '../Content/Eng';



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
        {icons.map((icon) => (
          <li key={icon.id}>
            <Icon
              modalType={icon.modalType}
              svgUrl={icon.svgUrl}
              iconTitle={icon.iconTitle}
              handleOpenModal={handleOpenModal}
            />
          </li>
        ))}

      {openModal === 'lections' && (
        <Modal title="Lections" close={handleCloseModal}>
          <Lections />
        </Modal>
      )}
      {openModal === 'html' && (
        <Modal title="HTML" close={handleCloseModal}>
          <HTMLContent />
        </Modal>
      )}
      {openModal === 'css' && (
        <Modal title="CSS" close={handleCloseModal}>
          <CSSContent />
        </Modal>
      )}
      {openModal === 'js' && (
        <Modal title="JavaScript" close={handleCloseModal}>
          <JavaScript />
        </Modal>
      )}
      {openModal === 'react' && (
        <Modal title="React.JS" close={handleCloseModal}>
          <ReactLinks />
        </Modal>
      )}
      {openModal === 'node' && (
        <Modal title="Node.JS" close={handleCloseModal} layout={s.modal_terminal_outside}>
          <NodeLinks />
        </Modal>
      )}
      {openModal === 'libraries' && (
        <Modal title="LIBRARIES & API" close={handleCloseModal}>
          <Libraries/>
        </Modal>
      )}
      {openModal === 'youtube' && (
        <Modal title="YouTube for Developers" close={handleCloseModal}>
          <YouTube />
        </Modal>
      )}
      {openModal === 'vscode' && (
        <Modal title="VS Code Plugins" close={handleCloseModal}>
          <VSCode />
        </Modal>
      )}
      {openModal === 'img' && (
        <Modal title="IMAGE EDITORS" close={handleCloseModal}>
          <ImageEditors />
        </Modal>
      )}
      {openModal === 'design' && (
        <Modal title="WEB DESIGN" close={handleCloseModal}>
          <WebDesign />
        </Modal>
      )}
      {openModal === 'helpfull' && (
        <Modal title="HELPFUL STUFF" close={handleCloseModal}>
          <HelpfulStuff />
        </Modal>
      )}
      {openModal === 'repository' && (
        <Modal title="REPOSITORY SETUP" close={handleCloseModal}>
          <Repository />
        </Modal>
      )}
      {openModal === 'git' && (
        <Modal title="GIT TIPS & TRICKS" close={handleCloseModal}>
          <Git />
        </Modal>
      )}
      {openModal === 'job' && (
        <Modal title="Job Searching Resources" close={handleCloseModal}>
          <Job />
        </Modal>
      )}
      {openModal === 'organizer' && (
        <Modal title="WORK ORGANIZERS" close={handleCloseModal}>
          <Organizer />
        </Modal>
      )}
      {openModal === 'english' && (
        <Modal title="ENGLISH LEARNING TOOLS" close={handleCloseModal}>
          <Eng />
        </Modal>
      )}
    </div>
  );
};

export default Desktop;
