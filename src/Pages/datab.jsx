import React from "react";
import firebase from "../firebase/firebase";
import { Card, Button, Container, Row } from "react-bootstrap";

export default class Datab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    const ref = firebase.database().ref("prispevky");
    ref.on("value", snapshot => {
      let items = snapshot.val();
      console.log(items);
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          nazov: items[item].name,
          title: items[item].kontinent,
          user: items[item].atractivity,
          popis: items[item].popis,
          photo: items[item].photo
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.items.map(item => {
              return (
                <Card style={{ width: 350, margin: 15 }} className="card">
                  <Card.Img src={item.photo} />
                  <Card.Body>
                    <div key={item.id}>
                      <h3>{item.nazov}</h3>
                      <h6>{item.title}</h6>
                      <p>Atractivity of the destination: {item.user}</p>
                      <p>{item.popis}</p>
                      <br />
                      <Button className="button">More...</Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
