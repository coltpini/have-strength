import React, { useState, useEffect, useRef } from "react";
import styles from "./tabs.module.css";

export const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [length, setLength] = useState(0);
  const elem = useRef(null);

  const setActive = i => e => {
    setActiveIndex(i);
  };

  const childFinder = () => {
    const carr = children(setActive, activeIndex);
    const cren = React.Children.toArray(carr.props.children);

    if (length !== cren.length) setLength(cren.length);
    return carr;
  };

  useEffect(() => {
    const arr = [...new Array(length)];
    const tabRow = `"${arr.map((item, i) => `tab${i}`).join(" ")}"`;
    const contentRow = `"${arr.map((item, i) => `content`).join(" ")}"`;
    elem.current.style.setProperty("--tabs-row", tabRow);
    elem.current.style.setProperty("--content-row", contentRow);
  });

  return (
    <>
      <span>something</span>
      <div ref={elem} className={styles.tabs}>
        {childFinder()}
      </div>
    </>
  );
};

export default Tabs;
