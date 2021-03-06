import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    margin: 0% 6% 0% 6%;
    position: relative;
    z-index: 1000;
    font-weight: bold;
    letter-spacing: 0.15em;
  }

  .LinkRent {
    color: #5a8fcb;
    text-decoration: none;
    transition: 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    &:hover {
      color: #c73d13;
    }
  }

  .Link {
    color: #ffffff;
    text-decoration: none;
    transition: 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    &:hover {
      color: #5a8fcb;
    }
  }

  .mr-auto {
    padding: 5%;
  }
`;

export const NavigationBar = () => (
  <React.Fragment>
    <Styles>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button variant="light btn-lg shadow" waves-effect>
              <Link to="/rent" className="LinkRent">
                RENT BBQ
              </Link>
            </Button>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <Link to="/" className="Link">
                  HOME
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/news" className="Link">
                  NEWS
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/menu" className="Link">
                  MENU
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/info" className="Link">
                  INFO
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/recruit" className="Link">
                  RECRUIT
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  </React.Fragment>
);
