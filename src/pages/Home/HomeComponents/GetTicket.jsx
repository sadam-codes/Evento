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
            Life flows with purpose, shaped by steady effort. Stay grounded and focused as you move forward.
            True progress comes from persistence and adaptability. Keep striving, and success will follow.
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
