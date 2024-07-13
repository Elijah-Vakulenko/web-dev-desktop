import React from 'react'
import s from './Icon.module.css'

const Icon = ({modalType, svgUrl, iconTitle,  handleOpenModal}) => {
  return (
    <div className={s.icon}>
        <button onClick={() => handleOpenModal(modalType)}>
          <svg className={s.dev_icon} width="40" height="40">
            <use xlinkHref={svgUrl}></use>
          </svg>
        </button>
        <p className={s.icon_title}>{iconTitle}</p>
      </div>
  )
}


export default Icon