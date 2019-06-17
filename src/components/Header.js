import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/jjl-logo.svg";

const Container = styled.header`
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  flex-grow: 6;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

const Header = () => {
  return (
    <div>
    <Container>
      <Logo>
      <Link to="/">
        <img src={logo} width="126" alt="jjl logo" />
      </Link>
      </Logo>
      <Links>
        <div>
          <Link to="/projects">PROJECTS</Link>/
          <Link to="/projects">OVERVIEW</Link>
        </div>
        <div>
          <Link to="/projects">ABOUT</Link>/<Link to="/projects">JOURNAL</Link>
        </div>
      </Links>
    </Container>
    </div>
  );
};

export default Header;
