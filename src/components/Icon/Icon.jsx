import React from 'react';
import s from './Icon.module.css';

const Icon = ({ modalType, svgUrl, iconTitle, handleOpenModal, color, bg }) => {
  const parsedBg = bg ? JSON.parse(bg) : {};

  return (
    <div onClick={() => handleOpenModal(modalType)} className={s.icon}>
      <button>
        <svg width="40" height="40" fill={color} style={parsedBg}> 
          <use href={svgUrl}></use>
        </svg>
      </button>
      <p className={s.icon_title}>{iconTitle}</p>
    </div>
  );
};

export default Icon;
