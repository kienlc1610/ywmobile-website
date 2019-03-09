import React, { Component } from 'react'
import './MobilityComponent.css';
import Card from "react-bootstrap/Card";
import MobilityImg from "../../../img/mobility.jpeg";

export default class MobilityComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="MobilityComponent">
        <div className="d-flex flex-column flex-wrap main-content">
          <Card style={{ width: '100%' }} className="custom-card">
            <Card.Img variant="top" src={MobilityImg} className="img-fluid"/>
            <h1 className="product-title">Sharing Mobility</h1>
            <Card.Body className="container">
              <Card.Title>Car Arrangement Service (Rocket Platform)</Card.Title>
              <Card.Text as="div">
                {'Connect customers with driver, rent car, car delivery and car pool'}
                <br/>
                {'Developing the customized application with smart & efficient UI & functions based on location'}
                <br/>
                {'Expanding Fast, Smart and Efficient Arranging System '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '100%' }} className="custom-card">
            <Card.Body className="container">
              <Card.Title>Quick board</Card.Title>
              <Card.Text as="div">
                {'Utilizing service of simple mobility by ubiquitous & IOT'}
                <br/>
                {'Support move of short distance'}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}
