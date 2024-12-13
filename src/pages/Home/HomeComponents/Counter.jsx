import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const countersData = [
  { value: "00", label: "Weeks" },
  { value: "00", label: "Days" },
  { value: "00", label: "Hours" },
  { value: "00", label: "Minutes" },
  { value: "00", label: "Seconds" },
];
function Counter() {
  return (
    <>
      <div className="counterBg d-flex align-items-center justify-content-center text-center">
        <Container className="p-5">
          <h2 className="counter-heading text-center mb-0 fw-bold">
            Counter until the big event
          </h2>
          <Row>
            {countersData.map((counter, index) => (
              <Col key={index}>
                <div className="box-one py-1  text-center">
                  <p className="zero mb-0 pt-3">{counter.value}</p>
                  <p className="week mb-0 pb-3">{counter.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Counter;
