import React from "react";
import styled from "styled-components";

import img1 from "../assets/jjlo1.jpg";
import img2 from "../assets/jjlo2.jpg";
import img3 from "../assets/jjlo3.jpg";
import img4 from "../assets/jjlo4.jpg";
import img5 from "../assets/jjlo5.jpg";

const Container = styled.div`
  padding: 0 15px;
  padding-top: 76px;
`;

const ImgContainer = styled.div`
  display: block;
`;

const ImgRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
`;

const Img = styled.img`
  align-self: center;
`;

const Overview = () => {
  return (
    <React.Fragment>
      <Container>
        <ImgContainer>
          <ImgRow>
            <Img src={img1} width="237" alt="jjl img1" />
            <Img src={img2} width="192" alt="jjl img2" />
            <Img src={img3} width="432" alt="jjl img3" />
          </ImgRow>
          <ImgRow>
            <Img src={img4} width="432" alt="jjl img3" />
            <Img src={img5} width="237" alt="jjl img3" />
          </ImgRow>
        </ImgContainer>
      </Container>
    </React.Fragment>
  );
};

export default Overview;
