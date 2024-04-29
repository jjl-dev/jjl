import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import FadeIn from "react-lazyload-fadein";
import { Helmet } from "react-helmet";

import jeremyImg from "../assets/jeremy-jude-lee-photographer-vancouver-los-angeles-new-york-HR.jpg";

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
  flex-direction: column;
  justify-content: space-between;
  max-width: 740px;
  padding: 50px 0;
  font-size: 15px;
  line-height: 21px;
  font-family: Suisse Works Intl;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 30px 0;

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
              <p>Jeremy Jude Lee is an artist and photographer based in Vancouver, Canada, splitting time between Los Angeles and New York. Jeremy is best known for his nostalgic storytelling narratives — inspired by cinema, skate culture, and music.</p>
              < br/>
              <p>His body of work is distinguished by cross-cultural identity, transcending time through memory, and capturing emotion through strong colours and composition.</p>
              < br/>
              <p>In 2022, Jeremy self published his first book, Montage : a compilation of film photographs organized by tone and colour, captured in cities all over the world. He is currently working on his first exhibition debut.</p>
              < br/>
              <p>Jeremy has been featured in Dazed, HYPEBEAST, Highsnobiety, Editorial Magazine, Magazine B, i-D, Street Dreams Magazine, Montecristo Magazine, Booooooom, MAEKAN, and more.</p>
            </Bio>

            <hr />

            <Info>
              <Social>
                <SocialHeading>Clients</SocialHeading>
                  <li>Apple </li>
                  <li>Alterior / A Living Taste</li>
                  <li>Arc'teryx</li>
                  <li>Aritzia</li>
                  <li>Bailey Nelson</li>
                  <li>Canon Canada</li>
                  <li>ClassPass</li>
                  <li>Etsy</li>
                  <li>Facebook (Meta)</li>
                  <li>Grailed</li>
                  <li>G.H. Bass</li>
                  <li>Herschel Supply Co.</li>
                  <li>KOTN</li>
                  <li>LOJEL</li>
                  <li>Lululemon</li>
                  <li>MEC (Mountain Equipment Company)</li>
                  <li>Myodetox</li>
                  <li>Native Shoes</li>
                  <li>Nike Canada</li>
                  <li>Primitive Skate</li>
                  <li>Raised By Wolves</li>
                  <li>Roden Gray</li>
                  <li>Saje Wellness</li>
                  <li>Uniqlo Canada</li>
                  <li>Viberg Boots</li>
                  <li>Vitruvi</li>
                  <li>Reigning Champ</li>
              </Social>
              <div>
                <Social>
                  <SocialHeading>Email</SocialHeading>
                  <li><a href="mailto:info@jeremyjudelee.com">info@jeremyjudelee.com</a></li>
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
              <Img src={jeremyImg} width="237" height="298" alt="Jeremy Jude Lee" />
            </Info>

            <hr />

            <div style={{paddingTop: "30px"}}>
              <Social>
                <SocialHeading>Books</SocialHeading>
                <li><a href="https://shop.jeremyjudelee.com/" target="_blank" rel="noopener noreferrer">Montage, Self Published, 136 pages, Soft Cover, 09/11/22</a></li>
              </Social>

              <Social>
                <SocialHeading>Videos</SocialHeading>
                  <li><a href="https://youtu.be/F8jxQvOFCK8" target="_blank" rel="noopener noreferrer">Joyride, JJ Adrian, 07/27/03</a></li>
                  <li><a href="https://www.youtube.com/watch?v=2P1OzhstGVQ&ab_channel=Highsnobiety" target="_blank" rel="noopener noreferrer">Exploring Performance and Evolution with Arc'teryx Veilance, Highsnobiety, 12/07/17</a></li>
                  <li><a href="https://www.youtube.com/watch?v=8uEYnX06Eq8&ab_channel=J.Crew" target="_blank" rel="noopener noreferrer">J.Crew on Film : J.Crew x New Balance 997 Cortado, 03/21/17</a></li>
              </Social>

              <Social>
                <SocialHeading>Interviews</SocialHeading>
                  <li><a href="https://mrgray.ca/blogs/stories/jeremy-jude-lee" target="_blank" rel="noopener noreferrer">Mr Gray, Creative Pioneer</a></li>
                  <li><a href="https://www.heartsofcanada.com/features/jeremy-jude-lee" target="_blank" rel="noopener noreferrer">Hearts of Canada, From the Heart</a></li>
                  <li><a href="https://www.heremagazine.com/articles/vancouver-bc-local-guide" target="_blank" rel="noopener noreferrer">Here Magazine, Local Guide to Vancouver</a></li>
                  <li><a href="https://sortdays.com/blogs/journal/jeremy-jude-lee-interview-book-launch-friends" target="_blank" rel="noopener noreferrer">SORT, Book Launch & Friends</a></li>
                  <li><a href="https://www.dazeddigital.com/art-photography/gallery/32503/0/pretty-boys-jeremy-jude-lee" target="_blank" rel="noopener noreferrer">Dazed, Sun-swamped photos of Vancouver’s prettiest boys  </a></li>
              </Social>
            </div>
          </Container>
        )}
      </FadeIn>
    </div>
  );
};

export default About;
