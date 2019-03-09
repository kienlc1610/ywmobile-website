import React, { Component } from 'react'
import './AIComponent.css';
import Card from "react-bootstrap/Card";
import AIImg from "../../../img/AI-image.jpg";


export default class AIComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="AIComponent">
        <div className="d-flex flex-column flex-wrap main-content">
          <Card style={{ width: '100%' }} className="custom-card">
              <Card.Img variant="top" src={AIImg} className="img-fluid"/>
              <h1 className="product-title">Artificial Intelligence </h1>
              <Card.Body className="container">
                <Card.Title>AI dialog with Chat bot</Card.Title>
                <Card.Text as="div">
                  {'Voice recognition & AI conversation'}
                  <br/>
                  {'Voice UI'}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '100%' }} className="custom-card">
              <Card.Body className="container">
                <Card.Title>Healthcare, Car arrange</Card.Title>
                <Card.Text as="div">
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
      </div>
    )
  }
}
