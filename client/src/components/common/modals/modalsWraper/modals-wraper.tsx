import React from "react";
import styles from "./modals-wraper.module.scss";
interface IModalsWraper {
  component: any;
  isClose: boolean;
  closeHandler: any;
  outContentClick: any;
}
function ModalsWraper({
  component: Component,
  isClose,
  closeHandler,
  outContentClick,
  ...rest
}: IModalsWraper) {
  // const closHandlerType =(type:string)=>{
  //      closeHandler
  // }
  return (
    <>
      {!isClose && (
        <div className={styles.contactInfoModalContainer}>
          <button
            onClick={outContentClick}
            
          ></button>
          <div className={styles.contactInfoModal}>
            <Component closeHandler={closeHandler} {...rest} />
          </div>
        </div>
      )}
    </>
  );
}

export default ModalsWraper;
