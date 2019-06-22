import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 15px;
  padding-top: 76px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0 30px 0;
  font-size: 11px;
  border-bottom: 1px solid #E5E5E5;
`;

const Projects = () => {
  return (
    <React.Fragment>
      <Container>
        <DescriptionContainer>
          <h4>J.CREW, FW18 SOCIAL CAMPAIGN</h4>
          <h4>2018</h4>
        </DescriptionContainer>
        <DescriptionContainer>
          <h4>NIKE RUNNING, SS17 CAMPAIGN</h4>
          <h4>2018</h4>
        </DescriptionContainer>
      </Container>
    </React.Fragment>
  );
};

export default Projects;
