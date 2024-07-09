import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import footerLogo from "../../assets/image/fotterLoho.png";
import { Col, Container, FormText, Row } from "react-bootstrap";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
          <Row>
            <Col lg={3} md={6} sm={12} className="p-5 text-center">
              <h2 className="footerName text-center">Follow us</h2>
              <div className="social-container">
                <a className="instagram social" href="#">
                  <FontAwesomeIcon icon={faInstagram} size="2xl" />
                </a>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName text-center">Address</h2>
              <p className="footerDescription">
                دانشگاه زنجان زیر سالن غدیر پشت کتابخونه کنار رشد
              </p>
            </Col>

            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName text-center">راه های ارتباطی</h2>
              <p className="footerDescription"></p>

              <a className="footerLink email social" href="#">
                <FontAwesomeIcon icon={faEnvelope} size="2xl" />{" "}
                EmailAddress@gmaul.com
              </a>
            </Col>

            <Col>
              <img src={footerLogo} />
              <h2 className="footerLogoTitle">کانون موسیقی ماهور</h2>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className="text-center copyrightSection">
          <p className="copyrightText">در اینجا کپی رایت قرار میگیرد</p>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
