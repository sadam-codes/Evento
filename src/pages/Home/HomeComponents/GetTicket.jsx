import React from "react";
import { Container } from "react-bootstrap";

function GetTicket() {
  const borderTopStyle = {
    borderTop: "3px solid red",
    width: "3%",
    boxSizing: "border-box",
  };

  return (
    <div className="backgroundimag">
      <Container className="py-5">
        <div style={borderTopStyle}></div>
        <div>
          <h2 className="about-heading py-2 text-light fw-bold">
            GET YOUR TICKETS
          </h2>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-5">
          <p className="mb-0 text-light ticket-paragraph col-12 col-md-9 py-3">
            Lorem ipsum dolar sit amet, consecteture adipiscing alit. In rhoncus
            massa nec gravida tempus. Integer iaculis in aazzzCurabitur a
            pulvinar nunc. Maecenas laboreet finibus lectus, at volutpat ligula
            euismod
          </p>
          <button className="buy-now text-center bg-danger border-danger">
            BUY NOW
          </button>
        </div>
      </Container>
    </div>
  );
}

export default GetTicket;
