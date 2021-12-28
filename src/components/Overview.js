import React from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import FadeIn from "react-lazyload-fadein";
import { Helmet } from "react-helmet";

import img1 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0001.jpg";
import img2 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0002.jpg";
import img3 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0003.jpg";
import img4 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0004.jpg";
import img5 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0005.jpg";

import img6 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0006.jpg";
import img7 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0007.jpg";
import img8 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0008.jpg";
import img9 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0009.jpg";
import img10 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0010.jpg";
import img11 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0011.jpg";

import img12 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0012.jpg";

import img13 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0013.jpg";
import img14 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0014.jpg";
import img15 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0015.jpg";

import img16 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0016.jpg";
import img17 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0017.jpg";

import img18 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0018.jpg";
import img19 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0019.jpg";
import img20 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0020.jpg";

import img21 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0021.jpg";
import img22 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0022.jpg";
import img23 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0023.jpg";

import img24 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0024.jpg";

import img25 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0025.jpg";
import img26 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0026.jpg";
import img27 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0027.jpg";

import img28 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0028.jpg";
import img29 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0029.jpg";

import img30 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0034.jpg";
import img31 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0031.jpg";
import img32 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0032.jpg";

import img33 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0033.jpg";
import img34 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0030.jpg";
import img35 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0035.jpg";

import img36 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0036.jpg";

import img37 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0037.jpg";
import img38 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0038.jpg";
import img39 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0039.jpg";

import img40 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0040.jpg";
import img41 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0041.jpg";

import img42 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0042.jpg";
import img43 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0043.jpg";
import img44 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0044.jpg";

import img45 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0045.jpg";
import img46 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0046.jpg";
import img47 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0047.jpg";

import img48 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0048.jpg";

import img49 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0049.jpg";
import img50 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0050.jpg";
import img51 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0051.jpg";

import img52 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0052.jpg";
import img53 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0053.jpg";
import img54 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0054.jpg";

import img55 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0055.jpg";
import img56 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0056.jpg";
import img57 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0057.jpg";

import img58 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0058.jpg";
import img59 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0059.jpg";
import img60 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0060.jpg";

import img61 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0061.jpg";
import img62 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0062.jpg";
import img63 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0063.jpg";

import img64 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0064.jpg";
import img65 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0065.jpg";
import img66 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0066.jpg";

import img67 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0067.jpg";
import img68 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0068.jpg";
import img69 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0069.jpg";

import img70 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0070.jpg";
import img71 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0071.jpg";
import img72 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0072.jpg";

import img73 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0073.jpg";
import img74 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0074.jpg";
import img75 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0075.jpg";

import img76 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0076.jpg";
import img77 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0077.jpg";
import img78 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0078.jpg";

import img79 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0079.jpg";
import img80 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0080.jpg";
import img81 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0081.jpg";

import img82 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0082.jpg";
import img83 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0083.jpg";
import img84 from "../assets/vancouver_photographer_editorial_commercial_lifestyle_jeremy_jude_lee_0084.jpg";

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
        img48,
        img49,
        img50,
        img51,
        img52,
        img53,
        img54,
        img55,
        img56,
        img57,
        img58,
        img59,
        img60,
        img61,
        img62,
        img63,
        img64,
        img65,
        img66,
        img67,
        img68,
        img69,
        img70,
        img71,
        img72,
        img73,
        img74,
        img75,
        img76,
        img77,
        img78,
        img79,
        img80,
        img81,
        img82,
        img83,
        img84
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

            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(49)}
                    src={img49}
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
                    onClick={() => handlePhotoClick(50)}
                    src={img50}
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
                    onClick={() => handlePhotoClick(51)}
                    src={img51}
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
                    onClick={() => handlePhotoClick(52)}
                    onLoad={onload}
                    src={img52}
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
                    onClick={() => handlePhotoClick(53)}
                    src={img53}
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
                    onClick={() => handlePhotoClick(54)}
                    src={img54}
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
                    onClick={() => handlePhotoClick(55)}
                    src={img55}
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
                    onClick={() => handlePhotoClick(56)}
                    src={img56}
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
                    onClick={() => handlePhotoClick(57)}
                    src={img57}
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
                    onClick={() => handlePhotoClick(58)}
                    src={img58}
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
                    onClick={() => handlePhotoClick(59)}
                    src={img59}
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
                    onClick={() => handlePhotoClick(60)}
                    src={img60}
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
                    onClick={() => handlePhotoClick(61)}
                    src={img61}
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
                    onClick={() => handlePhotoClick(62)}
                    src={img62}
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
                    onClick={() => handlePhotoClick(63)}
                    src={img63}
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
                    onClick={() => handlePhotoClick(64)}
                    src={img64}
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
                    onClick={() => handlePhotoClick(65)}
                    src={img65}
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
                    onClick={() => handlePhotoClick(66)}
                    src={img66}
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
                    onClick={() => handlePhotoClick(67)}
                    src={img67}
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
                    onClick={() => handlePhotoClick(68)}
                    src={img68}
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
                    onClick={() => handlePhotoClick(69)}
                    src={img69}
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
                    onClick={() => handlePhotoClick(70)}
                    src={img70}
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
                    onClick={() => handlePhotoClick(71)}
                    src={img71}
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
                    onClick={() => handlePhotoClick(72)}
                    src={img72}
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
                    onClick={() => handlePhotoClick(73)}
                    src={img73}
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
                    onClick={() => handlePhotoClick(74)}
                    src={img74}
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
                    onClick={() => handlePhotoClick(75)}
                    src={img75}
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
                    onClick={() => handlePhotoClick(76)}
                    src={img76}
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
                    onClick={() => handlePhotoClick(77)}
                    src={img77}
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
                    onClick={() => handlePhotoClick(78)}
                    src={img78}
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
                    onClick={() => handlePhotoClick(79)}
                    src={img79}
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
                    onClick={() => handlePhotoClick(80)}
                    src={img80}
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
                    onClick={() => handlePhotoClick(81)}
                    src={img81}
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
                    onClick={() => handlePhotoClick(82)}
                    src={img82}
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
                    onClick={() => handlePhotoClick(83)}
                    src={img83}
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
                    onClick={() => handlePhotoClick(84)}
                    src={img84}
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
