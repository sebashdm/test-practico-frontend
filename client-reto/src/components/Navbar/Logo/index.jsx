import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/mercado-libre-logo.png";
import styles from "./styles.module.scss";

const Logo = () => (
  <div className={styles.logoContainer}>
    <Link to="/" aria-label="Volver al inicio" className={styles.logo}>
      <img src={logo} alt="Logo Mercado Libre" />
    </Link>
  </div>
);

export default Logo;
