import React, { Component } from 'react'
import './CultureAndBenefitComponent.css';

export default class CultureAndBenefitComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="CultureAndBenefitComponent">
        <div className="d-flex flex-column flex-wrap main-content">
          <div className="container mt-5">
            <div className="d-flex">
              <div className="col-md-4">
                <h1 className="font-weight-bold">YWMobile’s organizational culture</h1>
              </div>
              <div className="col culture-section">
                <button type="button" className="btn btn-outline-dark culture-card text-center">Sharing information</button>
                <button type="button" className="btn btn-outline-dark culture-card text-center">Role-based organizational culture</button>
                <button type="button" className="btn btn-outline-dark culture-card text-center">A culture of self-responsibility based on autonomy and responsibility</button>
                <button type="button" className="btn btn-outline-dark culture-card text-center mt-3">Better communication through courageous communication</button>
                <button type="button" className="btn btn-outline-dark culture-card text-center mt-3">Trust and open communities</button>
              </div>
            </div>
          </div>
          <div className="row office-bg mt-5">
            <img src="" alt="YWM Office"/>
          </div>
          <div className="container my-5">
            <div className="d-flex">
              <div className="col-md-4">
                <h5 className="font-weight-bold">Life at YWMobile</h5>
                <h1 className="font-weight-bold">BENEFITS</h1>
              </div>
              <div className="col">
                <p>{'We are constantly striving to help our valuable people realize their bigger and better dreams and to provide the best benefits.'}</p>
                <p>{'We support individual growth and development and happy lives through various programs that consider not only pleasant and efficient work environment but also life and life.'}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-outline-dark culture-card text-center">{'Flexible Working Time & Reflash Vocation'}</button>
              <button type="button" className="btn btn-outline-dark culture-card text-center">{'Healthy Life with good lunch & dinner'}</button>
              <button type="button" className="btn btn-outline-dark culture-card text-center">{'Team work activities like Journey, Celebration and Gift'}</button>
              <button type="button" className="btn btn-outline-dark culture-card text-center ">{'Good program for Training & Improving ability'}</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
