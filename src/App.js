import React from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Overview from "./components/Overview";
import Journal from "./components/Journal";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";

import SingleProject from "./components/SingleProject";
import SingleJournal from "./components/SingleJournal";

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;

const App = ({ location }) => {
  return (
    <ScrollToTop>
      <Container>
        <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/jjl" component={Home} />
          <Route exact path="/projects" component={Home} />
          <Route path="/project/:id" component={SingleProject} />
          <Route path="/overview" component={Overview} />
          <Route path="/about" component={About} />
          <Route exact path="/journal" component={Journal} />
          <Route path="/journal/:id" component={SingleJournal} />
        <Footer />
      </Container>
    </ScrollToTop>
  );
};

export default withRouter(App);
