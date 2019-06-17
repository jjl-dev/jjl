import React from "react";
import styled from "styled-components";

import img1 from "../assets/jjl1.jpg";
import img2 from "../assets/jjl2.jpg";

const Container = styled.div`
  padding: 20px 15px;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

const Img = styled.img`
  align-self: center;
`;

const Projects = () => {
  return (
    <React.Fragment>
      <Container>
        <ImgContainer>
          <Img src={img1} width="363" alt="jjl img1" />
          <Img src={img2} width="363" alt="jjl img1" />
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
