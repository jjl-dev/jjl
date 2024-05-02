import React from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import FadeIn from "react-lazyload-fadein";
import { Helmet } from "react-helmet";

import img1 from "../assets/0001-JJL-OVERVIEW-PAGE.jpg";
import img2 from "../assets/0002-JJL-OVERVIEW-PAGE.jpg";
import img3 from "../assets/0003-JJL-OVERVIEW-PAGE.jpg";
import img4 from "../assets/0004-JJL-OVERVIEW-PAGE.jpg";
import img5 from "../assets/0005-JJL-OVERVIEW-PAGE.jpg";

import img6 from "../assets/0006-JJL-OVERVIEW-PAGE.jpg";
import img7 from "../assets/0007-JJL-OVERVIEW-PAGE.jpg";
import img8 from "../assets/0008-JJL-OVERVIEW-PAGE.jpg";
import img9 from "../assets/0009-JJL-OVERVIEW-PAGE.jpg";
import img10 from "../assets/0010-JJL-OVERVIEW-PAGE.jpg";
import img11 from "../assets/0011-JJL-OVERVIEW-PAGE.jpg";

import img12 from "../assets/0012-JJL-OVERVIEW-PAGE.jpg";

import img13 from "../assets/0013-JJL-OVERVIEW-PAGE.jpg";
import img14 from "../assets/0014-JJL-OVERVIEW-PAGE.jpg";
import img15 from "../assets/0015-JJL-OVERVIEW-PAGE.jpg";

import img16 from "../assets/0016-JJL-OVERVIEW-PAGE.jpg";
import img17 from "../assets/0017-JJL-OVERVIEW-PAGE.jpg";

import img18 from "../assets/0018-JJL-OVERVIEW-PAGE.jpg";
import img19 from "../assets/0019-JJL-OVERVIEW-PAGE.jpg";
import img20 from "../assets/0020-JJL-OVERVIEW-PAGE.jpg";

import img21 from "../assets/0021-JJL-OVERVIEW-PAGE.jpg";
import img22 from "../assets/0022-JJL-OVERVIEW-PAGE.jpg";
import img23 from "../assets/0023-JJL-OVERVIEW-PAGE.jpg";

import img24 from "../assets/0024-JJL-OVERVIEW-PAGE.jpg";

import img25 from "../assets/0025-JJL-OVERVIEW-PAGE.jpg";
import img26 from "../assets/0026-JJL-OVERVIEW-PAGE.jpg";
import img27 from "../assets/0027-JJL-OVERVIEW-PAGE.jpg";

import img28 from "../assets/0028-JJL-OVERVIEW-PAGE.jpg";
import img29 from "../assets/0029-JJL-OVERVIEW-PAGE.jpg";

import img30 from "../assets/0030-JJL-OVERVIEW-PAGE.jpg";
import img31 from "../assets/0031-JJL-OVERVIEW-PAGE.jpg";
import img32 from "../assets/0032-JJL-OVERVIEW-PAGE.jpg";

import img33 from "../assets/0033-JJL-OVERVIEW-PAGE.jpg";
import img34 from "../assets/0034-JJL-OVERVIEW-PAGE.jpg";
import img35 from "../assets/0035-JJL-OVERVIEW-PAGE.jpg";

import img36 from "../assets/0036-JJL-OVERVIEW-PAGE.jpg";

import img37 from "../assets/0037-JJL-OVERVIEW-PAGE.jpg";
import img38 from "../assets/0038-JJL-OVERVIEW-PAGE.jpg";
import img39 from "../assets/0039-JJL-OVERVIEW-PAGE.jpg";

import img40 from "../assets/0040-JJL-OVERVIEW-PAGE.jpg";
import img41 from "../assets/0041-JJL-OVERVIEW-PAGE.jpg";

import img42 from "../assets/0042-JJL-OVERVIEW-PAGE.jpg";
import img43 from "../assets/0043-JJL-OVERVIEW-PAGE.jpg";
import img44 from "../assets/0044-JJL-OVERVIEW-PAGE.jpg";

import img45 from "../assets/0045-JJL-OVERVIEW-PAGE.jpg";
import img46 from "../assets/0046-JJL-OVERVIEW-PAGE.jpg";
import img47 from "../assets/0047-JJL-OVERVIEW-PAGE.jpg";

