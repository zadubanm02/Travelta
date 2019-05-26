import React from "react";
import { ListGroup, Container, Row, Col, Jumbotron } from "react-bootstrap";
import { inherits } from "util";
import { node } from "prop-types";

export default class Foot extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbo">
          <Container>
            <Row>
              <Col>
                <ListGroup className="listgroup">
                  <ListGroup.Item className="list">
                    Cras justo odio
                  </ListGroup.Item>
                  <ListGroup.Item className="list">
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item className="list">
                    Morbi leo risus
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col>
                <ListGroup>
                  <ListGroup.Item className="list">
                    Cras justo odio
                  </ListGroup.Item>
                  <ListGroup.Item className="list">
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item className="list">
                    Morbi leo risus
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col>
                <ListGroup className="listgroup">
                  <ListGroup.Item className="list">
                    Cras justo odio
                  </ListGroup.Item>
                  <ListGroup.Item className="list">
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item className="list">
                    Morbi leo risus
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
