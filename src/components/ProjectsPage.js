import React from "react";
import styled from "styled-components";
import Projects from "./Projects";

const Container = styled.div`
  padding: 0 15px;
  padding-top: 30px;
`;

const ProjectsPage = () => {
  return (
    <React.Fragment>
      <Container>
        <Projects />
      </Container>
    </React.Fragment>
  );
};

export default ProjectsPage;
