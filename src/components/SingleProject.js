import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Prismic from "prismic-javascript";
import Gallery from "react-photo-gallery";
import { Media } from "react-breakpoints";

const GlobalStyle = createGlobalStyle`
  header {
    border-bottom: 1px solid #E5E5E5; 
  }
`;

const Container = styled.div`
  padding: 0 15px;
  padding-top: 76px;
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
            if (item.image.url) {
              this.state.photos.push({
                src: item.image.url,
                width: item.image.dimensions.width,
                height: item.image.dimensions.height
              });
              this.state.gallery.push(item.image.url + "?index" + index);
            }
          });
        });
    });
  }

  render() {
    const data = this.state.project.data;

    return (
      <React.Fragment>
        <GlobalStyle />
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
              {({ breakpoints, currentBreakpoint }) => {
                switch (currentBreakpoint) {
                  case "desktop":
                    return (
                      <Gallery
                        photos={this.state.photos}
                        targetRowHeight={600}
                        direction={"row"}
                        margin={7}
                      />
                    );
                  case "tabletLandscape":
                    return (
                      <Gallery
                        photos={this.state.photos}
                        targetRowHeight={600}
                        direction={"row"}
                        margin={7}
                      />
                    );
                  case "tablet":
                    return (
                      <Gallery
                        photos={this.state.photos}
                        targetRowHeight={500}
                        direction={"row"}
                        margin={7}
                      />
                    );
                  case "mobile":
                    return (
                      <Gallery
                        photos={this.state.photos}
                        direction={"column"}
                        margin={7}
                      />
                    );
                  default:
                    return (
                      <Gallery
                        photos={this.state.photos}
                        targetRowHeight={600}
                        direction={"row"}
                        margin={7}
                      />
                    );
                }
              }}
            </Media>
          </Container>
        )}
      </React.Fragment>
    );
  }
}

export default Overview;
