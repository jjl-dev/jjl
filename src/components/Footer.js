import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  padding: 100px 15px 20px 15px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  clear: both;

  @media only screen and (max-width: 575px){
    flex-direction: column;
  }
`;

const Links = styled.div`
  flex-grow: 6;
`;

const Description = styled.div`
  max-width: 430px;
  font-size: 9px;
  line-height: 13px;

  @media only screen and (max-width: 575px){
    padding-top: 20px;
  }
`;

const Space = styled.div`
  flex-grow: 1;
`;

const Footer = () => {
  return (
    <Container>
        <Links>
          <a href="https://www.instagram.com/jeremyjudelee/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>/
          <a href="mailto:info@jeremyjudelee.com" style={{textTransform: "uppercase"}}>info@jeremyjudelee.com</a>
        </Links>
        <Description>
        ©2024 JEREMY JUDE LEE. IMAGES AND CONTENT MAY NOT BE USED WITHOUT WRITTEN PERMISSION. ALL RIGHTS RESERVED. SITE DESIGN BY STUDIO FACULTY
        </Description>
        <Space></Space>
    </Container>
  );
};

export default Footer;
