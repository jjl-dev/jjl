import React from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import FadeIn from "react-lazyload-fadein";
import { Helmet } from "react-helmet";

import img1 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-1.jpg";
import img2 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-2.jpg";
import img3 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-3.jpg";
import img4 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-4.jpg";
import img5 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-5.jpg";

import img6 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-6.jpg";
import img7 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-7.jpg";
import img8 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-8.jpg";
import img9 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-9.jpg";
import img10 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-10.jpg";
import img11 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-11.jpg";

import img12 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-12.jpg";

import img13 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-13.jpg";
import img14 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-14.jpg";
import img15 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-15.jpg";

import img16 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-16.jpg";
import img17 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-17.jpg";

import img18 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-18.jpg";
import img19 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-19.jpg";
import img20 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-20.jpg";

import img21 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-21.jpg";
import img22 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-22.jpg";
import img23 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-23.jpg";

import img24 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-24.jpg";

import img25 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-25.jpg";
import img26 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-26.jpg";
import img27 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-27.jpg";

import img28 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-28.jpg";
import img29 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-29.jpg";

import img30 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-30.jpg";
import img31 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-31.jpg";
import img32 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-32.jpg";

import img33 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-33.jpg";
import img34 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-34.jpg";
import img35 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-35.jpg";

import img36 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-36.jpg";

import img37 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-37.jpg";
import img38 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-38.jpg";
import img39 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-39.jpg";

import img40 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-40.jpg";
import img41 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-41.jpg";

import img42 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-42.jpg";
import img43 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-43.jpg";
import img44 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-44.jpg";

import img45 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-45.jpg";
import img46 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-46.jpg";
import img47 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-47.jpg";

import img48 from "../assets/OVERVIEW-jeremyjudelee-vancouver-lifestyle-commercial-photographer-48.jpg";

const Container = styled.div`
  padding: 0 15px;
  padding-top: 30px;
`;

const ImgContainer = styled.div`
  display: block;
`;

const ImgRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 44px 0;

  @media only screen and (max-width: 575px) {
    flex-direction: column;
    padding: 0;
  }
`;

const Img = styled.img`
  align-self: flex-start;
  cursor: pointer;

  @media only screen and (max-width: 960px) {
    width: 94%;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
    padding: 10px 0;
  }
`;

const ImgSingle = styled.img`
  align-self: flex-start;
  cursor: pointer;

  @media only screen and (max-width: 960px) {
    width: 29%;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
    padding: 10px 0;
  }
`;

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
        img27,
        img28,
        img29,
        img30,
        img31,
        img32,
        img33,
        img34,
        img35,
        img36,
        img37,
        img38,
        img39,
        img40,
        img41,
        img42,
        img43,
        img44,
        img45,
        img46,
        img47,
        img48
      ],
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    const handlePhotoClick = e => {
      this.setState({ isOpen: true });
      this.setState({ photoIndex: e - 1 });
    };

    const imageFadeInDuration = 300;
    const imageHeight = 700;

    return (
      <React.Fragment>
        <Helmet>
          <title>Jeremy Jude Lee : Lifestyle and Commercial Photographer</title>
          <meta name="description" content="Jeremy Jude Lee is a lifestyle and commercial photographer and videographer based out of Vancouver, Canada. He's also a very nice guy." />
          <meta
            name="keywords"
            content="jeremy jude lee, overview, portfolio, vancouver bc, canada, lifestyle photography"
          />
        </Helmet>
        <Container>
          <ImgContainer>
            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(1)}
                    src={img1}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(2)}
                    src={img2}
                    onLoad={onload}
                    width="192"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(3)}
                    src={img3}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>

            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(4)}
                    onLoad={onload}
                    src={img4}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(5)}
                    src={img5}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>

            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(6)}
                    src={img6}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(7)}
                    src={img7}
                    onLoad={onload}
                    width="192"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(8)}
                    src={img8}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>

            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(9)}
                    src={img9}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(10)}
                    src={img10}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(11)}
                    src={img11}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>
            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <ImgSingle
                    onClick={() => handlePhotoClick(12)}
                    src={img12}
                    onLoad={onload}
                    width="194"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>
            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(13)}
                    src={img13}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(14)}
                    src={img14}
                    onLoad={onload}
                    width="194"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(15)}
                    src={img15}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>
            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(16)}
                    src={img16}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(17)}
                    src={img17}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>
            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(18)}
                    src={img18}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(19)}
                    src={img19}
                    onLoad={onload}
                    width="194"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(20)}
                    src={img20}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>
            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(21)}
                    src={img21}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(22)}
                    src={img22}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(23)}
                    src={img23}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>
            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <ImgSingle
                    onClick={() => handlePhotoClick(24)}
                    src={img24}
                    onLoad={onload}
                    width="194"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>
            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(25)}
                    src={img25}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(26)}
                    src={img26}
                    onLoad={onload}
                    width="192"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(27)}
                    src={img27}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>
            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(28)}
                    src={img28}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(29)}
                    src={img29}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>
            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(30)}
                    src={img30}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(31)}
                    src={img31}
                    onLoad={onload}
                    width="194"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(32)}
                    src={img32}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>
            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(33)}
                    src={img33}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(34)}
                    src={img34}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(35)}
                    src={img35}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>
            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <ImgSingle
                    onClick={() => handlePhotoClick(36)}
                    src={img36}
                    onLoad={onload}
                    width="194"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>

            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(37)}
                    src={img37}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(38)}
                    src={img38}
                    onLoad={onload}
                    width="192"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(39)}
                    src={img39}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>

            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(40)}
                    src={img40}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(41)}
                    src={img41}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>

            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(42)}
                    src={img42}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(43)}
                    src={img43}
                    onLoad={onload}
                    width="194"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(44)}
                    src={img44}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>

            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(45)}
                    src={img45}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(46)}
                    src={img46}
                    onLoad={onload}
                    width="237"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(47)}
                    src={img47}
                    onLoad={onload}
                    width="432"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>

            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <ImgSingle
                    onClick={() => handlePhotoClick(48)}
                    src={img48}
                    onLoad={onload}
                    width="194"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>

          </ImgContainer>
        </Container>

        {isOpen && (
          <Lightbox
            enableZoom={false}
            imagePadding={80}
            mainSrc={this.state.gallery[photoIndex]}
            nextSrc={
              this.state.gallery[(photoIndex + 1) % this.state.gallery.length]
            }
            prevSrc={
              this.state.gallery[
                (photoIndex + this.state.gallery.length - 1) %
                  this.state.gallery.length
              ]
            }
            onCloseRequest={() => {
              this.setState({ isOpen: false });
              this.setState({ photoIndex: 0 });
            }}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + this.state.gallery.length - 1) %
                  this.state.gallery.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.state.gallery.length
              })
            }
          />
        )}
      </React.Fragment>
    );
  }
}

export default Overview;
