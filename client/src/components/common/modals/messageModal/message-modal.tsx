import React from "react";
import styles from "./message-modal.module.scss";
interface IProp {
  messageText: string;
}

function MessageModal({ messageText }: IProp) {
  return <div className={styles.container}>{messageText}</div>;
}

export default MessageModal;
