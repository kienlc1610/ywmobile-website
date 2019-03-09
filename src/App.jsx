import React, { Component } from 'react';
import Header from './Components/Header/HeaderComponent';
import Footer from './Components/Footer/FooterComponent';
import Home from './Components/Home/HomeComponent';
import CompanyComponent from './Components/Company/CompanyComponent';
import AllProductComponent from './Components/Business/AllProduct/AllProductComponent'
import MobilityComponent from './Components/Business/Mobility/MobilityComponent'
import AIComponent from './Components/Business/AI/AIComponent'
import SIComponent from './Components/Business/SI/SIComponent'
import CareersComponent from "./Components/Careers/CareersComponent";
import CultureAndBenefitComponent from './Components/Careers/CultureAndBenefit/CultureAndBenefitComponent'
import RecruitingComponent from './Components/Careers/Recruiting/RecruitingComponent'
import QAComponent from './Components/Careers/QA/QAComponent'
import './App.css';
import ScrollUpButton from "react-scroll-up-button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route, Switch} from 'react-router-dom';


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
            <Route exact path="/business" component={AllProductComponent} />
            <Route exact path="/business/all" component={AllProductComponent} />
            <Route exact path="/business/mobility" component={MobilityComponent} />
            <Route exact path="/business/ai" component={AIComponent} />
            <Route exact path="/business/si" component={SIComponent} />
            <Route exact path="/careers" component={CareersComponent} />
            <Route exact path="/careers/culture" component={CultureAndBenefitComponent} />
            <Route exact path="/careers/recruiting" component={RecruitingComponent} />
            <Route exact path="/careers/qa" component={QAComponent} />
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
