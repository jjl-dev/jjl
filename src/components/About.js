import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import FadeIn from "react-lazyload-fadein";
import { Helmet } from "react-helmet";

import img1 from "../assets/jjlcontact.jpg";

// update background color of about page
const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => "#E8E6DC"};
  }
  header{
    background: ${props => "#E8E6DC !important"};
  }
  hr {
    border-top: 1px solid #C8C8C8; 
  }
`;

const Container = styled.div`
  padding: 15px;
  padding-top: 76px;
`;

const Bio = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 540px;
  padding: 50px 0;
  font-size: 15px;
  line-height: 21px;
  font-family: Suisse Works Intl;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;

  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`;

const Social = styled.ul`
  padding: 10px 0;
  font-family: Suisse Works;
  font-size: 15px;
  line-height: 21px;
`;

const SocialHeading = styled.li`
  padding: 10px 0;
  font-family: Suisse Works Intl;
  font-size: 15px;
  line-height: 3px;
`;

const Img = styled.img`
  padding: 10px;

  @media only screen and (max-width: 575px) {
    padding: 0;
  }
`;

const About = () => {
  return (
    <div className={"component-wrapper"}>
      <Helmet>
        <title>Jeremy Jude Lee : About</title>
        <meta name="description" content="Jeremy Jude Lee About" />
        <meta
          name="keywords"
          content="jeremy jude lee, about, vancouver bc, canada, lifestyle photography"
        />
      </Helmet>
      <FadeIn height={100} duration={300} easing={"ease-in-out"}>
        {onload => (
          <Container onLoad={onload}>
            <GlobalStyle />

            <Bio>
              <p>
                Jeremy Jude Lee is a photographer based in Vancouver, BC.
              </p>
            </Bio>

            <hr />

            <Info>
              <Social>
                <SocialHeading>Clients</SocialHeading>
                <li>Lululemon</li>
                <li>Arc'teryx</li>
                <li>Nike Canada</li>
                <li>Magazine B</li>
                <li>Hypebeast</li>
                <li>KOTN</li>
                <li>Herschel Supply Co.</li>
                <li>Canon Canada</li>
                <li>Highsnobiety</li>
                <li>Native Shoes</li>
                <li>Saje Wellness</li>
                <li>Studio Faculty</li>
                <li>Myodetox</li>
                <li>Roden Gray</li>
                <li>Everlane</li>
                <li>Aritzia</li>
                <li>Grailed</li>
                <li>Wasserman</li>
                <li>G.H. Bass</li>
                <li>Classpass</li>
                <li>Viberg Boots</li>
                <li>Bailey Nelson</li>
              </Social>
              <div>
                <Social>
                  <SocialHeading>Email</SocialHeading>
                  <li>info@jeremyjudelee.com</li>
                </Social>
                <Social>
                  <SocialHeading>Instagram</SocialHeading>
                  <li>
                    <a
                      href="https://www.instagram.com/jeremyjudelee"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @jeremyjudelee
                    </a>
                  </li>
                </Social>
              </div>
              <Img src={img1} width="237" height="298" alt="Jeremy Jude Lee" />
            </Info>
          </Container>
        )}
      </FadeIn>
    </div>
  );
};

export default About;
