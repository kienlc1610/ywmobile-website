import React, { Component } from 'react'
import './RecruitingComponent.css';

export default class RecruitingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="RecruitingComponent">
        <div className="d-flex flex-column flex-wrap main-content">
          <div className="container">
            <h3 className="text-center mx-auto job-opening-title">{'Job Opening'}</h3>
            <h2 className="text-center mx-auto job-opening-sub-title">{'We are looking for the best talent in various fields'}</h2>
            <div className="d-flex flex-wrap align-content-center align-items-center justify-content-center mt-5">
              <a href className="d-flex flex-wrap justify-content-between job-cards">
                <div className="d-flex flex-wrap flex-column align-content-center align-items-center justify-content-center">
                  <h4>Software Engineer</h4>
                </div>
                <div className="d-flex flex-column align-content-center align-items-center justify-content-center">
                  <label>Under recruiting 3</label>
                </div>
              </a>
              <a href className="d-flex flex-wrap justify-content-between job-cards">
                <div className="d-flex flex-wrap flex-column align-content-center align-items-center justify-content-center">
                  <h4>Administration Support</h4>
                </div>
                <div className="d-flex flex-column align-content-center align-items-center justify-content-center">
                  <label>Under recruiting 1</label>
                </div>
              </a>
              <a href className="d-flex flex-wrap justify-content-between job-cards">
                <div className="d-flex flex-wrap flex-column align-content-center align-items-center justify-content-center">
                  <h4>Design</h4>
                </div>
                <div className="d-flex flex-column align-content-center align-items-center justify-content-center">
                  <label>Under recruiting 1</label>
                </div>
              </a>
              <a href className="d-flex flex-wrap justify-content-between job-cards">
                <div className="d-flex flex-wrap flex-column align-content-center align-items-center justify-content-center">
                  <h4>AI Technicina</h4>
                </div>
                <div className="d-flex flex-column align-content-center align-items-center justify-content-center">
                  <label>Under recruiting 1</label>
                </div>
              </a>
              <a href className="d-flex flex-wrap justify-content-between job-cards">
                <div className="d-flex flex-wrap flex-column align-content-center align-items-center justify-content-center">
                  <h4>{'QA/QS'}</h4>
                </div>
                <div className="d-flex flex-column align-content-center align-items-center justify-content-center">
                  <label>Under recruiting 1</label>
                </div>
              </a>
              <a href className="d-flex flex-wrap justify-content-between job-cards">
                <div className="d-flex flex-wrap flex-column align-content-center align-items-center justify-content-center">
                  <h4>{'Marketing'}</h4>
                </div>
                <div className="d-flex flex-column align-content-center align-items-center justify-content-center">
                  <label>Under recruiting 1</label>
                </div>
              </a>
              <a href className="d-flex flex-wrap justify-content-between job-cards">
                <div className="d-flex flex-wrap flex-column align-content-center align-items-center justify-content-center">
                  <h4>{'Intern & Exception Army'}</h4>
                </div>
                <div className="d-flex flex-column align-content-center align-items-center justify-content-center">
                  <label>Under recruiting 3</label>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
