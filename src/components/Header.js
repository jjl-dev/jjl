import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Media } from "react-breakpoints";

import logo from "../assets/jjl-logo.svg";
import logoCompact from "../assets/jjl-logo-compact.svg";

const GlobalNavStyle = createGlobalStyle`
  body {
    background: ${props => "#E8E6DC"};
  }
  header{
    background: ${props => "#E8E6DC !important"};
  }
  hr {
    border-top: 1px solid #C8C8C8; 
  }
`;

const Container = styled.header`
  padding: 20px 15px;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  top: 0;
  max-width: 994px;
  background: #fff;
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: fill-available;
`;

const Logo = styled.div`
  flex-grow: 6;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;

  a:hover{
    opacity: .8;
  }

  @media only screen and (max-width: 575px) {
    display: block;
    font-size: 16px;
    line-height: 27px;
    padding: 34px 14px;
  }
`;

const MobileNavIcon = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  border: 1px solid #3f3b33;
`;

const MobileNavIconActive = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background: #3f3b33;
  border: 1px solid #3f3b33;
`;

const MobileNav = styled.div`
  height: 100vh;
  position: fixed;
  background: #e8e6dc;
  width: 100%;
  top: 56px;
  right: 0;
  border-top: 1px solid #c8c8c8;
  overflow: hidden;
`;

const Bio = styled.div`
  padding: 50px 14px;
  font-size: 15px;
  line-height: 21px;
  font-family: Suisse Works Intl;
  position: absolute;
  bottom: 140px;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <React.Fragment>
        <Media>
          {({ breakpoints, currentBreakpoint }) =>
            breakpoints[currentBreakpoint] > breakpoints.mobile ? (
              <Container>
                <Logo>
                  <NavLink activeClassName="is-active" to="/projects">
                    <img src={logo} width="126" alt="jjl logo" />
                  </NavLink>
                </Logo>
                <Links>
                  <div>
                    <NavLink activeClassName="is-active" to="/projects">
                      PROJECTS&nbsp;
                    </NavLink>
                    /&nbsp;
                    <NavLink activeClassName="is-active" to="/overview">
                      OVERVIEW
                    </NavLink>
                  </div>
                  <div>
                    <NavLink activeClassName="is-active" to="/about">
                      ABOUT&nbsp;
                    </NavLink>
                    /&nbsp;
                    <NavLink activeClassName="is-active" to="/Journal">
                      JOURNAL
                    </NavLink>
                  </div>
                </Links>
              </Container>
            ) : (
              <Container>
                <Logo>
                  <NavLink
                    activeClassName="is-active"
                    to="/projects"
                    onClick={() => this.handleLinkClick()}
                  >
                    <img src={logoCompact} width="40" alt="jjl logo" />
                  </NavLink>
                </Logo>
                {this.state.menuOpen ? (
                  <React.Fragment>
                    <MobileNavIconActive
                      onClick={() => this.handleMenuClick()}
                    ></MobileNavIconActive>
                    <GlobalNavStyle />
                  </React.Fragment>
                ) : (
                  <MobileNavIcon
                    onClick={() => this.handleMenuClick()}
                  ></MobileNavIcon>
                )}

                <React.Fragment>
                  <MobileNav
                    className={this.state.menuOpen ? "fadeIn" : "fadeOut"}
                  >
                    <Links>
                      <div>
                        <NavLink
                          activeClassName="is-active"
                          to="/projects"
                          onClick={() => this.handleLinkClick()}
                        >
                          PROJECTS &nbsp;
                        </NavLink>
                        / &nbsp;
                        <NavLink
                          activeClassName="is-active"
                          to="/overview"
                          onClick={() => this.handleLinkClick()}
                        >
                          OVERVIEW
                        </NavLink>
                      </div>
                      <div>
                        <NavLink
                          activeClassName="is-active"
                          to="/about"
                          onClick={() => this.handleLinkClick()}
                        >
                          ABOUT &nbsp;
                        </NavLink>
                        / &nbsp;
                        <NavLink
                          activeClassName="is-active"
                          to="/Journal"
                          onClick={() => this.handleLinkClick()}
                        >
                          JOURNAL
                        </NavLink>
                      </div>
                    </Links>
                    <Bio>
                      <p>
                        Jeremy Jude Lee is a lifestyle and commercial
                        photographer and videographer from Vancouver, Canada. He
                        started photography as a teenager, when he picked up his
                        parents’ cameras, and started recording whatever was of
                        interest around him.
                        <br />
                        Now, almost a decade later, Jeremy has solidified a
                        strong reputation as one of Vancouver’s “go to”
                        photographers, telling visual stories for a long list of
                        a long list of editorial and commercial clients.
                      </p>
                      <br />
                      <a
                        href="https://www.instagram.com/jeremyjudelee"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                      /
                      <a
                        href="mailto:info@jeremyjudelee.com"
                      >
                        Email
                      </a>
                    </Bio>
                  </MobileNav>
                </React.Fragment>
              </Container>
            )
          }
        </Media>
      </React.Fragment>
    );
  }
}

export default Header;
