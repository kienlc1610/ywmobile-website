import React, { Component } from 'react'
import './CompanyComponent.css';
import logo from '../../img/logo.png';

export default class CompanyComponent extends Component {
  render() {
    return (
      <div className="CompanyComponent">
        <div className="d-flex flex-column flex-wrap main-content">
          <div className="company-bg"></div>
          <div className="company-bg car-bg d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-center">
                <h1 className="text-color-orange text-center">Car Arrangement Service</h1>
              </div>
              <div className="d-flex justify-content-center">
                <h1 className="text-color-orange text-center">(Rocket Platform)</h1>
              </div>
            </div>
          </div>
          <div className="company-bg tech-bg d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center">
              <h1 className="text-color-orange text-center">
                Artificial Intelligence
                </h1>
              <h1 className="text-color-orange text-center">
                (Chatbot, AI dialog)
                </h1>
            </div>
          </div>
          <div className="company-bg person-bg d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center">
              <h1 className="text-color-orange text-center">Software Outsourcing</h1>
              <h1 className="text-color-orange text-center">(Korean & Vietnam)</h1>
            </div>
          </div>
          <div className="company-bg car-road-bg d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-center my-3">
                <h1 className="text-color-orange txt-road-section text-center">Best Card Driving </h1>
                <h1 className="text-road-orange text-center px-2">IT is</h1>
                <h1 className="text-color-orange txt-road-section text-center">Intelligence Sincerity</h1>
              </div>
              <div className="d-flex justify-content-center my-3">
                <h1 className="text-color-orange txt-road-section text-center">Ahead</h1>
                <h1 className="text-road-orange text-center px-2"> A B C D S</h1>
                <h1 className="text-color-orange txt-road-section text-center">Star, Service</h1>
                <h1 className="text-color-orange txt-road-section text-center">Information Technology</h1>
              </div>
              <div className="d-flex flex-column justify-content-center my-auto short-description">
                  <div className="row mx-auto">
                    <div className="col-2 pr-0">
                      <p className="text-center mb-0">In YWMobile ...</p>
                    </div>
                    <div className="col-6 pl-0 pr-5">
                      <p className="text-center mb-0">there are people to make the world to go together</p>
                    </div>
                  </div>
                  <p className="text-center mb-0">In YWMobile ...  there are people to make the world to go together</p>
                  <p className="text-justify mb-0">We pursue happy & energic life with working</p>
                  <p className="text-justify mb-0">We run sincerely for the goal to achieve</p>
                  <p className="text-justify mb-0">Our mind is always opened for communication</p>
              </div>
            </div>
          </div>
          <div className="company-bg d-flex justify-content-center">
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
