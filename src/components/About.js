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
                Jeremy Jude Lee is a lifestyle and commercial photographer and
                videographer based out of Vancouver, Canada.
                <br />
                <br />
                Growing up in the city, Lee finds inspiration in the environment
                that surrounds him, using his lens as a way to frame and
                document the world as he sees it. His ability to capture unseen
                moments and evoke feeling through his images has established Lee
                as one of Vancouver’s go-to lifestyle photographers, and has
                taken him around the world telling visual stories in both film
                and in digital, for his global clients.
                <br />
                <br />
                He’s also a very nice guy.
              </p>
            </Bio>

            <hr />

            <Info>
              <Social>
                <SocialHeading>Clients</SocialHeading>
                <li>Lululemon</li>
                <li>Nike Canada</li>
                <li>Hypebeast</li>
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
                <li>Maekan</li>
                <li>Grailed</li>
                <li>Etsy</li>
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
                <Social>
                  <SocialHeading>Press</SocialHeading>
                  <li>
                    <a
                      href="https://www.heremagazine.com/articles/vancouver-bc-local-guide"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Here Magazine, 2020
                    </a>
                  </li>
                  
                  <li>
                    <a
                      href="https://www.booooooom.com/2019/02/19/myth-and-reality-by-photographer-jeremy-jude-lee/"
                      target="_blank"
                      rel="noopener noreferrer "
                    >
                      Booooooom.com, 2019
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://maekan.com/article/sights-sounds-jeremy-jude-lee/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Maekan, 2019
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.canon.ca/en/consumer/Get-Inspired/One2Watch"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Canon Canada, 2018
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mrgray.ca/blogs/stories/jeremy-jude-lee"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mr. Gray Socks, 2018
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://hypebae.com/2017/7/rubber-soul-editorial-jeremy-jude-lee-lauren-coutts"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hypebae, 2017
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://missbish.com/the-missbish-photography-workshop-jeremy-jude-lee/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MISSBISH 2016
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.creepmagazine.com/jeremy-jude-lee"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Creep Magazine, 2015
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://thecreatorclass.com/make-the-most-of-your-leading-lines-with-jeremy-jude-lee/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Creator Class, 2015
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
