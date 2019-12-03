import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const JournalItemContainer = styled(Link)`
  display: flex;
  flex-basis: 100%
  margin: 10px 0;
  padding: 20px 0 40px 0;
  border-bottom: 1px solid #E5E5E5;

  @media only screen and (max-width: 575px){
    flex-direction: column;
  }

`;
const Item = styled.div`
  flex-basis: 100%;
  flex: 1 1 0;
  padding-right: 10px;
`;

const FeaturedImage2 = styled.div`
  flex-basis: 100%;
  flex: 1 1 0;
  padding-right: 10px;

  @media only screen and (max-width: 575px){
    display: none;
  }

`;
const Date = styled.div`
  flex-basis: 100%;
  flex: 1 1 0;
  font-size: 11px;
  line-height: 15px;
  position: relative;
  right: 70px;
  text-align: right;
  font-family: Suisse Works Intl;

  @media only screen and (max-width: 575px){
    text-align: left;
    right: 0px;
    padding-top: 20px;
  }

`;

const Title = styled.div``;
const Details = styled.div`
  flex-basis: 100%;
  flex: 1 1 0;
  font-size: 11px;
  line-height: 15px;
`;
const Description = styled.div`
  margin-top: 26px;
  white-space: pre-wrap;
`;
const Image = styled.img`
  width: 100%;
  margin-right: 10px;
`;

const JournalItem = props => {
  const data = props.data.data;

  function createMarkup() {
    return {__html: data.description[0].text};
  }

  return (
    <JournalItemContainer to={`/journal/${props.data.uid}`}>
      <Item>
        {data.featured_image_1.url && (
          <Image src={data.featured_image_1.url} alt="Jeremy Jude Lee Journal" />
        )}
      </Item>
      <FeaturedImage2>
        {data.featured_image_2.url && (
          <Image src={data.featured_image_2.url} alt="Jeremy Jude Lee Journal" />
        )}
      </FeaturedImage2>
      <Date>{data.date[0].text}</Date>
      <Details>
        <Title>{data.title[0].text}</Title>
        {data.description[0].text && (
          <Description>
            <p dangerouslySetInnerHTML={createMarkup()} />
          </Description>
        )}
      </Details>
    </JournalItemContainer>
  );
};

export default JournalItem;
