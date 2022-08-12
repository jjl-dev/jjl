import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Prismic from "prismic-javascript";
import { Link } from "react-router-dom";
import FadeIn from "react-lazyload-fadein";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
  header {
    border-bottom: 1px solid #E5E5E5; 
  }
`;
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

  @media only screen and (max-width: 575px) {
    flex-direction: column-reverse;
  }
`;
const Item = styled.div`
  flex-basis: 50%;
  padding-right: 10px;
`;
const Date = styled.div`
  font-size: 11px;
  line-height: 20px;
  font-family: Suisse Works Intl;
`;
const Details = styled.div`
  flex-basis: 37%;
  font-size: 11px;
  line-height: 15px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 20px;
  }
`;
const DetailsInner = styled.div`
  position: fixed;
  max-width: 360px;
  padding-right: 10px;

  @media only screen and (max-width: 575px) {
    position: relative;
    max-width: 100%;
    padding: 0;
  }
`;
const Description = styled.div`
  margin-top: 26px;
  white-space: pre-wrap;
`;
const Image = styled.img`
  width: 100%;
  margin: 0 10px 30px 0;
`;
const BackToJournal = styled(Link)`
  font-family: Suisse Works Intl;
  font-size: 11px;
  line-height: 30px;
  color: #282829;
`;
const SingleJournal = () => {
  const [journal, setJournal] = useState([]);

  useEffect( () => {
    const apiEndpoint = "https://jeremyjudelee.prismic.io/api/v2";
    const journalID = window.location.hash.replace("#/journal/", "");
    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("my.jour.uid", journalID), {
          orderings: "[my.blog_post.date desc]"
        })
        .then(response => {
          setJournal(response.results[0]);
        });
    });  
  });

    const data = journal.data;
    const friendlyTitle = data && data.title ? data.title[0].text : ''

    function createMarkup() {
      return {__html: data.description[0].text};
    }

    return (
      
      <div className={"component-wrapper"}>
        <Helmet>
          <title>Jeremy Jude Lee : {friendlyTitle}</title>
          <meta name="description" content="Jeremy Jude Lee Projects" />
          <meta
            name="keywords"
            content="jeremy jude lee, projects, vancouver bc, canada, lifestyle photography"
          />
        </Helmet>
        <FadeIn height={100} duration={300} easing={"ease-in-out"}>
          {onload => (
            <React.Fragment>
              <GlobalStyle />

              <Container onLoad={onload}>
                {data && (
                  <JournalItemContainer>
                    {data.images.length > 0 && (
                      <Item>
                        {data.images.map((journal, index) => (
                          <Image
                            key={index}
                            src={journal.journal_images.url}
                            alt="Jeremy Jude Lee Journal"
                          />
                        ))}
                      </Item>
                    )}
                    <Details>
                      <DetailsInner>
                        <h3>{data.title[0].text}</h3>
                        <Date>{data.date[0].text}</Date>

                        {data.description[0].text && (
                          <Description>
                            <p dangerouslySetInnerHTML={createMarkup()} />
                          </Description>
                        )}
                      </DetailsInner>
                    </Details>
                  </JournalItemContainer>
                )}
                <BackToJournal to="/journal">BACK TO JOURNAL</BackToJournal>
              </Container>
            </React.Fragment>
          )}
        </FadeIn>
      </div>
    );
  }

export default SingleJournal;
