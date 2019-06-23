import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

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
        <DescriptionContainer>
          <Link to="/singleproject">J.CREW, FW18 SOCIAL CAMPAIGN</Link>
          <h4>2018</h4>
        </DescriptionContainer>
        <DescriptionContainer>
          <h4>NIKE RUNNING, SS17 CAMPAIGN</h4>
          <h4>2018</h4>
        </DescriptionContainer>
    </React.Fragment>
  );
};

export default Projects;
