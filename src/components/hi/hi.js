import React from "react";
import styles from "./style.module.css";

export const Hi = ({ name }) => {
  return <div className={styles.hi}>{name}</div>;
};

export default Hi;
