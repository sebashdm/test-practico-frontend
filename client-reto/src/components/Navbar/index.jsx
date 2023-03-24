import React from "react";

import Logo from "../Logo";
import Styles from "./styles.module.scss";

const Navbar = () => (
  <nav className={Styles.navbar}>
    <Logo />
  </nav>
);

export default Navbar;
