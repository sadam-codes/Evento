import React from "react";
import speakerone from "../../../assets/images/s1.png";
import speakertwo from "../../../assets/images/s2.png";
import speakerthree from "../../../assets/images/s3.png";
import speakerfour from "../../../assets/images/s4.png";
import speakerfive from "../../../assets/images/s5.png";
import speakersix from "../../../assets/images/s6.png";
import speakerseven from "../../../assets/images/s7.png";
import speakereight from "../../../assets/images/s8.png";
import { Container } from "react-bootstrap";

const speakerImages = [
  speakerone,
  speakertwo,
  speakerthree,
  speakerfour,
  speakerfive,
  speakersix,
  speakerseven,
  speakereight,
];

function Hello() {
  const renderImages = () => {
    return speakerImages.map((image, index) => (
      <div key={index} className="col-sm-12 col-md-6 col-lg-3 container-xl p-0">
        <div className="image-container overflow-hidden">
          <img
            src={image}
            alt={`Speaker ${index + 1}`}
            className="zoom-effect w-100"
          />
        </div>
        <div className="hover-button ">
          <p className="patricia mb-0 text-danger">Lorem Smith</p>
          <p className="ceo mb-0">CEO COMPANY</p>
        </div>
      </div>
    ));
  };

  return (
    <section id="speakers">
      <Container className="py-5">
        <div
          style={{
            borderTop: "3px solid red",
            width: "3%",
            boxSizing: "border-box",
          }}
        ></div>
        <div className="gapping">
          <h2 className="about-heading py-2 fw-bold">OUR SPEAKERS</h2>
        </div>
      </Container>
      <div className="row m-0 p-0">{renderImages()}</div>
    </section>
  );
}

export default Hello;
