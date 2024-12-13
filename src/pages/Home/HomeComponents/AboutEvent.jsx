import React from "react";
import { Container } from "react-bootstrap";

function AboutEvent() {
  const borderTopStyle = {
    borderTop: "3px solid red",
    width: "3%",
    boxSizing: "border-box",
  };
  return (
    <section id="events">
    <Container className="py-5">
      <div style={borderTopStyle}></div>
      <div>
        <h2 className="about-heading py-2 fw-bold">ABOUT THE EVENT</h2>
      </div>
      <div className="lorem-paragraphs d-flex align-items-center gap-5 ">
        <p
          className="mb-0"
          style={{ transition: "0.3s", opacity: "0.5", filter: "grayscale(1)" }}
        >
          The upcoming event is set to be an exciting and memorable occasion
          that promises to bring people together from all walks of life. With a
          diverse range of activities planned, attendees can look forward to a
          day filled with fun, laughter, and learning.
        </p>
        <p
          className="mb-0"
          style={{ transition: "0.3s", opacity: "0.5", filter: "grayscale(1)" }}
        >
          This upcoming event is a testament to innovation and collaboration. It
          is a platform where visionaries, experts, and enthusiasts converge to
          explore the latest trends and breakthroughs in their respective
          fields. From technology and business to arts and culture,
        </p>
      </div>
    </Container>
    </section>
  );
}

export default AboutEvent;
