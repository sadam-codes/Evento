import React from "react";
import evento from "../../../assets/images/evento (2).png";
import { Container, Row, Col } from "react-bootstrap";
import c1 from "../../../assets/images/c1.png";
import c2 from "../../../assets/images/c2.png";
import c3 from "../../../assets/images/c3.png";
import { AiOutlineYoutube } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiWhatsappLine } from "react-icons/ri";

function EISdsection() {
  return (
    <section id="contact">
      <div className="py-5 backcolor">
        <Container>
          <Row>
            <Col xs={12} lg={4} md={6}>
              <img src={evento} alt="not diaplay" />
              <p className="mb-0 text-light ticket-paragraph py-2">
                Lorem ipsum dolar sit amet, consecteture adipiscing alit. In
                rhoncus massa nec gravida tempus. Integer iaculis in
                aazzzCurabitur a pulvinar nunc. Maecenas laboreet finibus
                lectus, at volutpat ligula euismod
              </p>
              <div className="socialmedia-icons-container">
                <AiOutlineYoutube className="socialmedia-icons" />
                <TiSocialFacebook className="socialmedia-icons" />
                <AiOutlineTwitter className="socialmedia-icons" />
                <AiOutlineInstagram className="socialmedia-icons" />
                <RiWhatsappLine className="socialmedia-icons" />
              </div>
            </Col>
            <Col xs={12} lg={4} md={6}>
              <div
                style={{
                  borderTop: "3px solid red",
                  width: "10%",
                  boxSizing: "border-box",
                }}
              ></div>
              <div className="gapping py-2">
                <h2 className="contact-heading text-light fw-bold">
                  INSTAGRAM
                </h2>
                <div className="parent-images">
                  <img className="c-ww" src={c1} alt="not found" />
                  <img className="c-ww" src={c2} alt="not found" />
                  <img className="c-ww" src={c3} alt="not found" />
                </div>
                <div className="parent-images">
                  <img className="c-ww" src={c2} alt="not found" />
                  <img className="c-ww" src={c1} alt="not found" />
                  <img className="c-ww" src={c3} alt="not found" />
                </div>
              </div>
            </Col>

            <Col xs={12} lg={4} md={6}>
              <div
                style={{
                  borderTop: "3px solid red",
                  width: "10%",
                  boxSizing: "border-box",
                }}
              ></div>
              <div className="gapping py-2">
                <h2 className="contact-heading text-light fw-bold">
                  SUBSCRIBE TO OUR NEWSLETTER
                </h2>
                <div className="py-2">
                  <input
                    type="text"
                    placeholder="E-Mail here"
                    className="inputtext w-100"
                  />
                </div>
              </div>
              <div className="py-3">
                <button className="last-button text-white w-100 bg-danger border-danger">
                  SUBSCRIBE
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default EISdsection;
