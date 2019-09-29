import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Prismic from "prismic-javascript";
import FadeIn from "react-lazyload-fadein";

import JournalItem from "./JournalItem";

const GlobalStyle = createGlobalStyle`
  header {
    border-bottom: 1px solid #E5E5E5; 
  }
`;

const Container = styled.div`
  padding: 15px;
  padding-top: 76px;
`;

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journals: []
    };
  }

  componentWillMount() {
    const apiEndpoint = "https://jeremyjudelee.prismic.io/api/v2";

    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "jour"), {
          orderings: "[my.blog_post.date desc]"
        })
        .then(response => {
          // response is the response object, response.results holds the documents
          this.setState({ journals: response.results });
        });
    });
  }

  render() {
    return (
      <div className={"component-wrapper"}>
        <FadeIn height={100} duration={300} easing={"ease-in-out"}>
          {onload => (
            <React.Fragment>
              <GlobalStyle />
              <Container onLoad={onload}>
                {this.state.journals.map((journal, index) => (
                  <JournalItem key={index} data={journal} />
                ))}
              </Container>
            </React.Fragment>
          )}
        </FadeIn>
      </div>
    );
  }
}

export default Journal;
