import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import img1 from "../assets/jjlcontact.jpg";

// update background color of about page
const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => ('#E8E6DC')};
  }
  header{
    background: ${props => ('#E8E6DC !important')};
  }
  hr {
    border-top: 1px solid #C8C8C8; 
  }
`

const Container = styled.div`
  padding: 15px;
  padding-top: 76px;
`;

const Bio = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 473px;
  padding: 50px 0;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

const Social = styled.ul`
  padding: 10px 0;
`;

const Img = styled.img`
  align-self: center;
`;

const Projects = () => {
  return (
    <React.Fragment>
            <GlobalStyle />

      <Container>
        <Bio>
          <p>
            Jeremy Jude Lee is a lifestyle photographer and videographer based
            in Vancouver, Canada. Lorem ipsum dolor sit amet, consaement
            adipiscing elit. Nam non scelerisque turpis, quis iaculis risus.
            Sed nectar porta arcu. Maecenas malesuada viverra tristique.
            Aenean egestasmo sem sit amet ultricies maximus. Vestibulum
            volutpat vestibulum. Maecenas malesuada viverra tristique. Aenean
            egestasmo sem sit amet ultricies maximus.
          </p>
        </Bio>

        <hr />

        <Info>
          <Social>
            <li>Clients</li>
            <li>Lululemon</li>
            <li>Hypebeast</li>
            <li>Hypebae</li>
            <li>OCIN</li>
            <li>J.Crew</li>
            <li>Arc’teryx</li>
            <li>Nike Running</li>
            <li>Vancouver Running Co.</li>
            <li>LOJEL</li>
            <li>OAMC</li>
            <li>aekan</li>
            <li>Highsnobiety</li>
            <li>Native Shoes</li>
            <li>Reigning Champ</li>
          </Social>
          <div>
            <Social>
              <li>Email</li>
              <li>info@jeremyjudelee.com</li>
            </Social>
            <Social>
              <li>Instagram</li>
              <li>@jjudelee</li>
              <li>Press</li>
            </Social>
            <Social>
              <li>Booooooo.com, 2019</li>
              <li>Mr. Gray Socks, 2018</li>
              <li>The Creator Class</li>
              <li>Creep Magazine, 2015</li>
            </Social>
          </div>
          <Img src={img1} width="237" alt="jjl contact" />
        </Info>
      </Container>
    </React.Fragment>
  );
};

export default Projects;
