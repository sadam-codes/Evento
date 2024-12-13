import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdSpeakerPhone } from "react-icons/md";
import { AiOutlineAudio } from "react-icons/ai";
import { HiOutlineClock } from "react-icons/hi";
import { GiCommercialAirplane } from "react-icons/gi";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "9 Speakers",
    description:
      "Lorem ipsum dolar sit amet, consectetur adipiscing elit.In rhoncus massa nec graviante!",
    buttonText: "Read More",
    icon: <AiOutlineAudio className="iconss" />,
  },
  {
    title: "8 Hrs Marathon",
    description:
      "Lorem ipsum dolar sit amet, consectetur adipiscing elit.In rhoncus massa nec graviante!",
    buttonText: "Read More",
    icon: <MdSpeakerPhone className="iconss" />,
  },
  {
    title: "Live Broadcast",
    description:
      "Lorem ipsum dolar sit amet, consectetur adipiscing elit.In rhoncus massa nec graviante!",
    buttonText: "Read More",
    icon: <GiCommercialAirplane className="iconss" />,
  },
  {
    title: "Early Bird",
    description:
      "Lorem ipsum dolar sit amet, consectetur adipiscing elit.In rhoncus massa nec graviante!",
    buttonText: "Read More",
    icon: <HiOutlineClock className="iconss" />,
  },
];

function FourCards() {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            {cardData.map((card, id) => (
              <Col key={id} lg={3} md={6} sm={12} className="py-3 px-3">
                <div className="card carder">
                  {card.icon}
                  <h4 style={{ fontWeight: "bold" }}>{card.title}</h4>
                  <p className="mb-0 card-paragraph">{card.description}</p>
                  <Link
                    smooth
                    to="#events"
                    className="readmore text-danger text-decoration-none"
                  >
                    {card.buttonText}
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default FourCards;
