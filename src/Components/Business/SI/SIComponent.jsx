import React, { Component } from 'react'
import './SIComponent.css';
import Card from "react-bootstrap/Card";
import IntegrationImg from "../../../img/Integration.jpg";

export default class SIComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="SIComponent">
        <div className="d-flex flex-column flex-wrap main-content">
        <Card style={{ width: '100%' }} className="custom-card">
              <Card.Img variant="top" src={IntegrationImg} className="img-fluid"/>
              <h1 className="product-title">System Integration Outsourcing</h1>
              <Card.Body className="container">
                <Card.Title>Supporting developing power based on S/W center of Korean & Vietnam</Card.Title>
                <Card.Text as="div">
                  {'Manpower in HCM Vietnam – S/W developing center'}
                  <br/>
                  {'Developing Application and Expand car arranging service to east Asia market'}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '100%' }} className="custom-card">
              <Card.Body className="container">
                <Card.Title>Development service of SI outsourcing</Card.Title>
                <Card.Text as="div">
                  {'Supporting SW outsourcing development based on Korea & Vietnam SW center'}
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
      </div>
    )
  }
}
