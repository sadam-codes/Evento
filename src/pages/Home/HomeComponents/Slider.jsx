import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
  }

  goToSlide = (index) => {
    this.slider.current.slickGoTo(index);
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const buttonStyle = {
      display: "flex",
      justifyContent: "center",
      paddingTop: "100px",
      paddingBottom: "60px",
    };

    return (
      <section id="home">
        <Container className="container">
          <div style={{ textAlign: "center", paddingTop: "100px" }}>
            <Slider ref={this.slider} {...settings}>
              <div>
                <h2 className="prepare-heading">PREPARE YOURSELF FOR THE</h2>
                <h1 className="conference-heading">CONFERENCE</h1>
                <p className="feb-paragrph">12-14 FEBRUARY 2018-LOS ANGELES,</p>
                <button className="ticket-button">BUY TICKET NOW</button>
              </div>
              <div>
                <h2 className="prepare-heading">PREPARE YOURSELF FOR THE</h2>
                <h1 className="conference-heading">CONFERENCE</h1>
                <p className="feb-paragrph">12-14 FEBRUARY 2018-LOS ANGELES,</p>
                <button className="ticket-button">BUY TICKET NOW</button>
              </div>
              <div>
                <h2 className="prepare-heading">PREPARE YOURSELF FOR THE</h2>
                <h1 className="conference-heading">CONFERENCE</h1>
                <p className="feb-paragrph">12-14 FEBRUARY 2018-LOS ANGELES,</p>
                <button className="ticket-button">BUY TICKET NOW</button>
              </div>
            </Slider>
          </div>
          <div style={buttonStyle} className="backup-image">
            <button className="sliderbutton" onClick={() => this.goToSlide(0)}>
              1
            </button>
            <button className="sliderbutton" onClick={() => this.goToSlide(1)}>
              2
            </button>
            <button className="sliderbutton" onClick={() => this.goToSlide(2)}>
              3
            </button>
          </div>
        </Container>
      </section>
    );
  }
}
