import React, { Component } from 'react';
import './FooterComponent.css';
import { NavLink } from 'react-router-dom'

class FooterComponent extends Component {
  render() {
    return (
      <footer className="bg-dark container-fluid">
        <div className="container">
          <div className="row my-4">
            <nav className="nav footer-nav-link">
              <NavLink className="nav-link custom-nav-item-link" to="/" exact replace>Home</NavLink>
              <NavLink className="nav-link custom-nav-item-link" to="/company" activeClassName="active" exact replace>Company</NavLink>
              <NavLink className="nav-link custom-nav-item-link" to="/business/all" activeClassName="active" exact replace>Business</NavLink>
              <NavLink className="nav-link custom-nav-item-link" to="/recruit" activeClassName="active" exact replace>Careers</NavLink>
              <NavLink className="nav-link custom-nav-item-link" to="/cs" activeClassName="active" exact replace>CS</NavLink>
              <NavLink className="nav-link custom-nav-item-link" to="/cowork" activeClassName="active" exact replace>Co-work</NavLink>
              <NavLink className="nav-link custom-nav-item-link" to="/vietnam" activeClassName="active" exact replace>VietNam</NavLink>
            </nav>
          </div>

          <div className="row ml-3">
            <ul className="nav flex-column footer-company-info">
              <li>
                <div className="row">
                  <div className="col-md-auto">
                    <span className="text-secondary">Address:</span>
                  </div>
                  <div className="col ml-2">
                    <div className="row">
                      <div className="row">
                        <p className="text-secondary">H.O. | #301, Yoondo-building, 7, Yonggu-daero 2790beon-gil, Suji-gu, Yonging-si, Gyeonggi-do, Korea</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="row">
                        <p className="text-secondary">B.O. | #502, Yewon-building, 55-10, Tojeong-ro 31-gil, Mapo-gu, Seoul, Korea</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="row">
                        <p className="text-secondary">Spectpa building, 19A Cong Hoa, Phuong 12, Tan Binh, Ho Chi Minh, VietNam</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span className="text-secondary">
                  Telephone Number:
            </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
