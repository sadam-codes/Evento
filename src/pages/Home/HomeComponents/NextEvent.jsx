import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineCalendar } from "react-icons/ai";
import c1 from "../../../assets/images/c1.png";
import c2 from "../../../assets/images/c2.png";
import c3 from "../../../assets/images/c3.png";
const eventsData = [
  {
    date: "14",
    month: "February",
    title: "Conference in America",
    time: "08 AM - 04 PM",
    buttonText: "Read More",
    buyNowText: "Buy Now",
    image: c1,
    speaker: "Speaker: Danila Hill",
  },
  {
    date: "18",
    month: "February",
    title: "Conference in America",
    time: "08 AM - 04 PM",
    buttonText: "Read More",
    buyNowText: "Buy Now",
    image: c2,

    speaker: "Speaker: Danila Hill",
  },
  {
    date: "22",
    month: "February",
    title: "Conference in America",
    time: "08 AM - 04 PM",
    buttonText: "Read More",
    buyNowText: "Buy Now",
    image: c3,
    speaker: "Speaker: Danila Hill",
  },
];

function NextEvent() {
  return (
    <section id="news">
      <Container>
        <div className="card" style={{ background: "whitesmoke" }}>
          <button className="events-button text-start bg-danger text-white fw-bold py-2">
            <span className="spanning">
              <AiOutlineCalendar className="calender-icon gap-2" />
            </span>
            Nexts Events Calendar
          </button>
          {eventsData.map((event, index) => (
            <div
              className="row py-3 px-1 text-center justify-content-center align-items-center"
              key={index}
            >
              <div className="col-12 col-md-2 col-lg-2">
                <div>
                  <img
                    className="c-image rounded"
                    src={event.image}
                    alt="not available"
                  />
                </div>
              </div>
              <div className="col-12 col-md-2 col-lg-2">
                <h4 className="mb-0 fw-bold px-2">{event.date}</h4>
                <p
                  className="mb-0 px-2"
                  style={{
                    transition: "0.3s",
                    opacity: "0.5",
                    filter: "grayscale(1)",
                  }}
                >
                  {event.month}
                </p>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <h6 className="mb-0 fw-bold py-1">{event.title}</h6>
                <p className="mb-0 fw-bold fs-6 py-1">{event.time}</p>
                <p
                  className="mb-0 py-1"
                  style={{
                    transition: "0.3s",
                    opacity: "0.5",
                    filter: "grayscale(1)",
                  }}
                >
                  {event.speaker}
                </p>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <div className="read-parent">
                  <button className="read-button py-1 bg-danger border-danger">
                    {event.buttonText}
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-2 col-lg-2">
                <p className="buynow mb-0 fw-bold py-1 text-danger ">
                  {event.buyNowText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
export default NextEvent;
