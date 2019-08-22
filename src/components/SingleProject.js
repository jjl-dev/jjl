import React from "react";
import styled from "styled-components";
import Prismic from "prismic-javascript";

import img1 from "../assets/jjlsp1.jpg";
import img2 from "../assets/jjlo2.jpg";
import img3 from "../assets/jjlo3.jpg";
import img4 from "../assets/jjlo4.jpg";

const Container = styled.div`
  padding: 0 15px;
  padding-top: 76px;
`;

const ImgContainer = styled.div`
  display: block;
`;

const ImgRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0 40px 0;
  font-size: 11px;
  line-height: 17px;
`;

const DescriptionHeader = styled.div`
  padding-bottom: 20px;
`;

const ListHeader = styled.li`
  padding-bottom: 20px;
  font-family: Suisse Works Intl;
`;

const Description = styled.div`
  flex: 9;
`;

const Info = styled.div`
  flex: 6;
`;

const Img = styled.img`
  align-self: center;
`;

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: []
    };
  }

  componentWillMount() {
    const apiEndpoint = "https://jeremyjudelee.prismic.io/api/v2";
    const projectID = window.location.pathname.replace("/project/", "");

    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.id", projectID), {
          orderings: "[my.blog_post.date desc]"
        })
        .then(response => {
          this.setState({ project: response.results[0] });
        });
    });
  }
  render() {
    const data = this.state.project.data;
    return (
      <React.Fragment>
        {data && (
          <Container>
            <DescriptionContainer>
              <Description>
                <DescriptionHeader>{data.title[0].text}</DescriptionHeader>
                <p>{data.description[0].text}</p>
              </Description>
              <div style={{ flex: "2 1 3%" }} />
              <Info>
                <ul>
                  <ListHeader>{data.location[0].text}</ListHeader>
                  {data.support.length && data.support[0].support1.length ?
                    data.support.map((item, index) => (
                      <li key={index}>{item.support1[0].text}</li>
                    ))
                    : null
                    }
                </ul>
              </Info>
              <ul>
                <ListHeader>{data.year[0].text}</ListHeader>
              </ul>
            </DescriptionContainer>

            <ImgContainer>
                    {this.state.project.data.project_images.map((item, index) => (
                      <Img src={item.image.url} key={index} width="500px" alt="jjl project image" />
                    ))}
              </ImgContainer>

            {/* <ImgContainer>
              <ImgRow>
                <div>
                  <Img src={img3} width="616" alt="jjl img3" />
                  <Img src={img1} width="616" alt="jjl img1" style={{ marginTop: "15px" }} />
                </div>
                <Img
                  src={img2}
                  style={{ alignSelf: "flex-start" }}
                  width="363"
                  alt="jjl img2"
                />
              </ImgRow>
              <ImgRow>
                <Img src={img4} width="994px" alt="jjl img3" style={{ marginTop: "15px" }}/>
              </ImgRow>
            </ImgContainer> */}
          </Container>
        )}
      </React.Fragment>
    );
  }
}

export default Overview;
