import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const pricingOptions = [
  {
    button: "RECOMMENDED",
    title: "Early Bird",
    description: "For The Fast Ones",
    price: 65,
    features: [
      "Early Entrance",
      "Front seat",
      "Complementary Drinks",
      "Promo Gift",
    ],
    dollarSign: "$",
  },
  {
    title: "Start Up",
    description: "For The Beginners",
    price: 85,
    features: [
      "Early Entrance",
      "Front seat",
      "Complementary Drinks",
      "Promo Gift",
    ],
    dollarSign: "$",
  },
  {
    title: "Corporate",
    description: "For The Business",
    price: 95,
    features: [
      "Early Entrance",
      "Front seat",
      "Complementary Drinks",
      "Promo Gift",
    ],
    dollarSign: "$",
  },
];

function Pricing() {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <div
            style={{
              borderTop: "3px solid red",
              width: "3%",
              boxSizing: "border-box",
            }}
          ></div>
        </Col>
      </Row>
      <Row className="gapping">
        <Col>
          <h2 className="about-heading py-2 fw-bold">PRICING TABLE</h2>
        </Col>
      </Row>
      <Row>
        {pricingOptions.map((option, index) => (
          <Col key={index} lg={4} md={6} sm={12}>
            <div
              className={`card text-center ${
                index === 1 || index === 2 ? "backgroundcolor" : "indexoeone"
              } mb-3 mb-sm-0`}
            >
              <div className="recomended-patrent text-start">
                {index === 0 && (
                  <button className="recomended-buttton bg-danger border-danger">
                    {option.button}
                  </button>
                )}
              </div>
              <h4 className="title fw-bold">{option.title}</h4>
              <p
                className="mb-0 fs-6"
                style={{
                  transition: "0.3s",
                  opacity: "0.5",
                  filter: "grayscale(1)",
                }}
              >
                {option.description}
              </p>
              <h1 className="heading two fw-bold">
                {option.price}
                <sup className="spanning fw-normal fs-3">
                  <span
                    className="d-none d-sm-inline fs-6 text-center justify-content-center"
                    style={{
                      transition: "0.3s",
                      opacity: "0.5",
                      filter: "grayscale(1)",
                    }}
                  >
                    {option.dollarSign}
                  </span>
                  <span
                    className="d-inline d-sm-none fs-6 text-center justify-content-center"
                    style={{
                      transition: "0.3s",
                      opacity: "0.5",
                      filter: "grayscale(1)",
                    }}
                  >
                    {option.dollarSign}
                  </span>
                </sup>
              </h1>

              {option.features.map((feature, featureIndex) => (
                <p
                  className="para mb-0"
                  style={{
                    transition: "0.3s",
                    opacity: "0.5",
                    filter: "grayscale(1)",
                  }}
                  key={featureIndex}
                >
                  {feature}
                </p>
              ))}
              <div className="purchase-parent">
                <button className="purchase-button bg-danger border-danger">
                  PURCHASE
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Pricing;
