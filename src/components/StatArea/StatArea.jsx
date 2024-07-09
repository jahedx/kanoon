import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
class StatArea extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <h1>رویداد ها</h1>
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center" lg={4} md={6} sm={12}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Hover Test</Button>
                    </Card.Body>
                  </Card>
                  );
                </Col>

                <Col className="text-center" lg={4} md={6} sm={12}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="text-center" lg={4} md={6} sm={12}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary" className="testing">
                        Go somewhere
                      </Button>
                    </Card.Body>
                  </Card>
                  );
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default StatArea;
