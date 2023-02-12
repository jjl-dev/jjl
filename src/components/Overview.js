import React from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import FadeIn from "react-lazyload-fadein";
import { Helmet } from "react-helmet";

import img1 from "../assets/vancouver_photographer_jeremyjudelee_0001.jpg";
import img2 from "../assets/vancouver_photographer_jeremyjudelee_0002.jpg";
import img3 from "../assets/vancouver_photographer_jeremyjudelee_0003.jpg";
import img4 from "../assets/vancouver_photographer_jeremyjudelee_0004.jpg";
import img5 from "../assets/vancouver_photographer_jeremyjudelee_0005.jpg";

import img6 from "../assets/vancouver_photographer_jeremyjudelee_0006.jpg";
import img7 from "../assets/vancouver_photographer_jeremyjudelee_0007.jpg";
import img8 from "../assets/vancouver_photographer_jeremyjudelee_0008.jpg";
import img9 from "../assets/vancouver_photographer_jeremyjudelee_0009.jpg";
import img10 from "../assets/vancouver_photographer_jeremyjudelee_0010.jpg";
import img11 from "../assets/vancouver_photographer_jeremyjudelee_0011.jpg";

import img12 from "../assets/vancouver_photographer_jeremyjudelee_0012.jpg";

import img13 from "../assets/vancouver_photographer_jeremyjudelee_0013.jpg";
import img14 from "../assets/vancouver_photographer_jeremyjudelee_0014.jpg";
import img15 from "../assets/vancouver_photographer_jeremyjudelee_0015.jpg";

import img16 from "../assets/vancouver_photographer_jeremyjudelee_0016.jpg";
import img17 from "../assets/vancouver_photographer_jeremyjudelee_0017.jpg";

import img18 from "../assets/vancouver_photographer_jeremyjudelee_0018.jpg";
import img19 from "../assets/vancouver_photographer_jeremyjudelee_0019.jpg";
import img20 from "../assets/vancouver_photographer_jeremyjudelee_0020.jpg";

import img21 from "../assets/vancouver_photographer_jeremyjudelee_0021.jpg";
import img22 from "../assets/vancouver_photographer_jeremyjudelee_0022.jpg";
import img23 from "../assets/vancouver_photographer_jeremyjudelee_0023.jpg";

import img24 from "../assets/vancouver_photographer_jeremyjudelee_0024.jpg";

import img25 from "../assets/vancouver_photographer_jeremyjudelee_0025.jpg";
import img26 from "../assets/vancouver_photographer_jeremyjudelee_0026.jpg";
import img27 from "../assets/vancouver_photographer_jeremyjudelee_0027.jpg";

import img28 from "../assets/vancouver_photographer_jeremyjudelee_0028.jpg";
import img29 from "../assets/vancouver_photographer_jeremyjudelee_0029.jpg";

import img30 from "../assets/vancouver_photographer_jeremyjudelee_0034.jpg";
import img31 from "../assets/vancouver_photographer_jeremyjudelee_0031.jpg";
import img32 from "../assets/vancouver_photographer_jeremyjudelee_0032.jpg";

import img33 from "../assets/vancouver_photographer_jeremyjudelee_0033.jpg";
import img34 from "../assets/vancouver_photographer_jeremyjudelee_0030.jpg";
import img35 from "../assets/vancouver_photographer_jeremyjudelee_0035.jpg";

import img36 from "../assets/vancouver_photographer_jeremyjudelee_0036.jpg";

import img37 from "../assets/vancouver_photographer_jeremyjudelee_0037.jpg";
import img38 from "../assets/vancouver_photographer_jeremyjudelee_0038.jpg";
import img39 from "../assets/vancouver_photographer_jeremyjudelee_0039.jpg";

import img40 from "../assets/vancouver_photographer_jeremyjudelee_0040.jpg";
import img41 from "../assets/vancouver_photographer_jeremyjudelee_0041.jpg";

import img42 from "../assets/vancouver_photographer_jeremyjudelee_0042.jpg";
import img43 from "../assets/vancouver_photographer_jeremyjudelee_0043.jpg";
import img44 from "../assets/vancouver_photographer_jeremyjudelee_0044.jpg";

