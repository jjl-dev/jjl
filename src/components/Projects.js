import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Prismic from "prismic-javascript";

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 30px 0;
  font-size: 11px;
  border-bottom: 1px solid #e5e5e5;
`;

const Year = styled.h4`
  font-family: Suisse Works Intl;
`;

const ImgContainer = styled.div`
  &:first-child {
    padding: 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 50px;
`;

const Img = styled.img``;


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    const apiEndpoint = "https://jeremyjudelee.prismic.io/api/v2";

    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "project"), {
          orderings: "[my.blog_post.date desc]"
        })
        .then(response => {
          this.setState({ projects: response.results });
        });
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.projects.map((project, index) => (

      <React.Fragment>
        {project.data.featured_image_1.url &&
          <ImgContainer>
            <Img src={project.data.featured_image_1.url} width="363" alt="jjl img3" />
            <Img src={project.data.featured_image_2.url} width="363" alt="jjl img3" />
            </ImgContainer>
          }
        
          <DescriptionContainer key={index}>
            <Link to={`/project/${project.id}`}>
              {project.data.title[0].text}
            </Link>
            <Year>{project.data.year[0].text}</Year>
          </DescriptionContainer>
          </React.Fragment>

        ))}
      </React.Fragment>
    );
  }
}

export default Projects;
