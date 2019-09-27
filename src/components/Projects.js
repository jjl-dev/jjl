import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Prismic from "prismic-javascript";

const ProjectContainer = styled(Link)`
  div:first-child :hover {
    opacity: 0.8;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 30px 0 30px 0;
  font-size: 11px;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #000;
  }
`;

const Year = styled.h4`
  font-family: Suisse Works Intl;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 50px;

  @media only screen and (max-width: 575px) {
    padding: 0;
  }

  @media only screen and (max-width: 1000px) {
    padding: 0;
    justify-content: center;
  }
`;
let HoverImage = styled.img`
  position: absolute;
  right: 140px;
  max-width: 238px;
  bottom: -153px;
  z-index: 1;

  @media only screen and (max-width: 575px) {
    display: none;
  }
`;

const MoreProjects = styled.div`
  padding: 30px 0 30px 0;
  font-size: 11px;
  font-family: Suisse Works Intl;
  letter-spacing: 0.05em;
`;

const Img = styled.img`
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;

const FeaturedImg2 = styled.img`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const ClientTitle = styled.span`
  font-style: italic;
`;

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      activeLink: "",
      showAllProjects: false
    };
  }

  componentWillMount() {
    this.fetchProjects();
  }

  fetchProjects = amount => {
    const apiEndpoint = "https://jeremyjudelee.prismic.io/api/v2";

    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "project"), {
          orderings: "[document.last_publication_date desc]",
          pageSize: 200
        })
        .then(response => {
          let testArr = response.results;

          function ascending(ascending) {
            return function(a, b) {
              let first = a.data.order;
              let second = b.data.order;

              // equal items sort equally
              if (first === second) {
                return 0;
              }
              // nulls sort after anything else
              else if (first === null) {
                return 1;
              } else if (second === null) {
                return -1;
              }
              // otherwise, if we're ascending, lowest sorts first
              else if (ascending) {
                return first < second ? -1 : 1;
              }
              // if descending, highest sorts first
              else {
                return first < second ? 1 : -1;
              }
            };
          }

          this.setState({ projects: testArr.sort(ascending(true)) });
        });
    });
  };

  showAllProjects = (e, data) => {
    this.setState({ showAllProjects: true });
  };

  descriptionEnter = (e, data) => {
    if (data.hover_image.url) {
      this.setState({ activeLink: data.hover_image.url });
    }
  };

  descriptionLeave = (e, data) => {
    if (data.hover_image.url) {
      this.setState({ activeLink: 0 });
    }
  };

  render() {
    const { activeLink } = this.state;
    return (
      <React.Fragment>
        {this.state.projects.map((project, index) =>
          this.state.showAllProjects ? (
            <ProjectContainer key={index} to={`/project/${project.id}`}>
              {project.data.featured_image_1.url &&
                project.data.featured_image_2.url && (
                  <ImgContainer>
                    {project.data.featured_image_1.dimensions.width > 1000 &&
                    project.data.featured_image_1.dimensions.width < 1500 &&
                    project.data.featured_image_2.dimensions.width > 1000 &&
                    project.data.featured_image_2.dimensions.width < 1500 ? (
                      <React.Fragment>
                        <Img
                          src={project.data.featured_image_1.url}
                          width="363"
                          alt="jjl"
                        />
                        <FeaturedImg2
                          src={project.data.featured_image_2.url}
                          width="363"
                          alt="jjl"
                        />
                      </React.Fragment>
                    ) : null}

                    {project.data.featured_image_1.dimensions.width > 1000 &&
                    project.data.featured_image_1.dimensions.width < 1500 &&
                    project.data.featured_image_2.dimensions.width === 1800 ? (
                      <React.Fragment>
                        <Img
                          src={project.data.featured_image_1.url}
                          width="237"
                          alt="jjl"
                        />
                        <FeaturedImg2
                          src={project.data.featured_image_2.url}
                          width="488"
                          alt="jjl"
                        />
                      </React.Fragment>
                    ) : null}

                    {project.data.featured_image_2.dimensions.width > 1000 &&
                    project.data.featured_image_2.dimensions.width < 1500 &&
                    project.data.featured_image_1.dimensions.width === 1800 ? (
                      <React.Fragment>
                        <Img
                          src={project.data.featured_image_1.url}
                          width="616"
                          alt="jjl"
                        />
                        <FeaturedImg2
                          src={project.data.featured_image_2.url}
                          width="363"
                          alt="jjl"
                        />
                      </React.Fragment>
                    ) : null}
                  </ImgContainer>
                )}

              <DescriptionContainer
                key={index}
                onMouseEnter={e => this.descriptionEnter(e, project.data)}
                onMouseLeave={e => this.descriptionLeave(e, project.data)}
              >
                {project.data.hover_image.url === activeLink && (
                  <HoverImage
                    src={project.data.hover_image.url}
                    width="363"
                    alt="jjl"
                  />
                )}
                <div>
                  {project.data.client[0].text}
                  <ClientTitle>{project.data.title[0].text} </ClientTitle>
                </div>
                <Year>{project.data.year[0].text}</Year>
              </DescriptionContainer>
            </ProjectContainer>
          ) : (
            index < 10 && (
              <ProjectContainer key={index} to={`/project/${project.id}`}>
                {project.data.featured_image_1.url &&
                  project.data.featured_image_2.url && (
                    <ImgContainer>
                      {project.data.featured_image_1.dimensions.width > 1000 &&
                      project.data.featured_image_1.dimensions.width < 1500 &&
                      project.data.featured_image_2.dimensions.width > 1000 &&
                      project.data.featured_image_2.dimensions.width < 1500 ? (
                        <React.Fragment>
                          <Img
                            src={project.data.featured_image_1.url}
                            width="363"
                            alt="jjl"
                          />
                          <FeaturedImg2
                            src={project.data.featured_image_2.url}
                            width="363"
                            alt="jjl"
                          />
                        </React.Fragment>
                      ) : null}

                      {project.data.featured_image_1.dimensions.width > 1000 &&
                      project.data.featured_image_1.dimensions.width < 1500 &&
                      project.data.featured_image_2.dimensions.width ===
                        1800 ? (
                        <React.Fragment>
                          <Img
                            src={project.data.featured_image_1.url}
                            width="237"
                            alt="jjl"
                          />
                          <FeaturedImg2
                            src={project.data.featured_image_2.url}
                            width="488"
                            alt="jjl"
                          />
                        </React.Fragment>
                      ) : null}

                      {project.data.featured_image_2.dimensions.width > 1000 &&
                      project.data.featured_image_2.dimensions.width < 1500 &&
                      project.data.featured_image_1.dimensions.width ===
                        1800 ? (
                        <React.Fragment>
                          <Img
                            src={project.data.featured_image_1.url}
                            width="616"
                            alt="jjl"
                          />
                          <FeaturedImg2
                            src={project.data.featured_image_2.url}
                            width="363"
                            alt="jjl"
                          />
                        </React.Fragment>
                      ) : null}
                    </ImgContainer>
                  )}

                <DescriptionContainer
                  key={index}
                  onMouseEnter={e => this.descriptionEnter(e, project.data)}
                  onMouseLeave={e => this.descriptionLeave(e, project.data)}
                >
                  {project.data.hover_image.url === activeLink && (
                    <HoverImage
                      src={project.data.hover_image.url}
                      width="363"
                      alt="jjl"
                    />
                  )}

                  <div>
                    {project.data.client[0].text}
                    <ClientTitle>{project.data.title[0].text} </ClientTitle>
                  </div>
                  <Year>{project.data.year[0].text}</Year>
                </DescriptionContainer>
              </ProjectContainer>
            )
          )
        )}
        {!this.state.showAllProjects && (
          <MoreProjects>
            <Link to="/projects" onClick={() => this.showAllProjects()}>
              MORE PROJECTS
            </Link>
          </MoreProjects>
        )}
      </React.Fragment>
    );
  }
}

export default Projects;
