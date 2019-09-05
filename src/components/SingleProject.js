import React from "react";
import styled from "styled-components";
import Prismic from "prismic-javascript";
import Gallery from "react-photo-gallery";
import { Media } from "react-breakpoints";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

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
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0 40px 0;
  font-size: 11px;
  line-height: 17px;
`;

const DescriptionHeader = styled.div`
  padding-bottom: 20px;
`;

const ListHeader = styled.li`
  padding-bottom: 20px;
  font-family: Suisse Works Intl;
`;

const Description = styled.div`
  flex: 9;
`;

const Info = styled.div`
  flex: 6;
`;

const Img = styled.img`
  align-self: center;
`;

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      photos: [],
      gallery: [],
      photoIndex: 0,
      isOpen: false
    };
  }

  componentWillMount() {
    const apiEndpoint = "https://jeremyjudelee.prismic.io/api/v2";
    const projectID = window.location.pathname.replace("/project/", "");

    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.id", projectID), {
          orderings: "[my.blog_post.date desc]"
        })
        .then(response => {
          this.setState({ project: response.results[0] });

          response.results[0].data.project_images.map((item, index) => {
            this.state.photos.push({
              src: item.image.url + "?index" + index,
              width: item.image.dimensions.width,
              height: item.image.dimensions.height
            });
            this.state.gallery.push(item.image.url + "?index" + index);
          });
        });
    });
  }

  handlePhotoClick = e => {
    let target = e.currentTarget.currentSrc;
    let index = target.split("?index")[1];

    this.setState({ isOpen: true });
    this.setState({ photoIndex: index });
  };

  render() {
    let { photoIndex, isOpen } = this.state;
    const data = this.state.project.data;

    return (
      <React.Fragment>
        {data && (
          <Container>
            <DescriptionContainer>
              <Description>
                <DescriptionHeader>{data.title[0].text}</DescriptionHeader>
                <p>{data.description[0].text}</p>
              </Description>
              <div style={{ flex: "2 1 3%" }} />
              <Info>
                <ul>
                  <ListHeader>{data.location[0].text}</ListHeader>
                  {data.support.length && data.support[0].support1.length
                    ? data.support.map((item, index) => (
                        <li key={index}>{item.support1[0].text}</li>
                      ))
                    : null}
                </ul>
              </Info>
              <ul>
                <ListHeader>{data.year[0].text}</ListHeader>
              </ul>
            </DescriptionContainer>

            <Media>
              {({ breakpoints, currentBreakpoint }) =>
                breakpoints[currentBreakpoint] > breakpoints.tabletLandscape ? (
                  <Gallery
                    photos={this.state.photos}
                    targetRowHeight={600}
                    direction={"row"}
                    margin={7}
                    onClick={this.handlePhotoClick}
                  />
                ) : (
                  <Gallery
                    photos={this.state.photos}
                    targetRowHeight={300}
                    direction={"row"}
                    margin={7}
                    onClick={this.handlePhotoClick}
                  />
                )
              }
            </Media>

            {isOpen && (
              <Lightbox
                enableZoom={false}
                mainSrc={this.state.gallery[photoIndex]}
                nextSrc={
                  this.state.gallery[
                    (photoIndex + 1) % this.state.gallery.length
                  ]
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

            {/* <ImgContainer>
              {this.state.project.data.project_images.map((item, index) => (
                <Img src={item.image.url} key={index} width="500px" alt="jjl project image" />
              ))}
            </ImgContainer> */}
          </Container>
        )}
      </React.Fragment>
    );
  }
}

export default Overview;
