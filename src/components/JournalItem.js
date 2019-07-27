import React from "react";
import styled from "styled-components";
import { BrowserRouter as Link } from "react-router-dom";

const JournalItemContainer = styled.div`
    display: flex;
    flex-basis: 100%
    margin: 10px 0;
    padding: 20px 0 40px 0;
    border-bottom: 1px solid #E5E5E5;
`;
const Item = styled.div`
  flex-basis: 100%;
  flex: 1 1 0;
  width: 0;
  padding-right: 10px;
`;
const Date = styled.div`
  flex-basis: 100%;
  flex: 1 1 0;
  width: 0;
  font-size: 11px;
  line-height: 15px;
  position: relative;
  right: 50px;
  text-align: right;
`;

const Title = styled(Link)``;
const Details = styled.div`
  flex-basis: 100%;
  flex: 1 1 0;
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

const JournalItem = props => {
  const data = props.data.data;
  return (
    <JournalItemContainer>
      <Item>
        {data.featured_image_1.url && (
          <Image src={data.featured_image_1.url} alt="featured 1" />
        )}
      </Item>
      <Item>
        {data.featured_image_2.url && (
          <Image src={data.featured_image_2.url} alt="featured 2" />
        )}
      </Item>
      <Date>{data.date[0].text}</Date>
      <Details>
        <Title to={`/journal/${props.data.id}`}>{data.title[0].text}</Title>
        <Description>{data.description[0].text}</Description>
      </Details>
    </JournalItemContainer>
  );
};

export default JournalItem;
