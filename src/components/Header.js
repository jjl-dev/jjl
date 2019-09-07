import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/jjl-logo.svg";

const Container = styled.header`
  padding: 20px 15px;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  top: 0;
  max-width: 994px;
  background: #fff;
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: fill-available;
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
          <NavLink activeClassName='is-active' to="/projects">
            <img src={logo} width="126" alt="jjl logo" />
          </NavLink>
        </Logo>
        <Links>
          <div>
            <NavLink activeClassName='is-active' to="/projects">PROJECTS</NavLink>/
            <NavLink activeClassName='is-active' to="/overview">OVERVIEW</NavLink>
          </div>
          <div>
            <NavLink activeClassName='is-active' to="/about">ABOUT</NavLink>/<NavLink activeClassName='is-active' to="/Journal">JOURNAL</NavLink>
          </div>
        </Links>
      </Container>
    </div>
  );
};

export default Header;
