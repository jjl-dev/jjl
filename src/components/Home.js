import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Projects from "./Projects";

const Container = styled.div`
  padding: 0 15px;
  padding-top: 76px;
`;

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <Projects />
      </Container>
    </React.Fragment>
  );
};

export default Home;
