import React, { Component, Fragment } from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import "../../assets/css/custom.css";
import "../../assets/css/bootstrap.min.css";

class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                  <h1 className="topTitle">کانون موسیقی دانشگاه زنجان</h1>
                  <Button variant="light">بیشتر بدانید</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;
