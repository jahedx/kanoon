import React, { Component, Fragment } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import whiteLogo from "../../assets/image/navBrand.png";
import blackLogo from "../../assets/image/navBrand2.png";

class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navBarTitle: "navTitle",
      navBarLogo: [whiteLogo],
      navBarBack: "navBackground",
    };
  }
  onScroll = () => {
    if (window.scrollY > 300) {
      this.setState({
        navBarTitle: "navTitleScroll",
        navBarLogo: [blackLogo],
        navBarBack: "navBackGroundScroll",
      });
    } else if (window.scrollY < 300) {
      this.setState({
        navBarTitle: "navTitle",
        navBarLogo: [whiteLogo],
        navBarBack: "navBackGround",
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <Fragment>
        <Navbar
          className={this.state.navBarBack}
          collapseOnSelect
          fixed="top"
          expand="lg"
          variant="dark"
        >
          <Navbar.Brand className={this.state.navBarTitle} href="#home">
            {" "}
            <img
              className="navBarimageLogo"
              src={this.state.navBarLogo}
              alt="کانون دانشگاه زنجان"
            />{" "}
            کانون موسیقی دانشگاه زنجان
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="dropDown">
              <Nav.Link href="#deets">کلاس ها</Nav.Link>
              <Nav.Link href="#deets">اعضا</Nav.Link>
              <Nav.Link href="#deets">راه های ارتباطی</Nav.Link>
              <Nav.Link href="#deets">درباره ما</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
