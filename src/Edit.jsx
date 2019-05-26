import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default class Edit extends React.Component {
  render() {
    return (
      <div>
        <Modal.Dialog size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Novy prispevok</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Meno</Form.Label>
                <Form.Control type="text" placeholder="Tvoje meno" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Krajina</Form.Label>
                <Form.Control type="text" placeholder="Spain..." />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Co mas na mysli</Form.Label>
                <Form.Control type="textarea" placeholder="popis" />
              </Form.Group>
              <Form.Group controlId="formGridState">
                <Form.Label>Aractivity</Form.Label>
                <Form.Control as="select">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Vloz obrazok</Form.Label>
                <Form.Control type="file" placeholder="popis" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
        ;
      </div>
    );
  }
}
