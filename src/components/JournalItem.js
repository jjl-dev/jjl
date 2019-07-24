import React from "react";
import styled from "styled-components";

const JournalItemContainer = styled.div`
    display: flex;
    flex-basis: 100%
    margin: 10px 0;
    padding: 20px 0 40px 0;
    border-bottom: 1px solid #E5E5E5;
`
const Item = styled.div`
    flex-basis: 100%;
    flex: 1 1 0;
    width: 0;
    padding-right: 10px;
`
const Date = styled.div`
    flex-basis: 100%;
    flex: 1 1 0;
    width: 0;
    font-size: 11px;
    line-height: 15px;
    position: relative;
    right: 50px;
    text-align: right;
`
const Details = styled.div`
    flex-basis: 100%;
    flex: 1 1 0;
    width: 0;
    font-size: 11px;
    line-height: 15px;
`
const Description = styled.p`
    margin-top: 26px;
`
const Image = styled.img`
    width: 100%;
    margin-right: 10px;
`

const JournalItem = props => {
  return (
    <JournalItemContainer>
      <Item>
        {props.props.featured_image_1.url && (
          <Image src={props.props.featured_image_1.url} alt="featured 1" ></Image>
        )}
      </Item>
      <Item>
        {props.props.featured_image_2.url && (
          <Image src={props.props.featured_image_2.url} alt="featured 2" ></Image>
        )}
      </Item>
      <Date>{props.props.date[0].text}</Date>
      <Details>
        <h3>{props.props.title[0].text}</h3>
        <Description>{props.props.description[0].text}</Description>
      </Details>
    </JournalItemContainer>
  );
};

export default JournalItem;