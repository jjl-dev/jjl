import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Prismic from "prismic-javascript";
import FadeIn from "react-lazyload-fadein";

const GlobalStyle = createGlobalStyle`
  header {
    border-bottom: 1px solid #E5E5E5; 
  }
`;

const Container = styled.div`
  padding: 0 15px;
  padding-top: 76px;
  min-height: 600px;
`;

const ProjectImageContainer = styled.div`
  width: 102%;
  margin-left: -8px;

  @media only screen and (max-width: 575px) {
    width: 100%;
    margin: 0;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0 40px 0;
  font-size: 11px;
  line-height: 17px;

  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`;

const DescriptionHeader = styled.div`
  padding-bottom: 20px;
`;

const DescriptionText = styled.div`
  white-space: pre-wrap;
`;

const ListHeader = styled.li`
  padding-bottom: 20px;
  font-family: Suisse Works Intl;
  text-transform: uppercase;

  @media only screen and (max-width: 575px) {
    padding-top: 20px;
  }
`;

const Description = styled.div`
  flex: 9;
`;

const Info = styled.div`
  flex: 6;
`;

const ClientTitle = styled.span`
  font-style: italic;
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
`;

const ImageRow = styled.div``;

const TwoImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  clear: both;
  @media only screen and (max-width: 575px) {
    display: block;
  }
`;

const SingleLandscape = styled.img`
  width: 100%;
`;
const OneLandscape = styled.img`
  width: 60%;
  height: 60%;
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;
const TwoLandscape = styled.img`
  width: 50%;
  height: 50%;
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;

const SinglePortraitRight = styled.img`
  width: 60%;
  float: right;
  @media only screen and (max-width: 575px) {
    width: 100%;
    margin-top: 0 !important;
  }
`;
const SinglePortraitLeft = styled.img`
  width: 60%;
  @media only screen and (max-width: 575px) {
    width: 100%;
    margin-top: 0 !important;
  }
