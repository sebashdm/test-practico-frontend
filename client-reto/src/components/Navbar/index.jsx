import React from "react";
import Container from "../MainContainer";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Styles from "./styles.module.scss";

const Navbar = () => (
  <nav className={Styles.navbar}>
    <Container>
      <Logo />
      <SearchBox />
    </Container>
  </nav>
);

export default Navbar;
