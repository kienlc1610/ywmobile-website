import React, { Component } from 'react'
import './CareersComponent.css';
import LogoImg from "../../img/logo.png";
import * as $ from "jquery";

export default class CareersComponent extends Component {
  customNextIcon = <i className="material-icons custom-icons">chevron_right</i>
  customPrevIconIcon = <i className="material-icons custom-icons">chevron_left</i>
  constructor(props) {
    super(props);
    this.state = {
      activedIndexOfSilder: 1,
      totalItemsOfSlider: 0 
    };
  }

  componentDidMount() {
    let self = this;
    this.setState({totalItemsOfSlider: $('#carouselEle').find('.carousel-inner .carousel-item').length});
    $('#carouselEle').on('slide.bs.carousel', function (event) {
      self.setState({activedIndexOfSilder: event.to + 1});
    });
  }

  render() {
    return (
      <div className="CareersComponent">
        <div className="d-flex flex-column flex-wrap main-content">
          <div className="top-img">
            <div className="container">
              <img src={LogoImg} alt="Star Logo" className="img-thumbnail custom-thumbnail" />
              <h1 className="mx-auto my-5 product-title">Challenge them together to make your imagination a reality.</h1>
            </div>
          </div>
          <div className="container">
            <div id="carouselEle" className="carousel slide custom-carousel" data-ride="carousel">
              <div className="carousel-indicators">
                <h4 className="text-indicators text-color">{this.state.activedIndexOfSilder} / {this.state.totalItemsOfSlider}</h4>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-caption d-md-block">
                    <h5>{'YWM is working together as an excellent team. We trust each other, everyone freely exchanges opinions and makes the best results.'}</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption d-md-block">
                    <h5>{'Depending on your age and your career, we do not have a business advantage, but we work solely on your capabilities and goals. There are many opportunities and challenges for those with competencies, and everyone is healthy.'}</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption d-md-block">
                    <h5>{'When you share information, the level and value of that information increases. By sharing information, we can quickly and easily understand each other and create high efficiency and excellent teamwork.'}</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption d-md-block">
                    <h5>{'Commitment to achieving our goals and our commitment to achieving them will keep us growing.'}</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption d-md-block">
                    <h5>{'We are based on pride in our professionalism, humility toward ourselves, and respect for each other. I believe that good culture comes from an attitude of respect for each other.'}</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption d-md-block">
                    <h5>{'Inside the role organization, I am making decisions by deciding what to do and how to do it myself, and making achievements.'}</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption d-md-block">
                    <h5>{'We believe that healthy communication among members is an important foundation of our performance, and we communicate candidly about success and failure.'}</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption d-md-block">
                    <h5>{'We all dream together and make it a reality'}</h5>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselEle" role="button" data-slide="prev">
                {this.customPrevIconIcon}
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselEle" role="button" data-slide="next" >
                {this.customNextIcon}
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