`;
const OnePortrait = styled.img`
  width: 40%;
  height: 40%;
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;
const TwoPortrait = styled.img`
  width: 50%;
  height: 50%;
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
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

    function createMarkup() {
      return { __html: data.video.html };
    }

    return (
      <div className={"component-wrapper"}>
        <FadeIn height={100} duration={300} easing={"ease-in-out"}>
          {onload => (
            <React.Fragment>
              <GlobalStyle />
              {data && (
                <Container onLoad={onload}>
                  <DescriptionContainer>
                    <Description>
                      <DescriptionHeader>
                        {data.client[0].text}
                        <ClientTitle>{data.title[0].text}</ClientTitle>
                      </DescriptionHeader>
                      <DescriptionText>
                        {data.description[0].text}
                      </DescriptionText>
                    </Description>
                    <div style={{ flex: "1 1 5%" }} />
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

                  {data.video.html && (
                    <VideoContainer>
                      <div dangerouslySetInnerHTML={createMarkup()} />
                    </VideoContainer>
                  )}

                  {data.hover_image.url && (
                    <img
                      src={data.hover_image.url}
                      alt="jjl"
                      width="0"
                      height="0"
                    />
                  )}

                  {!data.video.html && (
                  <ProjectImageContainer>
                    {data.image_row.length
                      ? data.image_row.map((item, index) => (
                          <ImageRow key={index} className="individual-project">
                            {/* if there is only image 1 */}
                            {item.image_row_1.url &&
                            item.image_row_2.url == null ? (
                              item.image_row_1.dimensions.width === 1800 ? (
                                <SingleLandscape
                                  src={item.image_row_1.url}
                                  alt="item.image_row_1.url"
                                />
                              ) : (
                                item.image_row_1.alt === "negative-margin" ? (
                                  <SinglePortraitRight
                                  src={item.image_row_1.url}
                                  alt={item.image_row_1.url}
                                  style={{"marginTop": "-18.6%"}}
                                />
                                ):

                                item.image_row_1.alt === "negative-margin-1440" ? (
                                  <SinglePortraitRight
                                  src={item.image_row_1.url}
                                  alt={item.image_row_1.url}
                                  style={{"marginTop": "-9%"}}
                                />
                                ):

                                <SinglePortraitRight
                                  src={item.image_row_1.url}
                                  alt={item.image_row_1.url}
                                />
                              )
                            ) : null}

                            {/* if there is only image 2 */}
                            {item.image_row_2.url &&
                            item.image_row_1.url == null ? (
                              item.image_row_2.dimensions.width === 1800 ? (
                                <SingleLandscape
                                  src={item.image_row_2.url}
                                  alt={item.image_row_2.url}
                                />
                              ) : (
                                item.image_row_2.alt === "negative-margin" ? (
                                  <SinglePortraitLeft
                                  src={item.image_row_2.url}
                                  alt={item.image_row_2.url}
                                  style={{"marginTop": "-18.6%"}}
                                />
                                ):

                                item.image_row_2.alt === "negative-margin-1440" ? (
                                  <SinglePortraitLeft
                                  src={item.image_row_2.url}
                                  alt={item.image_row_2.url}
                                  style={{"marginTop": "-9%"}}
                                />
                                ):

                                <SinglePortraitLeft
                                  src={item.image_row_2.url}
                                  alt={item.image_row_2.url}
                                />

                              )
                            ) : null}

                            {/* if there is image 1 and image 2 */}
                            {item.image_row_1.url && item.image_row_2.url ? (
                              // if image 1 and image 2 are both landscape
                              item.image_row_1.dimensions.width === 1800 &&
                              item.image_row_2.dimensions.width === 1800 ? (
                                <TwoImageContainer>
                                  <TwoLandscape
                                    src={item.image_row_1.url}
                                    alt={item.image_row_1.url}
                                  />
                                  <TwoLandscape
                                    src={item.image_row_2.url}
                                    alt={item.image_row_2.url}
                                  />
                                </TwoImageContainer>
                              ) : null
                            ) : null}

                            {/* if there is image 1 and image 2 */}
                            {item.image_row_1.url && item.image_row_2.url ? (
                              // if image 1 and image 2 are both landscape
                              item.image_row_1.dimensions.width > 1000 &&
                              item.image_row_1.dimensions.width < 1500 &&
                              item.image_row_2.dimensions.width > 1000 &&
                              item.image_row_2.dimensions.width < 1500 ? (
                                <TwoImageContainer>
                                  <TwoPortrait
                                    src={item.image_row_1.url}
                                    alt={item.image_row_1.url}
                                  />
                                  <TwoPortrait
                                    src={item.image_row_2.url}
                                    alt={item.image_row_2.url}
                                  />
                                </TwoImageContainer>
                              ) : null
                            ) : null}

                            {/* if there is image 1 and image 2 */}
                            {item.image_row_1.url && item.image_row_2.url ? (
                              // if image 1 is landscape and image 2 is portrait
                              item.image_row_1.dimensions.width === 1800 &&
                              item.image_row_2.dimensions.width > 1000 &&
                              item.image_row_2.dimensions.width < 1500 ? (
                                <TwoImageContainer>
                                  <OneLandscape
                                    src={item.image_row_1.url}
                                    alt={item.image_row_1.url}
                                  />
                                  <OnePortrait
                                    src={item.image_row_2.url}
                                    alt={item.image_row_2.url}
                                  />
                                </TwoImageContainer>
                              ) : null
                            ) : null}

                            {/* if there is image 1 and image 2 */}
                            {item.image_row_1.url && item.image_row_2.url ? (
                              // if image 1 is portrait and image 2 is landscape
                              item.image_row_1.dimensions.width > 1000 &&
                              item.image_row_1.dimensions.width < 1500 &&
                              item.image_row_2.dimensions.width === 1800 ? (
                                <TwoImageContainer>
                                  <OnePortrait
                                    src={item.image_row_1.url}
                                    alt={item.image_row_1.url}
                                  />
                                  <OneLandscape
                                    src={item.image_row_2.url}
                                    alt={item.image_row_2.url}
                                  />
                                </TwoImageContainer>
                              ) : null
                            ) : null}
                          </ImageRow>
                        ))
                      : null}
                  </ProjectImageContainer>
                  )}
                </Container>
              )}
            </React.Fragment>
          )}
        </FadeIn>
      </div>
    );
  }
}

export default Overview;
