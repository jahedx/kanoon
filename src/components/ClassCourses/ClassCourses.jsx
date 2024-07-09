import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import piano from "../../assets/image/piano.png";
import violin from "../../assets/image/violin.png";
import guitar from "../../assets/image/guitar.png";

class ClassCourses extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="ClassBar">
            <Col lg={4} md={6} sm={12}>
              <div className="pianoCard text-center">
                <img className="pianoIcon" src={piano} />
                <h2 className="pianoTitle">پیانو</h2>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="violinCard text-center">
                <img className="violinIcon" src={violin} />
                <h2 className="violinTitle">ویولن</h2>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="guitarCard text-center">
                <img className="guitarIcon" src={guitar} />
                <h2 className="guitarTitle">گیتار</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ClassCourses;