import img48 from "../assets/0048-JJL-OVERVIEW-PAGE.jpg";

import img49 from "../assets/0049-JJL-OVERVIEW-PAGE.jpg";
import img50 from "../assets/0050-JJL-OVERVIEW-PAGE.jpg";
import img51 from "../assets/0051-JJL-OVERVIEW-PAGE.jpg";

import img52 from "../assets/0052-JJL-OVERVIEW-PAGE.jpg";
import img53 from "../assets/0053-JJL-OVERVIEW-PAGE.jpg";
import img54 from "../assets/0054-JJL-OVERVIEW-PAGE.jpg";

import img55 from "../assets/0055-JJL-OVERVIEW-PAGE.jpg";
import img56 from "../assets/0056-JJL-OVERVIEW-PAGE.jpg";
import img57 from "../assets/0057-JJL-OVERVIEW-PAGE.jpg";

import img58 from "../assets/0058-JJL-OVERVIEW-PAGE.jpg";
import img59 from "../assets/0059-JJL-OVERVIEW-PAGE.jpg";
import img60 from "../assets/0060-JJL-OVERVIEW-PAGE.jpg";

import img61 from "../assets/0061-JJL-OVERVIEW-PAGE.jpg";
import img62 from "../assets/0062-JJL-OVERVIEW-PAGE.jpg";
import img63 from "../assets/0063-JJL-OVERVIEW-PAGE.jpg";

import img64 from "../assets/0064-JJL-OVERVIEW-PAGE.jpg";
import img65 from "../assets/0065-JJL-OVERVIEW-PAGE.jpg";
import img66 from "../assets/0066-JJL-OVERVIEW-PAGE.jpg";

import img67 from "../assets/0067-JJL-OVERVIEW-PAGE.jpg";
import img68 from "../assets/0068-JJL-OVERVIEW-PAGE.jpg";
import img69 from "../assets/0069-JJL-OVERVIEW-PAGE.jpg";

import img70 from "../assets/0070-JJL-OVERVIEW-PAGE.jpg";
import img71 from "../assets/0071-JJL-OVERVIEW-PAGE.jpg";
import img72 from "../assets/0072-JJL-OVERVIEW-PAGE.jpg";

import img73 from "../assets/0073-JJL-OVERVIEW-PAGE.jpg";
import img74 from "../assets/0074-JJL-OVERVIEW-PAGE.jpg";
import img75 from "../assets/0075-JJL-OVERVIEW-PAGE.jpg";

import img76 from "../assets/0076-JJL-OVERVIEW-PAGE.jpg";
import img77 from "../assets/0077-JJL-OVERVIEW-PAGE.jpg";
import img78 from "../assets/0078-JJL-OVERVIEW-PAGE.jpg";

import img79 from "../assets/0079-JJL-OVERVIEW-PAGE.jpg";
import img80 from "../assets/0080-JJL-OVERVIEW-PAGE.jpg";
import img81 from "../assets/0081-JJL-OVERVIEW-PAGE.jpg";

import img82 from "../assets/0082-JJL-OVERVIEW-PAGE.jpg";
import img83 from "../assets/0083-JJL-OVERVIEW-PAGE.jpg";
import img84 from "../assets/0084-JJL-OVERVIEW-PAGE.jpg";

import img85 from "../assets/0085-JJL-OVERVIEW-PAGE.jpg";
import img86 from "../assets/0086-JJL-OVERVIEW-PAGE.jpg";
import img87 from "../assets/0087-JJL-OVERVIEW-PAGE.jpg";

import img88 from "../assets/0088-JJL-OVERVIEW-PAGE.jpg";
import img89 from "../assets/0089-JJL-OVERVIEW-PAGE.jpg";
import img90 from "../assets/0090-JJL-OVERVIEW-PAGE.jpg";

import img91 from "../assets/0091-JJL-OVERVIEW-PAGE.jpg";
import img92 from "../assets/0092-JJL-OVERVIEW-PAGE.jpg";
import img93 from "../assets/0093-JJL-OVERVIEW-PAGE.jpg";

import img94 from "../assets/0094-JJL-OVERVIEW-PAGE.jpg";
import img95 from "../assets/0095-JJL-OVERVIEW-PAGE.jpg";
import img96 from "../assets/0096-JJL-OVERVIEW-PAGE.jpg";

