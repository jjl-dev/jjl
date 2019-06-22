import React from "react";
import styled from "styled-components";

import img1 from "../assets/jjlsp1.jpg";
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
  padding: 10px 0;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

const Img = styled.img`
  align-self: center;
`;

const Overview = () => {
  return (
    <React.Fragment>
      <Container>
        <DescriptionContainer>
          <div style={{ flex: "9" }}>
            <h4>J.CREW, FW18 SOCIAL CAMPAIGN</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ac nisl id tortor tincidunt auctor et nec quam. Aliquam blandit
              egestas augue, eget blandit turpis semper quis. Nam porttitor,
              tellus eu tincidunt commodo, lorem elit interdum urna, id
              fermentum elit dui ac risus. Sed non egestas tellus. Ut
              convallis aliquam justo. Proin convallis vulputate nunc ut
              tincidunt. Pellentesque eu posuere erat. Curabitur in nisl ac
              purus egestas tempor. Praesent eleifend leo ac metus auctor
              ultricies nec eu magna. Donec consequat neque in urna
              sollicitudin porttitor. Fusce a lorem mi. Proin posuere sapien
              in velit feugiat, molestie sagittis quam scelerisque. Duis
              blandit diam nec erat tincidunt, tincidunt laoreet augue
              iaculis. Praesent quis egestas lacus
            </p>
          </div>
          <div style={{ flex: "2" }} />
          <div style={{ flex: "7" }}>
            <ul>
              <li>VANCOUVER, CANADA</li>
              <li>Makeup: Megan Kwan</li>
              <li>Styling: Kathleen McCullough</li>
              <li>Furniture: Studio Faculty</li>
            </ul>
          </div>
          <div>
            <p>2018</p>
          </div>
        </DescriptionContainer>
        <ImgContainer>
          <ImgRow>
            <div>
              <Img src={img3} width="616" alt="jjl img3" />
              <Img src={img1} width="616" alt="jjl img1" />
            </div>
            <Img src={img2} style={{'align-self': 'flex-start'}} width="363" alt="jjl img2" />
          </ImgRow>

          <ImgRow>
            <Img src={img4} width="994px" alt="jjl img3" />
          </ImgRow>
        </ImgContainer>
      </Container>
    </React.Fragment>
  );
};

export default Overview;
