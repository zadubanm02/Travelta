import React from "react";
import Navigation from "./Navbar";
import firebase from "./firebase/firebase";
import { Container, Row, Card, Button } from "react-bootstrap";
import Edit from "./Edit";

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      opened: false
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

  handleModal = () => {
    this.setState({
      opened: true
    });
  };

  handleClose = () => {
    this.setState({
      opened: false
    });
  };
  render() {
    const { opened } = this.state;
    if (opened) {
      return (
        <div>
          <Edit />
          <Button onClick={this.handleClose}>Close</Button>
        </div>
      );
    }
    return (
      <div>
        <Navigation />
        <div>
          Novy prispevok ? <Button onClick={this.handleModal}>Novy</Button>
        </div>

        <Container>
          <Row>
            {this.state.items.map(item => {
              return (
                <Card
                  style={{ width: "15rem", margin: 15, height: "auto" }}
                  className="card"
                >
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
