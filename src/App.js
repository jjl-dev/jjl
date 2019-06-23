import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components"

import Header from "./components/Header";
import Home from "./components/Home";
import ProjectsPage from "./components/ProjectsPage";
import About from "./components/About";
import Overview from "./components/Overview";
import Journal from "./components/Journal";
import Footer from "./components/Footer";

import SingleProject from "./components/SingleProject";


const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/jjl" component={Home} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/overview" component={Overview} />
        <Route path="/about" component={About} />
        <Route path="/Journal" component={Journal} />
        <Route path="/singleproject" component={SingleProject} />
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
