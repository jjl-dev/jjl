import React from "react";
import styled from "styled-components";
import Prismic from "prismic-javascript";

import JournalItem from "./JournalItem";

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
      <React.Fragment>
        <Container>
          <div>
            {this.state.journals.map((journal, index) => (
              <JournalItem key={index} data={journal} />
            ))}
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Journal;
