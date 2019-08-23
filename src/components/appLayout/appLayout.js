import React from "react";
import logo from "./assets/logo.svg";
import Nav from "../nav/nav";
import styles from "./appLayout.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Landing } from "../landing/landing";
import { Article } from "../article/article";

export const AppLayout = ({ children }) => {
  return (
    <Router>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/article">Article</Link>
        </Nav>
      </header>
      <main>
        <Route exact path="/" component={Landing} />
        <Route exact path="/article" component={Article} />
      </main>
    </Router>
  );
};

export default AppLayout;
