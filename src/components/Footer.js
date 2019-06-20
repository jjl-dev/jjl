import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.footer`
  padding: 100px 15px 20px 15px;
  display: flex;
  justify-content: space-between;
`;

const Links = styled.div`
  flex-grow: 3;
`;

const Description = styled.div`
  max-width: 500px;
`;

const Footer = () => {
  return (
    <Container>
        <Links>
          <Link to="/projects">INSTAGRAM</Link>/
          <Link to="/projects">EMAIL</Link>
        </Links>
        <Description>
        ©2019 JEREMY JUDE LEE. IMAGES AND CONTENT MAY NOT BE USED WITHOUT WRITTEN PERMISSION. ALL RIGHTS RESERVED. SITE DESIGN BY STUDIO FACULTY
        </Description>
    </Container>
  );
};

export default Footer;
