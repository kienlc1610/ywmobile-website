import React, { Component } from 'react'
import './CompanyComponent.css';

export default class CompanyComponent extends Component {
  render() {
    return (
      <div className="CompanyComponent">
        <div className="d-flex flex-column flex-wrap main-content">
          <div className="company-bg"></div>
          <div className="company-bg car-bg"></div>
          <div className="company-bg tech-bg d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center">
              <h1 className="text-color-orange">
                Artificial Intelligence
                </h1>
              <h1 className="text-color-orange text-center">
                (Chatbot, AI dialog)
                </h1>
            </div>
          </div>
          <div className="company-bg person-bg d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center">
              <h1 className="text-color-orange">Software Outsourcing</h1>
              <h1 className="text-color-orange text-center">(Korean & Vietnam)</h1>
            </div>
          </div>
          <div className="company-bg car-road-bg"></div>
        </div>
      </div>
    )
  }
}
