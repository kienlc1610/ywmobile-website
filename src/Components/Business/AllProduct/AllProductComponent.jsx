import React, { Component } from 'react'
import './AllProductComponent.css';

export default class AllProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="AllProductComponent">
        <div className="d-flex flex-column flex-wrap main-content">
          <div className="d-flex the-world-bg">
            <div className="container">
                <div className="pt-5">
                  <h1 className="text-white text-left">Towards that broad world</h1>
                </div>
                <div className="">
                  <h1 className="text-white text-left">For all mankind</h1>
                </div>
                <div className="">
                  <h1 className="text-white text-left">For our future</h1>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
