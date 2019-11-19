import React, { useRef, useEffect } from "react";
import styles from "./tab.module.css";
import classnames from "classnames";

export const Tab = ({ children, name, active, setActive, index }) => {
  const tab = useRef(null);
  useEffect(() => {
    tab.current.style.setProperty("--grid-area", `tab${index}`);
  });
  return (
    <>
      <span
        ref={tab}
        onClick={setActive}
        className={classnames(styles.name, { [styles.active]: active })}
      >
        {name}
      </span>
      {active && <div className={styles.body}>{children}</div>}
    </>
  );
};

export default Tab;
