import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import img1 from "../assets/jjl1.jpg";
import img2 from "../assets/jjl2.jpg";
import img3 from "../assets/jjl3.jpg";
import img4 from "../assets/jjl4.jpg";

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
  padding-top: 50px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0 30px 0;
  font-size: 11px;
`;

const Img = styled.img`
  align-self: center;
`;

const Projects = () => {
  return (
    <React.Fragment>
      <Container>
        <ImgContainer>
          <Img src={img1} width="363" alt="jjl img3" />
          <Img src={img2} width="363" alt="jjl img4" />
        </ImgContainer>
        <DescriptionContainer>
          <h4>OAMC, FEATURED WORK</h4>
          <h4>2018</h4>
        </DescriptionContainer>
        <hr />
        <ImgContainer>
          <Img src={img3} width="237" alt="jjl img3" />
          <Img src={img4} width="488" alt="jjl img4" />
        </ImgContainer>
        <DescriptionContainer>
          <h4>OAMC, FEATURED WORK</h4>
          <h4>2018</h4>
        </DescriptionContainer>
      </Container>
      <hr />
    </React.Fragment>
  );
};

export default Projects;
