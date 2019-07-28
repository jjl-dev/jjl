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
          <DescriptionContainer key={index}>
            <Link to={`/project/${project.id}`}>
              {project.data.title[0].text}
            </Link>
            <Year>{project.data.year[0].text}</Year>
          </DescriptionContainer>
        ))}
      </React.Fragment>
    );
  }
}

export default Projects;
