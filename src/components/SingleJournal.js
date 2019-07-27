import React from "react";
import styled from "styled-components";
import Prismic from "prismic-javascript";
import { BrowserRouter as Link } from "react-router-dom";

const Container = styled.div`
  padding: 15px;
  padding-top: 76px;
`;
const JournalItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 20px 0 40px 0;
  border-bottom: 1px solid #e5e5e5;
`;
const Item = styled.div`
  flex-basis: 50%;
  width: 0;
  padding-right: 10px;
`;
const Date = styled.div`
  font-size: 11px;
  line-height: 15px;
`;
const Details = styled.div`
  flex-basis: 36%;
  width: 0;
  font-size: 11px;
  line-height: 15px;
`;
const Description = styled.p`
  margin-top: 26px;
`;
const Image = styled.img`
  width: 100%;
  margin-right: 10px;
`;
const BackToJournal = styled(Link)`
  font-family: Suisse Works Intl;
  font-size: 11px;
  line-height: 30px;
  color: #282829;
`;

class SingleJournal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journal: []
    };
  }

  componentWillMount() {
    const apiEndpoint = "https://jeremyjudelee.prismic.io/api/v2";
    const journalID = window.location.pathname.replace("/journal/", "");

    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.id", journalID), {
          orderings: "[my.blog_post.date desc]"
        })
        .then(response => {
          // response is the response object, response.results holds the documents
          this.setState({ journal: response.results[0] });
        });
    });
  }

  render() {
    let data = this.state.journal.data;
    return (
      <React.Fragment>
        <Container>
          {this.state.journal.data && (
            <JournalItemContainer>
              <Item>
                {data.images.map((journal, index) => (
                  <Image
                    key={index}
                    src={journal.journal_images.url}
                    alt="image"
                  />
                ))}
              </Item>
              <Details>
                <h3>{data.title[0].text}</h3>
                <Date>{data.date[0].text}</Date>

                <Description>{data.description[0].text}</Description>
              </Details>
            </JournalItemContainer>
          )}
          <BackToJournal to="/journal">BACK TO JOURNAL</BackToJournal>
        </Container>
      </React.Fragment>
    );
  }
}

export default SingleJournal;
