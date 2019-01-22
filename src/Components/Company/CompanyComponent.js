import React, { Component } from 'react'
import './CompanyComponent.css';
import logo from '../../img/logo.png';

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
          <div className="company-bg d-flex justify-content-center">
          <div className="d-flex flex-column justify-content-center">
              <img className="rounded mx-auto d-block sm-size" src={logo} alt="YWMobile Logo" />
              <div className="col text-center">
                <p>
                  YWMobile CI keep the message about our will and endeavor for change the world to be more 
                </p>
              </div>
              <div className="col text-center">
                <p>
                  comfortable & efficient for valuable happiness
                </p>
              </div>
              <div className="col text-center">
              <button className="btn btn-dowload-ci text-white">
                CI download
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