import img97 from "../assets/0097-JJL-OVERVIEW-PAGE.jpg";
import img98 from "../assets/0098-JJL-OVERVIEW-PAGE.jpg";
import img99 from "../assets/0099-JJL-OVERVIEW-PAGE.jpg";

import img100 from "../assets/0100-JJL-OVERVIEW-PAGE.jpg";
import img101 from "../assets/0101-JJL-OVERVIEW-PAGE.jpg";
import img102 from "../assets/0102-JJL-OVERVIEW-PAGE.jpg";

import img103 from "../assets/0103-JJL-OVERVIEW-PAGE.jpg";
import img104 from "../assets/0104-JJL-OVERVIEW-PAGE.jpg";
import img105 from "../assets/0105-JJL-OVERVIEW-PAGE.jpg";

import img106 from "../assets/0106-JJL-OVERVIEW-PAGE.jpg";
import img107 from "../assets/0107-JJL-OVERVIEW-PAGE.jpg";
import img108 from "../assets/0108-JJL-OVERVIEW-PAGE.jpg";

import img109 from "../assets/0109-JJL-OVERVIEW-PAGE.jpg";
import img110 from "../assets/0110-JJL-OVERVIEW-PAGE.jpg";
import img111 from "../assets/0111-JJL-OVERVIEW-PAGE.jpg";

import img112 from "../assets/0112-JJL-OVERVIEW-PAGE.jpg";
import img113 from "../assets/0113-JJL-OVERVIEW-PAGE.jpg";
import img114 from "../assets/0114-JJL-OVERVIEW-PAGE.jpg";

import img115 from "../assets/0115-JJL-OVERVIEW-PAGE.jpg";
import img116 from "../assets/0116-JJL-OVERVIEW-PAGE.jpg";
import img117 from "../assets/0117-JJL-OVERVIEW-PAGE.jpg";

import img118 from "../assets/0118-JJL-OVERVIEW-PAGE.jpg";
import img119 from "../assets/0119-JJL-OVERVIEW-PAGE.jpg";
import img120 from "../assets/0120-JJL-OVERVIEW-PAGE.jpg";

import img121 from "../assets/0121-JJL-OVERVIEW-PAGE.jpg";
import img122 from "../assets/0122-JJL-OVERVIEW-PAGE.jpg";
import img123 from "../assets/0123-JJL-OVERVIEW-PAGE.jpg";
import img124 from "../assets/0124-JJL-OVERVIEW-PAGE.jpg";
import img125 from "../assets/0125-JJL-OVERVIEW-PAGE.jpg";
import img126 from "../assets/0126-JJL-OVERVIEW-PAGE.jpg";
import img127 from "../assets/0127-JJL-OVERVIEW-PAGE.jpg";
import img128 from "../assets/0128-JJL-OVERVIEW-PAGE.jpg";
import img129 from "../assets/0129-JJL-OVERVIEW-PAGE.jpg";
import img130 from "../assets/0130-JJL-OVERVIEW-PAGE.jpg";
import img131 from "../assets/0131-JJL-OVERVIEW-PAGE.jpg";
import img132 from "../assets/0132-JJL-OVERVIEW-PAGE.jpg";

import img133 from "../assets/0133-JJL-OVERVIEW-PAGE.jpg";
import img134 from "../assets/0134-JJL-OVERVIEW-PAGE.jpg";
import img135 from "../assets/0135-JJL-OVERVIEW-PAGE.jpg";
import img136 from "../assets/0136-JJL-OVERVIEW-PAGE.jpg";
import img137 from "../assets/0137-JJL-OVERVIEW-PAGE.jpg";
import img138 from "../assets/0138-JJL-OVERVIEW-PAGE.jpg";
import img139 from "../assets/0139-JJL-OVERVIEW-PAGE.jpg";

import img140 from "../assets/0140-JJL-OVERVIEW-PAGE.jpg";
import img141 from "../assets/0141-JJL-OVERVIEW-PAGE.jpg";
import img142 from "../assets/0142-JJL-OVERVIEW-PAGE.jpg";
import img143 from "../assets/0143-JJL-OVERVIEW-PAGE.jpg";
import img144 from "../assets/0144-JJL-OVERVIEW-PAGE.jpg";
import img145 from "../assets/0145-JJL-OVERVIEW-PAGE.jpg";
import img146 from "../assets/0146-JJL-OVERVIEW-PAGE.jpg";
import img147 from "../assets/0147-JJL-OVERVIEW-PAGE.jpg";
import img148 from "../assets/0148-JJL-OVERVIEW-PAGE.jpg";
import img149 from "../assets/0149-JJL-OVERVIEW-PAGE.jpg";

