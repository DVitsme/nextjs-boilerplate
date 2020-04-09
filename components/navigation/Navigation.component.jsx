import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import {
  Container,
  Collapse,
  Navbar as UpdatedNavbar,
  NavbarToggler,
  NavbarBrand as UpdatedNavbarBrand,
  Nav,
  NavItem as UpdatedNavItem,
  NavLink as UpdatedNavLink,
  UncontrolledDropdown as UpdatedUncontrolledDropdown,
  DropdownToggle as UpdatedDropdownToggle,
  DropdownMenu as UpdatedDropdownMenu,
  DropdownItem as UpdatedDropdownItem,
} from "reactstrap";

const NavContainer = styled.div`
  padding: 1.25rem 0 1.25rem;
`;
const Navbar = styled(UpdatedNavbar)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

// NavLink && NavbarBrand without a href will lose the cursor pointer
const NavLink = styled(UpdatedNavLink)`
  font-family: "Montserrat";
  font-weight: normal;
  text-transform: uppercase;
  font-size: 1.35rem;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.black} !important;
  :hover {
    color: ${(props) => props.theme.green} !important;
    cursor: pointer;
  }
`;
const NavbarBrand = styled.h1`
  font-size: 2rem;
  :hover {
    cursor: pointer;
  }
`;
const NavItem = styled(UpdatedNavItem)`
  margin-left: 3rem;
`;
const UncontrolledDropdown = styled(UpdatedUncontrolledDropdown)`
  margin-left: 3rem;
`;
const DropdownToggle = styled(UpdatedDropdownToggle)`
  font-family: "Montserrat";
  font-weight: normal;
  text-transform: uppercase;
  font-size: 1.35rem;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.black} !important;
  :hover {
    color: ${(props) => props.theme.green} !important;
    cursor: pointer;
  }
`;
const DropdownMenu = styled(UpdatedDropdownMenu)`
  background-color: #fff;
  position: absolute;
  text-align: left;
  width: 13rem;
  left: -1rem;
  padding: 0.5rem 0;
  background: #fff;
  -webkit-box-shadow: 0px 0px 5px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: 2px;
  top: 100%;
  margin-bottom: -2px;
  white-space: normal;
  margin-top: 0.5rem;
`;
const DropdownItem = styled(UpdatedDropdownItem)`
  font-family: "Montserrat";
  font-weight: normal;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.08em;
  line-height: 1.6;
  color: ${(props) => props.theme.black} !important;
  :hover {
    color: ${(props) => props.theme.green} !important;
    cursor: pointer;
  }
  :not(:first-child) {
    display: block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;
const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavContainer>
      <Navbar color="white" light expand="md">
        <Container fluid>
          <Link href="/">
            <NavbarBrand>Company Name</NavbarBrand>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/about">
                  <NavLink>About Me</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/services">
                  <NavLink>Services</NavLink>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Free Classes
                </DropdownToggle>
                <DropdownMenu right>
                  <Link href="/meditation">
                    <DropdownItem>
                      <a>Meditation</a>
                    </DropdownItem>
                  </Link>
                  <Link href="/pranayama">
                    <DropdownItem>
                      <a>Prãnãyãmã</a>
                    </DropdownItem>
                  </Link>
                  <Link href="/asana-session">
                    <DropdownItem>
                      <a>Asana Session</a>
                    </DropdownItem>
                  </Link>
                  <Link href="/yoga-nidra">
                    <DropdownItem>
                      <a>Yoga Nidra</a>
                    </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link href="/tramua">
                  <NavLink>Tramua</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/blog">
                  <NavLink>Blog</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/contact">
                  <NavLink>Contact</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </NavContainer>
  );
};

export default Navigation;
