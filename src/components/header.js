import PropTypes from "prop-types";
import React from "react";

import { Col, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import DarkMode from "./darkMode";

import "../styles/index.scss";
import Image from "../components/image";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      scrollPos: 0
    };

    this.toggle = this.toggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleScroll = () => {
    this.setState({ scrollPos: window.pageYOffset });
  };

  render() {
    return (
      <div>
        <Navbar
          fixed="top"
          expand="xs"
          className={this.state.scrollPos > 40 ? "compressed" : ""}
        >
          <div className="container">
            <NavbarBrand
              style={{ display: "flex", flexWrap: "wrap", boxShadow: "none" }}
            >
              <Image
                src="icon.png"
                width={48}
                topMargin={-5}
                alt="Covid19 Comparison"
              />{" "}
              <Col className="d-none d-sm-block">Covid19 Comparison</Col>
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <DarkMode style={{ marginLeft: "10px" }} />
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
