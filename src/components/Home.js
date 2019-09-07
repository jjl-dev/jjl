import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Projects from "./Projects";

const Container = styled.div`
  padding: 0 15px;
  padding-top: 76px;
`;

const MoreProjects = styled.div`
  padding: 30px 0 30px 0;
  font-size: 11px;
  font-family: Suisse Works Intl;
  letter-spacing: 0.05em;
`;

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <Projects />
        <MoreProjects>
          <Link to="/projects">MORE PROJECTS</Link>
        </MoreProjects>
      </Container>
    </React.Fragment>
  );
};

export default Home;
