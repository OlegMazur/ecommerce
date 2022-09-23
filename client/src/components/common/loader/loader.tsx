import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./loader.module.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <FontAwesomeIcon icon={faSpinner} className="fa-spin" fontSize="30px" />
    </div>
  );
}

export default Loader;
