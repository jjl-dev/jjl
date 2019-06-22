import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components"

import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Overview from "./components/Overview";
import Journal from "./components/Journal";
import Footer from "./components/Footer";

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Route exact path="/" component={Projects} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/overview" component={Overview} />
        <Route path="/about" component={About} />
        <Route path="/Journal" component={Journal} />
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
