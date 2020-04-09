import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Navigation from "../navigation/Navigation.component";
import Meta from "./Meta.component";

import FooterTheme from "../footer/Footer.component";

const theme = {
  green: "rgba(153,168,51,1)",
  black: "rgba(17,17,17,1)",
  gray: "rgba(70,74,76,1)",
  red: "rgba(232,0,0,1)",
  white: " rgb(255, 255, 255)",
  lightGray: "rgba(247,247,247,1)",
  lightBlack: "rgba(27,28,33,1)",
  darkGreen: "rgb(133,148,31)",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  boldTitle: "700",
};

const StyledPage = styled.div`
  background: white;
  color: ${(props) => props.theme.black};
`;

// changed bootstrap .container-fluid from just padding: 0 15px && margin: 0 auto; to add a width of 1366px;
const GlobalStyle = createGlobalStyle`
@media (min-width:1200px) {
     .container-fluid {
        width: 1366px;
    }
}
  html {
    font-family: sans-serif;
    line-height: 1.15;
    box-sizing: border-box;
    font-size: 10px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.575rem;
    line-height: 2;
    font-family:'Poppins';
    font-weight:300;
  }
h1{
    font-family:'Montserrat';
    font-weight:300;
    text-transform:none;
    font-size:7.425rem;
    letter-spacing:-0.05em
}
h2,.h2{
    font-family:'Montserrat';
    font-weight:300;
    text-transform:none;
    font-size:5.85rem;
    letter-spacing:-0.04em
}
h3,.h3{
    font-family:'Montserrat';
    font-weight:normal;
    text-transform:none;
    font-size:4.5rem;
    letter-spacing:-0.04em
}
h4,.h4{
    font-family:'Montserrat';
    font-weight:normal;
    text-transform:none;
    font-size:2.7rem;
    letter-spacing:-0.04em
}
h5,.h5{
    color: ${theme.gray};
    font-family:'Montserrat';
    font-weight:normal;
    text-transform:uppercase;
    font-size:2.25rem;
    letter-spacing:0.08em;
    line-height: 1.25;
}
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class SiteTheme extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Navigation />
          <GlobalStyle />
          {this.props.children}
          <FooterTheme />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default SiteTheme;
