import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

const Footer = styled.footer`
  background-color: ${(props) => props.theme.lightBlack};
  color: ${(props) => props.theme.lightGray};
  position: relative;
  width: 100%;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  p,
  a {
    font-size: 1.4rem;
    color: ${(props) => props.theme.lightGray};
  }
  a:hover {
  }
  i {
    font-size: 3rem;
    line-height: 1.3;
    display: inline-block;
    margin: 0 1.5rem;
  }
  img {
    width: 15rem;
  }
`;

const FooterLogo = styled.div`
  text-align: center;
  padding: 3.5rem 0;
  position: relative;
  ::after {
    content: "";
    display: block;
    position: absolute;
    opacity: 0.125;
    border-top: 1px solid white;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
const AbsoluteFooter = styled.div`
  @media (min-width: 576px) {
    padding-bottom: 1rem;
  }
  padding-bottom: 2.5rem;
  padding-top: 3.5rem;
  font-size: 0.75rem;
  line-height: 1.9;
  text-align: center;
`;

const FooterTheme = () => {
  return (
    <Footer className="mt-5">
      <FooterLogo>
        <Container>
          <Row>
            <Col className="mt-5">
              <Link href="/">
                <a>
                  <img src="/static/img/tree.png" alt="logo" />
                  <p>Company Name</p>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </FooterLogo>
      <Container fluid>
        <AbsoluteFooter>
          <Row>
            <Col sm={12} md={{ size: 6, offset: 3 }} className="my-4">
              <p>
                Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh.
                Donec sed odio operae, eu vulputate felis rhoncus. Quo usque
                tandem abutere, Catilina, patientia nostra?
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="my-5">
              <p>
                <a href="https://www.google.com">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
                <a href="https://www.google.com">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>{" "}
                <a href="https://www.google.com">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://www.google.com">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </p>
            </Col>
          </Row>
        </AbsoluteFooter>
      </Container>
    </Footer>
  );
};

export default FooterTheme;
