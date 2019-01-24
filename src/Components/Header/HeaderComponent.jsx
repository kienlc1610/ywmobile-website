import React, { Component } from 'react';
import './HeaderComponent.css';
import { HashRouter as Link, NavLink  } from 'react-router-dom'


class HeaderComponent extends Component {
  render() {
    return (
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-drak bg-dark">
          <div className="container">
            <div className="col">
              <NavLink className="navbar-brand text-justify" to="/"><h1>YWMobile</h1></NavLink>
            </div>

            <div className="col collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <NavLink className='nav-item nav-link custom-nav-item-link' to="" activeClassName="active" exact replace>Home<span className="sr-only"></span></NavLink>
                <NavLink className="nav-item nav-link custom-nav-item-link" to="/company" activeClassName="active" exact replace>Company<span className="sr-only"></span></NavLink>
                <NavLink className="nav-item nav-link custom-nav-item-link" to="/business" activeClassName="active" exact replace>Business<span className="sr-only"></span></NavLink>
                <NavLink className="nav-item nav-link custom-nav-item-link" to="/recruit" activeClassName="active" exact replace>Recruit<span className="sr-only"></span></NavLink>
                <NavLink className="nav-item nav-link custom-nav-item-link" to="/cs" activeClassName="active" exact replace>CS<span className="sr-only"></span></NavLink>
                <NavLink className="nav-item nav-link custom-nav-item-link" to="/cowork" activeClassName="active" exact replace>Co-work<span className="sr-only"></span></NavLink>
                <NavLink className="nav-item nav-link custom-nav-item-link" to="/vietnam" activeClassName="active" exact replace>VietNam<span className="sr-only"></span></NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderComponent;
