import App from "next/app";
import React from "react";
import SiteTheme from "../components/theme/SiteTheme.component";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <SiteTheme>
        <Component {...pageProps} />
      </SiteTheme>
    );
  }
}
