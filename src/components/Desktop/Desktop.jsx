import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import Icon from '../Icon/Icon';
import s from './Desktop.module.css';
import icons from '../../assets/icons.json';
import { applyLinkScript } from '../linkScript';
import Hello from '../Modal/Hello';

const components = {
  Lections: React.lazy(() => import('../Content/Lections')),
  HTMLContent: React.lazy(() => import('../Content/Html')),
  CSSContent: React.lazy(() => import('../Content/Css')),
  JavaScript: React.lazy(() => import('../Content/JavaScript')),
  ReactLinks: React.lazy(() => import('../Content/ReactLinks')),
  NodeLinks: React.lazy(() => import('../Content/NodeLinks')),
  Libraries: React.lazy(() => import('../Content/Libraries')),
  YouTube: React.lazy(() => import('../Content/YouTube')),
  VSCode: React.lazy(() => import('../Content/VSCode')),
  ImageEditors: React.lazy(() => import('../Content/ImageEditors')),
  WebDesign: React.lazy(() => import('../Content/WebDesign')),
  HelpfulStuff: React.lazy(() => import('../Content/HelpfulStuff')),
  Repository: React.lazy(() => import('../Content/Repository')),
  Git: React.lazy(() => import('../Content/Git')),
  Job: React.lazy(() => import('../Content/Job')),
  Organizer: React.lazy(() => import('../Content/Organizer')),
  Eng: React.lazy(() => import('../Content/Eng')),
  CheatsheetGallery: React.lazy(() => import('../Content/CheatsheetGallery')),
  Upd: React.lazy(() => import('../Content/Upd'))
};

const Desktop = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalType) => {
    setOpenModal(modalType);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
     window.history.pushState('', document.title, window.location.pathname);
  };

  useEffect(() => {
    applyLinkScript();
  }, []);

  return (
    <div className={s.container}>
      {icons.map((icon) => {
        const ContentComponent = components[icon.contentComponent];
        const customStyles = icon.modalStyles || {};

        return (
          <li key={icon.id}>
            <Icon
              modalType={icon.modalType}
              svgUrl={icon.svgUrl}
              iconTitle={icon.iconTitle}
              handleOpenModal={handleOpenModal}
              color={icon.color}
              bg={icon.bg}
            />
            {openModal === icon.modalType && (
              <Modal title={icon.iconTitle} close={handleCloseModal} customStyles={customStyles}>
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ContentComponent />
                </React.Suspense>
              </Modal>
            )}
          </li>
          
        );
      })}
      <Hello/>
    </div>
  );
};

export default Desktop;
