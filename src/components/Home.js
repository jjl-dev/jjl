import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Projects from "./Projects";

import img1 from "../assets/jjl1.jpg";
import img2 from "../assets/jjl2.jpg";
import img3 from "../assets/jjl3.jpg";
import img4 from "../assets/jjl4.jpg";
import img5 from "../assets/jjlo3.jpg";
import img6 from "../assets/jjlsp1.jpg";

const Container = styled.div`
  padding: 0 15px;
  padding-top: 76px;
`;

const ImgContainer = styled.div`
  &:first-child {
    padding: 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 50px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 30px 0;
  font-size: 11px;
`;

const MoreProjects = styled.div`
  padding: 30px 0 30px 0;
  font-size: 11px;
  font-family: Suisse Works Intl;
  letter-spacing: 0.05em;
`;

const Img = styled.img``;

const Year = styled.h4`
  font-family: Suisse Works Intl;
`;

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <ImgContainer>
          <Img src={img1} width="363" alt="jjl img3" />
          <Img src={img2} width="363" alt="jjl img4" />
        </ImgContainer>
        <DescriptionContainer>
          <h4>OAMC, FEATURED WORK</h4>
          <Year>2018</Year>
        </DescriptionContainer>
        <hr />
        <ImgContainer>
          <Img src={img3} width="237" alt="jjl img3" />
          <Img src={img4} width="488" alt="jjl img4" />
        </ImgContainer>
        <DescriptionContainer>
          <h4>OAMC, FEATURED WORK</h4>
          <Year>2018</Year>
        </DescriptionContainer>
        <hr />
        <ImgContainer>
          <Img src={img5} width="616" alt="jjl img3" />
          <Img src={img6} width="363" alt="jjl img4" />
        </ImgContainer>
        <DescriptionContainer>
          <h4>J.CREW, FW18 SOCIAL CAMPAIGN</h4>
          <Year>2018</Year>
        </DescriptionContainer>
        <hr />
        <Projects />
        <MoreProjects>
          <Link to="/projects">MORE PROJECTS</Link>
        </MoreProjects>
      </Container>
    </React.Fragment>
  );
};

export default Home;
