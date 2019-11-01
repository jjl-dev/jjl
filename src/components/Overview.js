import React from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import FadeIn from "react-lazyload-fadein";

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

const Container = styled.div`
  padding: 0 15px;
  padding-top: 26px;
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
    width: 32%;
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
        img24
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
                    alt={img1}
                  />
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
                    alt={img2}
                  />
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
                    alt={img3}
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
                    alt="jjl img3"
                  />
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
                    alt="jjl img3"
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
                    alt="jjl img1"
                  />
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
                    alt="jjl img2"
                  />
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
                    alt="jjl img3"
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
                    alt="jjl img3"
                  />
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
                    alt="jjl img3"
                  />
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
                    alt="jjl img3"
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
                    onClick={() => handlePhotoClick(12)}
                    src={img12}
                    onLoad={onload}
                    width="194"
                    alt="jjl img3"
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
                    alt="jjl img3"
                  />
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
                    alt="jjl img3"
                  />
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
                    alt="jjl img3"
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
                    alt="jjl img3"
                  />
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
                    alt="jjl img3"
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
                    alt="jjl img3"
                  />
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
                    alt="jjl img3"
                  />
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
                    alt="jjl img3"
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
                    alt="jjl img3"
                  />
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
                    alt="jjl img3"
                  />
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
                    alt="jjl img3"
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
                    onClick={() => handlePhotoClick(24)}
                    src={img24}
                    onLoad={onload}
                    width="194"
                    alt="jjl img3"
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