import img45 from "../assets/vancouver_photographer_jeremyjudelee_0045.jpg";
import img46 from "../assets/vancouver_photographer_jeremyjudelee_0046.jpg";
import img47 from "../assets/vancouver_photographer_jeremyjudelee_0047.jpg";

import img48 from "../assets/vancouver_photographer_jeremyjudelee_0048.jpg";

import img49 from "../assets/vancouver_photographer_jeremyjudelee_0049.jpg";
import img50 from "../assets/vancouver_photographer_jeremyjudelee_0050.jpg";
import img51 from "../assets/vancouver_photographer_jeremyjudelee_0051.jpg";

import img52 from "../assets/vancouver_photographer_jeremyjudelee_0052.jpg";
import img53 from "../assets/vancouver_photographer_jeremyjudelee_0053.jpg";
import img54 from "../assets/vancouver_photographer_jeremyjudelee_0054.jpg";

import img55 from "../assets/vancouver_photographer_jeremyjudelee_0055.jpg";
import img56 from "../assets/vancouver_photographer_jeremyjudelee_0056.jpg";
import img57 from "../assets/vancouver_photographer_jeremyjudelee_0057.jpg";

import img58 from "../assets/vancouver_photographer_jeremyjudelee_0058.jpg";
import img59 from "../assets/vancouver_photographer_jeremyjudelee_0059.jpg";
import img60 from "../assets/vancouver_photographer_jeremyjudelee_0060.jpg";

import img61 from "../assets/vancouver_photographer_jeremyjudelee_0061.jpg";
import img62 from "../assets/vancouver_photographer_jeremyjudelee_0062.jpg";
import img63 from "../assets/vancouver_photographer_jeremyjudelee_0063.jpg";

import img64 from "../assets/vancouver_photographer_jeremyjudelee_0064.jpg";
import img65 from "../assets/vancouver_photographer_jeremyjudelee_0065.jpg";
import img66 from "../assets/vancouver_photographer_jeremyjudelee_0066.jpg";

import img67 from "../assets/vancouver_photographer_jeremyjudelee_0067.jpg";
import img68 from "../assets/vancouver_photographer_jeremyjudelee_0068.jpg";
import img69 from "../assets/vancouver_photographer_jeremyjudelee_0069.jpg";

import img70 from "../assets/vancouver_photographer_jeremyjudelee_0070.jpg";
import img71 from "../assets/vancouver_photographer_jeremyjudelee_0071.jpg";
import img72 from "../assets/vancouver_photographer_jeremyjudelee_0072.jpg";

import img73 from "../assets/vancouver_photographer_jeremyjudelee_0073.jpg";
import img74 from "../assets/vancouver_photographer_jeremyjudelee_0074.jpg";
import img75 from "../assets/vancouver_photographer_jeremyjudelee_0075.jpg";

import img76 from "../assets/vancouver_photographer_jeremyjudelee_0076.jpg";
import img77 from "../assets/vancouver_photographer_jeremyjudelee_0077.jpg";
import img78 from "../assets/vancouver_photographer_jeremyjudelee_0078.jpg";

import img79 from "../assets/vancouver_photographer_jeremyjudelee_0079.jpg";
import img80 from "../assets/vancouver_photographer_jeremyjudelee_0080.jpg";
import img81 from "../assets/vancouver_photographer_jeremyjudelee_0081.jpg";

import img82 from "../assets/vancouver_photographer_jeremyjudelee_0082.jpg";
import img83 from "../assets/vancouver_photographer_jeremyjudelee_0083.jpg";
import img84 from "../assets/vancouver_photographer_jeremyjudelee_0084.jpg";

import img85 from "../assets/vancouver_photographer_jeremyjudelee_0085.jpg";
import img86 from "../assets/vancouver_photographer_jeremyjudelee_0086.jpg";
import img87 from "../assets/vancouver_photographer_jeremyjudelee_0087.jpg";

import img88 from "../assets/vancouver_photographer_jeremyjudelee_0088.jpg";
import img89 from "../assets/vancouver_photographer_jeremyjudelee_0089.jpg";
import img90 from "../assets/vancouver_photographer_jeremyjudelee_0090.jpg";

