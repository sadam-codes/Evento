import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SlLocationPin } from "react-icons/sl";
import { TiTicket } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

const data = [
  {
    icon: <MdOutlineDateRange className="icon fs-1" />,
    title: "DATE",
    content: "12-14 February 2018",
  },
  {
    icon: <SlLocationPin className="location-icon fs-1" />,
    title: "LOCATION",
    content: "Los Angeles, CA",
  },
  {
    icon: <BsPerson className="icon fs-1" />,
    title: "SPEAKERS",
    content: "Nataline James+ guests",
  },
  {
    icon: <TiTicket className="icon fs-1" />,
    title: "TICKETS",
    content: "$65 early bird",
  },
];

function Date() {
  return (
    <Container style={{ padding: "50px 0px" }}>
      <Row className="justify-content-center">
        {data.map((item, index) => (
          <Col xs={12} md={3} key={index}>
            <div className="d-flex align-items-center justify-content-center py-4 gap-2">
              {item.icon}
              <div>
                <h6 className="mb-0">{item.title}</h6>
                <p
                  className="mb-0"
                  style={{
                    transition: "0.3s",
                    opacity: "0.5",
                    filter: "grayscale(1)",
                    fontSize: "small",
                  }}
                >
                  {item.content}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Date;
