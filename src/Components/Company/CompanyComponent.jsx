import React, { Component } from 'react'
import './CompanyComponent.css';
import logo from '../../img/logo.png';

export default class CompanyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="CompanyComponent">
        <div className="d-flex flex-column flex-wrap main-content">
          <div className="company-bg first-section-bg d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-center">
                <h1 className="text-color-orange text-center">YWMobile creates new IT service of transport with Best Car Driving Service</h1>
              </div>
            </div>
          </div>
          <div className="company-bg second-section-bg d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-center">
                <h1 className="text-color-orange text-center">Sharing Mobility</h1>
              </div>
              <div className="d-flex justify-content-center">
                <h1 className="text-color-orange text-center">Car Arrangement Service</h1>
              </div>
            </div>
          </div>
          <div className="company-bg third-section-bg d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center">
              <h1 className="text-color-orange text-center">{'Artificial Intelligence'}</h1>
              <h1 className="text-color-orange text-center">{'Chatbot, AI dialog'}</h1>
            </div>
          </div>
          <div className="company-bg four-section-bg d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center">
              <h1 className="text-color-orange text-center">{'System Integration Outsourcing'}</h1>
              <h1 className="text-color-orange text-center">{'Korean & Vietnam  Center'}</h1>
            </div>
          </div>
          <div className="company-bg five-section-bg d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center">
              <div className="d-flex flex-column justify-content-center mt-auto short-description">
                  <div className="row">
                    <div className="col-md-4 col-sm-3 col-3">
                      <p className="text-right mb-0">In YWMobile ...</p>
                    </div>
                    <div className="col-md col-sm col">
                      <p className="text-left mb-0">there are people to make the world to go together</p>
                      <p className="text-justify mb-0">We pursue happy & energic life with working</p>
                      <p className="text-justify mb-0">We run sincerely for the goal to achieve</p>
                      <p className="text-justify mb-0">Our mind is always opened for communication</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="company-bg d-flex justify-content-center last-section">
            <div className="d-flex flex-column justify-content-center">
              <img className="rounded mx-auto d-block sm-size img-fluid" src={logo} alt="YWMobile Logo" />
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
