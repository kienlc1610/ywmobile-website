import React, { Component } from 'react';
import Header from './Components/Header/HeaderComponent';
import Footer from './Components/Footer/FooterComponent';
import Home from './Components/Home/HomeComponent';
import CompanyComponent from './Components/Company/CompanyComponent';
import './App.css';
import ScrollUpButton from "react-scroll-up-button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'


class App extends Component {
  shouldComponentUpdate() {
    console.log(this.props);
    return true;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/company" component={CompanyComponent} />
            <Route component={Home} />
          </Switch>

        <Footer />
        <ScrollUpButton
          ContainerClassName="scroll-to-top-btn"
          TransitionClassName="scroll-to-top-btn-transition"
        >
          <FontAwesomeIcon icon="angle-up" size="3x" fixedWidth />
        </ScrollUpButton>
      </div>
    );
  }
}

export default App;