import img150 from "../assets/0150-JJL-OVERVIEW-PAGE.jpg";
import img151 from "../assets/0151-JJL-OVERVIEW-PAGE.jpg";
import img152 from "../assets/0152-JJL-OVERVIEW-PAGE.jpg";
import img153 from "../assets/0153-JJL-OVERVIEW-PAGE.jpg";
import img154 from "../assets/0154-JJL-OVERVIEW-PAGE.jpg";
import img155 from "../assets/0155-JJL-OVERVIEW-PAGE.jpg";
import img156 from "../assets/0156-JJL-OVERVIEW-PAGE.jpg";
import img157 from "../assets/0157-JJL-OVERVIEW-PAGE.jpg";
import img158 from "../assets/0158-JJL-OVERVIEW-PAGE.jpg";
import img159 from "../assets/0159-JJL-OVERVIEW-PAGE.jpg";

import img160 from "../assets/0160-JJL-OVERVIEW-PAGE.jpg";
import img161 from "../assets/0161-JJL-OVERVIEW-PAGE.jpg";
import img162 from "../assets/0162-JJL-OVERVIEW-PAGE.jpg";
import img163 from "../assets/0163-JJL-OVERVIEW-PAGE.jpg";
import img164 from "../assets/0164-JJL-OVERVIEW-PAGE.jpg";
import img165 from "../assets/0165-JJL-OVERVIEW-PAGE.jpg";
import img166 from "../assets/0166-JJL-OVERVIEW-PAGE.jpg";
import img167 from "../assets/0167-JJL-OVERVIEW-PAGE.jpg";
import img168 from "../assets/0168-JJL-OVERVIEW-PAGE.jpg";
import img169 from "../assets/0169-JJL-OVERVIEW-PAGE.jpg";

import img170 from "../assets/0170-JJL-OVERVIEW-PAGE.jpg";
import img171 from "../assets/0171-JJL-OVERVIEW-PAGE.jpg";
import img172 from "../assets/0172-JJL-OVERVIEW-PAGE.jpg";
import img173 from "../assets/0173-JJL-OVERVIEW-PAGE.jpg";
import img174 from "../assets/0174-JJL-OVERVIEW-PAGE.jpg";
import img175 from "../assets/0175-JJL-OVERVIEW-PAGE.jpg";
import img176 from "../assets/0176-JJL-OVERVIEW-PAGE.jpg";
import img177 from "../assets/0177-JJL-OVERVIEW-PAGE.jpg";
import img178 from "../assets/0178-JJL-OVERVIEW-PAGE.jpg";
import img179 from "../assets/0179-JJL-OVERVIEW-PAGE.jpg";

