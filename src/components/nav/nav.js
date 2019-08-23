import React from "react";
import styles from "./nav.module.css";

export const Nav = ({ children }) => (
  <div className={styles.hi}>{children}</div>
);

export default Nav;
