import React, { Component } from 'react';
import './HeaderComponent.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from "react-router-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown'
import { Router } from "react-router";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  isShowSubHeader () {
    console.log(Router)
  }

  componentWillMount () {
    console.log(this.props.location)
  }

  render() {
    return (
      <div className="fixed-top">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="d-flex flex-column flex-warp">
          <div className="container">
            <Navbar.Brand href="/" className="text-justify"><h1>YWMobile</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <LinkContainer className='nav-link custom-nav-item-link' to="" activeClassName="active" exact replace>
                    <Nav.Link eventKey={1}>Home</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer className="nav-link custom-nav-item-link" to="/company" activeClassName="active" exact replace>
                    <Nav.Link eventKey={2}>Company</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item className="dropdown custom-nav-dropdown">
                  <LinkContainer className="custom-nav-item-link"to="/business" activeClassName="active">
                    <Nav.Link eventKey={3} className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Business</Nav.Link>
                  </LinkContainer>
                  <Dropdown.Menu>
                    <LinkContainer to="/business/all" activeClassName="active">
                      <Dropdown.Item eventKey={3.1}>All items</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/business/mobility" activeClassName="active" exact replace>
                      <Dropdown.Item eventKey={3.2}>Mobility</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/business/ai" activeClassName="active" exact replace>
                      <Dropdown.Item eventKey={3.3}>AI</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/business/si" activeClassName="active" exact replace>
                      <Dropdown.Item eventKey={3.4}>SI</Dropdown.Item>
                    </LinkContainer>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item className="dropdown custom-nav-dropdown">
                  <LinkContainer className="custom-nav-item-link" to="/careers" activeClassName="active">
                    <Nav.Link eventKey={4} className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Careers</Nav.Link>
                  </LinkContainer>
                  <Dropdown.Menu>
                    <LinkContainer to="/careers/culture" activeClassName="active" exact replace>
                      <NavDropdown.Item eventKey={4.1}>Culture & Benefit</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/careers/recruiting" activeClassName="active" exact replace>
                      <NavDropdown.Item eventKey={4.2}>Recruiting</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/careers/qa" activeClassName="active" exact replace>
                      <NavDropdown.Item eventKey={4.3}>Q&A</NavDropdown.Item>
                    </LinkContainer>
                  </Dropdown.Menu>
                </Nav.Item>
                <LinkContainer className="nav-link custom-nav-item-link" to="/cs" activeClassName="active" exact replace>
                  <Nav.Link eventKey={5}>CS</Nav.Link>
                </LinkContainer>
                <LinkContainer className="nav-link custom-nav-item-link" to="/cowork" activeClassName="active" exact replace>
                  <Nav.Link eventKey={6}>Co-work</Nav.Link>
                </LinkContainer>
                <LinkContainer className="nav-link custom-nav-item-link" to="/vietnam" activeClassName="active" exact replace>
                  <Nav.Link eventKey={7}>VietNam</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="container-fluid qa-header">

          </div>
        </Navbar>
      </div>
    );
  }
}

export default HeaderComponent;
