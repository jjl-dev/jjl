import React from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

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
  padding-top: 76px;
`;

const ImgContainer = styled.div`
  display: block;
`;

const ImgRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 44px 0;
`;

const Img = styled.img`
  align-self: flex-start;
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

  handlePhotoClick = e => {
    let target = e.currentTarget.currentSrc;
    let index = target.split("?index")[1];

    this.setState({ isOpen: true });
    // this.setState({ photoIndex: index });
  };

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <React.Fragment>
        <Container>
          <ImgContainer>
            <ImgRow>
              <Img
                onClick={this.handlePhotoClick}
                src={img1}
                width="237"
                alt="jjl img1"
              />
              <Img
                onClick={this.handlePhotoClick}
                src={img2}
                width="192"
                alt="jjl img2"
              />
              <Img
                onClick={this.handlePhotoClick}
                src={img3}
                width="432"
                alt="jjl img3"
              />
            </ImgRow>
            <ImgRow>
              <Img
                onClick={this.handlePhotoClick}
                src={img4}
                width="432"
                alt="jjl img3"
              />
              <Img
                onClick={this.handlePhotoClick}
                src={img5}
                width="237"
                alt="jjl img3"
              />
            </ImgRow>
            <ImgRow>
              <Img
                onClick={this.handlePhotoClick}
                src={img6}
                width="432"
                alt="jjl img1"
              />
              <Img
                onClick={this.handlePhotoClick}
                src={img7}
                width="192"
                alt="jjl img2"
              />
              <Img
                onClick={this.handlePhotoClick}
                src={img8}
                width="237"
                alt="jjl img3"
              />
            </ImgRow>
            <ImgRow>
              <Img
                onClick={this.handlePhotoClick}
                src={img9}
                width="237"
                alt="jjl img3"
              />
              <Img
                onClick={this.handlePhotoClick}
                src={img10}
                width="237"
                alt="jjl img3"
              />
              <Img
                onClick={this.handlePhotoClick}
                src={img11}
                width="432"
                alt="jjl img3"
              />
            </ImgRow>
            <ImgRow>
              <Img
                onClick={this.handlePhotoClick}
                src={img12}
                width="194"
                alt="jjl img3"
              />
            </ImgRow>
            <ImgRow>
              <Img
                onClick={this.handlePhotoClick}
                src={img13}
                width="237"
                alt="jjl img3"
              />
              <Img
                onClick={this.handlePhotoClick}
                src={img14}
                width="194"
                alt="jjl img3"
              />
              <Img
                onClick={this.handlePhotoClick}
                src={img15}
                width="432"
                alt="jjl img3"
              />
            </ImgRow>
            <ImgRow>
              <Img
                onClick={this.handlePhotoClick}
                src={img16}
                width="432"
                alt="jjl img3"
              />
              <Img
                onClick={this.handlePhotoClick}
                src={img17}
                width="237"
                alt="jjl img3"
              />
            </ImgRow>
            <ImgRow>
              <Img
                onClick={this.handlePhotoClick}
                src={img18}
                width="432"
                alt="jjl img3"
              />
              <Img
                onClick={this.handlePhotoClick}
                src={img19}
                width="194"
                alt="jjl img3"
              />
              <Img
                onClick={this.handlePhotoClick}
                src={img20}
                width="237"
                alt="jjl img3"
              />
            </ImgRow>
            <ImgRow>
              <Img
                onClick={this.handlePhotoClick}
                src={img21}
                width="237"
                alt="jjl img3"
              />
              <Img
                onClick={this.handlePhotoClick}
                src={img22}
                width="237"
                alt="jjl img3"
              />
              <Img
                onClick={this.handlePhotoClick}
                src={img23}
                width="432"
                alt="jjl img3"
              />
            </ImgRow>
            <ImgRow>
              <Img
                onClick={this.handlePhotoClick}
                src={img24}
                width="194"
                alt="jjl img3"
              />
            </ImgRow>
          </ImgContainer>
        </Container>

        {console.log(this.state.gallery[photoIndex])}

        {isOpen && (
          <Lightbox
            enableZoom={false}
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
