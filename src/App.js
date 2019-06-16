import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components"

import Header from "./components/Header";
import Projects from "./components/Projects"

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
  background: #fff;
`

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Route exact path="/" component={Projects} />
        <Route path="/projects" component={Projects} />
        {/* <Route path="/overview" component={Projects} />
        <Route path="/about" component={Projects} />
        <Route path="/journal" component={Projects} /> */}
      </Container>
    </Router>
  );
};

export default App;