import img91 from "../assets/vancouver_photographer_jeremyjudelee_0091.jpg";
import img92 from "../assets/vancouver_photographer_jeremyjudelee_0092.jpg";
import img93 from "../assets/vancouver_photographer_jeremyjudelee_0093.jpg";

import img94 from "../assets/vancouver_photographer_jeremyjudelee_0094.jpg";
import img95 from "../assets/vancouver_photographer_jeremyjudelee_0095.jpg";
import img96 from "../assets/vancouver_photographer_jeremyjudelee_0096.jpg";

import img97 from "../assets/vancouver_photographer_jeremyjudelee_0097.jpg";
import img98 from "../assets/vancouver_photographer_jeremyjudelee_0098.jpg";
import img99 from "../assets/vancouver_photographer_jeremyjudelee_0099.jpg";

import img100 from "../assets/vancouver_photographer_jeremyjudelee_0100.jpg";
import img101 from "../assets/vancouver_photographer_jeremyjudelee_0101.jpg";
import img102 from "../assets/vancouver_photographer_jeremyjudelee_0102.jpg";

import img103 from "../assets/vancouver_photographer_jeremyjudelee_0103.jpg";
import img104 from "../assets/vancouver_photographer_jeremyjudelee_0104.jpg";
import img105 from "../assets/vancouver_photographer_jeremyjudelee_0105.jpg";

import img106 from "../assets/vancouver_photographer_jeremyjudelee_0106.jpg";
import img107 from "../assets/vancouver_photographer_jeremyjudelee_0107.jpg";
import img108 from "../assets/vancouver_photographer_jeremyjudelee_0108.jpg";

import img109 from "../assets/vancouver_photographer_jeremyjudelee_0109.jpg";
import img110 from "../assets/vancouver_photographer_jeremyjudelee_0110.jpg";
import img111 from "../assets/vancouver_photographer_jeremyjudelee_0111.jpg";

import img112 from "../assets/vancouver_photographer_jeremyjudelee_0112.jpg";
import img113 from "../assets/vancouver_photographer_jeremyjudelee_0113.jpg";
import img114 from "../assets/vancouver_photographer_jeremyjudelee_0114.jpg";

import img115 from "../assets/vancouver_photographer_jeremyjudelee_0115.jpg";
import img116 from "../assets/vancouver_photographer_jeremyjudelee_0116.jpg";
import img117 from "../assets/vancouver_photographer_jeremyjudelee_0117.jpg";

import img118 from "../assets/vancouver_photographer_jeremyjudelee_0118.jpg";
import img119 from "../assets/vancouver_photographer_jeremyjudelee_0119.jpg";
import img120 from "../assets/vancouver_photographer_jeremyjudelee_0120.jpg";

import img121 from "../assets/vancouver_photographer_jeremyjudelee_0121.jpg";
import img122 from "../assets/vancouver_photographer_jeremyjudelee_0122.jpg";
import img123 from "../assets/vancouver_photographer_jeremyjudelee_0123.jpg";
import img124 from "../assets/vancouver_photographer_jeremyjudelee_0124.jpg";
import img125 from "../assets/vancouver_photographer_jeremyjudelee_0125.jpg";
import img126 from "../assets/vancouver_photographer_jeremyjudelee_0126.jpg";
import img127 from "../assets/vancouver_photographer_jeremyjudelee_0127.jpg";
import img128 from "../assets/vancouver_photographer_jeremyjudelee_0128.jpg";
import img129 from "../assets/vancouver_photographer_jeremyjudelee_0129.jpg";