import img180 from "../assets/0180-JJL-OVERVIEW-PAGE.jpg";

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
        img133,
        img134,
        img135,
        img136,
        img137,
        img138,
        img139,
        img140,
        img141,
        img142,
        img143,
        img144,
        img145,
        img146,
        img147,
        img148,
        img149,
        img150,
        img151,
        img152,
        img153,
        img154,
        img155,
        img156,
        img157,
        img158,
        img159,
        img160,
        img161,
        img162,
        img163,
        img164,
        img165,
        img166,
        img167,
        img168,
        img169,
        img170,
        img171,
        img172,
        img173,
        img174,
        img175,
        img176,
        img177,
        img178,
        img179,
        img180
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
          <title>Jeremy Jude Lee (JJL) | Photography</title>
          <meta name="description" content="Jeremy Jude Lee is a Chinese-Canadian artist & photographer known for nostalgic storytelling. Currently between Vancouver, Los Angeles + New York." />
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
                    onClick={() => handlePhotoClick(62)}
                    src={img62}
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
                    onClick={() => handlePhotoClick(61)}
                    src={img61}
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

            {/* start the loop again */}

            {/* hello */}

            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(133)}
                    src={img133}
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
                    onClick={() => handlePhotoClick(134)}
                    src={img134}
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
                    onClick={() => handlePhotoClick(135)}
                    src={img135}
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
                    onClick={() => handlePhotoClick(136)}
                    onLoad={onload}
                    src={img136}
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
                    onClick={() => handlePhotoClick(137)}
                    src={img137}
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
                    onClick={() => handlePhotoClick(138)}
                    src={img138}
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
                    onClick={() => handlePhotoClick(139)}
                    src={img139}
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
                    onClick={() => handlePhotoClick(140)}
                    src={img140}
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
                    onClick={() => handlePhotoClick(141)}
                    src={img141}
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
                    onClick={() => handlePhotoClick(142)}
                    src={img142}
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
                    onClick={() => handlePhotoClick(143)}
                    src={img143}
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
                    onClick={() => handlePhotoClick(144)}
                    src={img144}
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
                    onClick={() => handlePhotoClick(145)}
                    src={img145}
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
                    onClick={() => handlePhotoClick(146)}
                    src={img146}
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
                    onClick={() => handlePhotoClick(147)}
                    src={img147}
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
                    onClick={() => handlePhotoClick(148)}
                    onLoad={onload}
                    src={img148}
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
                    onClick={() => handlePhotoClick(149)}
                    src={img149}
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
                    onClick={() => handlePhotoClick(150)}
                    src={img150}
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
                    onClick={() => handlePhotoClick(151)}
                    src={img151}
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
                    onClick={() => handlePhotoClick(152)}
                    src={img152}
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
                    onClick={() => handlePhotoClick(153)}
                    src={img153}
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
                    onClick={() => handlePhotoClick(154)}
                    src={img154}
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
                    onClick={() => handlePhotoClick(155)}
                    src={img155}
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
                    onClick={() => handlePhotoClick(156)}
                    src={img156}
                    onLoad={onload}
                    width="194"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>

            {/* goodbye */}

            {/* start the loop again */}

            {/* hello */}

            <ImgRow>
              <FadeIn
                height={imageHeight}
                duration={imageFadeInDuration}
                easing={"ease-in-out"}
              >
                {onload => (
                  <Img
                    onClick={() => handlePhotoClick(157)}
                    src={img157}
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
                    onClick={() => handlePhotoClick(158)}
                    src={img158}
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
                    onClick={() => handlePhotoClick(159)}
                    src={img159}
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
                    onClick={() => handlePhotoClick(160)}
                    onLoad={onload}
                    src={img160}
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
                    onClick={() => handlePhotoClick(161)}
                    src={img161}
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
                    onClick={() => handlePhotoClick(162)}
                    src={img162}
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
                    onClick={() => handlePhotoClick(163)}
                    src={img163}
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
                    onClick={() => handlePhotoClick(164)}
                    src={img164}
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
                    onClick={() => handlePhotoClick(165)}
                    src={img165}
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
                    onClick={() => handlePhotoClick(166)}
                    src={img166}
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
                    onClick={() => handlePhotoClick(167)}
                    src={img167}
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
                    onClick={() => handlePhotoClick(168)}
                    src={img168}
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
                    onClick={() => handlePhotoClick(169)}
                    src={img169}
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
                    onClick={() => handlePhotoClick(170)}
                    src={img170}
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
                    onClick={() => handlePhotoClick(171)}
                    src={img171}
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
                    onClick={() => handlePhotoClick(172)}
                    onLoad={onload}
                    src={img172}
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
                    onClick={() => handlePhotoClick(173)}
                    src={img173}
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
                    onClick={() => handlePhotoClick(174)}
                    src={img174}
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
                    onClick={() => handlePhotoClick(175)}
                    src={img175}
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
                    onClick={() => handlePhotoClick(176)}
                    src={img176}
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
                    onClick={() => handlePhotoClick(177)}
                    src={img177}
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
                    onClick={() => handlePhotoClick(178)}
                    src={img178}
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
                    onClick={() => handlePhotoClick(179)}
                    src={img179}
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
                    onClick={() => handlePhotoClick(180)}
                    src={img180}
                    onLoad={onload}
                    width="194"
                    alt="Jeremy Jude Lee lifestyle commercial photography"
                  />
                )}
              </FadeIn>
            </ImgRow>

            {/* goodbye */}


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
