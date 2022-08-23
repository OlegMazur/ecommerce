import React from 'react'
import styles from './modals-wraper.module.scss'
interface IModalsWraper{
    component:any,
    isClose:boolean,
    closeHandler:any
}
function ModalsWraper({component:Component,isClose, closeHandler , ...rest}:IModalsWraper) {
  return (
    <>{!isClose&& (
        <div className={styles.contactInfoModalContainer}>
          <div className={styles.contactInfoModal}>
            <Component closeHandler={closeHandler} {...rest} />
          </div>
        </div>
      )}</>
  )
}

export default ModalsWraper