import img130 from "../assets/vancouver_photographer_jeremyjudelee_0130.jpg";
import img131 from "../assets/vancouver_photographer_jeremyjudelee_0131.jpg";
import img132 from "../assets/vancouver_photographer_jeremyjudelee_0132.jpg";

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
        img84,
        img85,
        img86,
        img87,
        img88,
        img89,
        img90,
        img91,
        img92,
        img93,
        img94,
        img95,
        img96,
        img97,
        img98,
        img99,
        img100,
        img101,
        img102,
        img103,
        img104,
        img105,
        img106,
        img107,
        img108,
        img109,
        img110,
        img111,
        img112,
        img113,
        img114,
        img115,
        img116,
        img117,
        img118,
        img119,
        img120,
        img121,
        img122,
        img123,
        img124,
        img125,
        img126,
        img127,
        img128,
        img129,
        img130,
        img131,
        img132,
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
          <title>Jeremy Jude Lee : Photographer</title>
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
            {/* hello */}

            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(85)}
                    src={img85}
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
                    onClick={() => handlePhotoClick(86)}
                    src={img86}
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
                    onClick={() => handlePhotoClick(87)}
                    src={img87}
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
                    onClick={() => handlePhotoClick(88)}
                    onLoad={onload}
                    src={img88}
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
                    onClick={() => handlePhotoClick(89)}
                    src={img89}
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
                    onClick={() => handlePhotoClick(90)}
                    src={img90}
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
                    onClick={() => handlePhotoClick(91)}
                    src={img91}
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
                    onClick={() => handlePhotoClick(92)}
                    src={img92}
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
                    onClick={() => handlePhotoClick(93)}
                    src={img93}
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
                    onClick={() => handlePhotoClick(94)}
                    src={img94}
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
                    onClick={() => handlePhotoClick(95)}
                    src={img95}
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
                    onClick={() => handlePhotoClick(96)}
                    src={img96}
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
                    onClick={() => handlePhotoClick(97)}
                    src={img97}
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
                    onClick={() => handlePhotoClick(98)}
                    src={img98}
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
                    onClick={() => handlePhotoClick(99)}
                    src={img99}
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
                    onClick={() => handlePhotoClick(100)}
                    onLoad={onload}
                    src={img100}
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
                    onClick={() => handlePhotoClick(101)}
                    src={img101}
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
                    onClick={() => handlePhotoClick(102)}
                    src={img102}
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
                    onClick={() => handlePhotoClick(103)}
                    src={img103}
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
                    onClick={() => handlePhotoClick(104)}
                    src={img104}
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
                    onClick={() => handlePhotoClick(105)}
                    src={img105}
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
                    onClick={() => handlePhotoClick(106)}
                    src={img106}
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
                    onClick={() => handlePhotoClick(107)}
                    src={img107}
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
                    onClick={() => handlePhotoClick(108)}
                    src={img108}
                    onLoad={onload}
                    width="194"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>

            {/* goodbye */}

            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(109)}
                    src={img109}
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
                    onClick={() => handlePhotoClick(110)}
                    src={img110}
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
                    onClick={() => handlePhotoClick(111)}
                    src={img111}
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
                    onClick={() => handlePhotoClick(112)}
                    onLoad={onload}
                    src={img112}
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
                    onClick={() => handlePhotoClick(113)}
                    src={img113}
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
                    onClick={() => handlePhotoClick(114)}
                    src={img114}
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
                    onClick={() => handlePhotoClick(115)}
                    src={img115}
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
                    onClick={() => handlePhotoClick(116)}
                    src={img116}
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
                    onClick={() => handlePhotoClick(117)}
                    src={img117}
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
                    onClick={() => handlePhotoClick(118)}
                    src={img118}
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
                    onClick={() => handlePhotoClick(119)}
                    src={img119}
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
                    onClick={() => handlePhotoClick(120)}
                    src={img120}
                    onLoad={onload}
                    width="194"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>

            {/* hello again */}

            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(121)}
                    src={img121}
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
                    onClick={() => handlePhotoClick(122)}
                    src={img122}
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
                    onClick={() => handlePhotoClick(123)}
                    src={img123}
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
                    onClick={() => handlePhotoClick(124)}
                    onLoad={onload}
                    src={img124}
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
                    onClick={() => handlePhotoClick(125)}
                    src={img125}
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
                    onClick={() => handlePhotoClick(126)}
                    src={img126}
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
                    onClick={() => handlePhotoClick(127)}
                    src={img127}
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
                    onClick={() => handlePhotoClick(128)}
                    src={img128}
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
                    onClick={() => handlePhotoClick(129)}
                    src={img129}
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
                    onClick={() => handlePhotoClick(130)}
                    src={img130}
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
                    onClick={() => handlePhotoClick(131)}
                    src={img131}
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
                    onClick={() => handlePhotoClick(132)}
                    src={img132}
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
