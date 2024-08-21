import React from 'react'
import s from './Loader.module.css'
import { InfinitySpin } from 'react-loader-spinner'


const Loader = () => {
  return (
   <div className='centralizer'>
        <div className={s.loaderShape}><InfinitySpin
      visible={true}
      width="200"
      color="#4fa94d"
              ariaLabel="infinity-spin-loading"
              
      /></div>
   </div>
  )
}

export default Loader