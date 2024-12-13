import React from "react";
import { Container, Col } from "react-bootstrap";
import speakerone from "../../../assets/images/s1.png";
import speakertwo from "../../../assets/images/s2.png";
import speakerthree from "../../../assets/images/s3.png";
import speakerfour from "../../../assets/images/s4.png";
import speakerfive from "../../../assets/images/s5.png";
import speakersix from "../../../assets/images/s6.png";
import speakerseven from "../../../assets/images/s7.png";
import speakereight from "../../../assets/images/s8.png";

function Speaker() {
  const allSpeakers = [
    {
      name: "Patricia Stone",
      title: "CEO COMPANY",
      image: speakerone,
    },
    {
      name: "John Doe",
      title: "CEO COMPANY",
      image: speakertwo,
    },
    {
      name: "Jane Smith",
      title: "CEO COMPANY",
      image: speakerthree,
    },
    {
      name: "Michael Johnson",
      title: "CEO COMPANY",
      image: speakerfour,
    },
    {
      name: "Emily Brown",
      title: "CEO COMPANY",
      image: speakerfive,
    },
    {
      name: "David Lee",
      title: "CEO COMPANY",
      image: speakersix,
    },
    {
      name: "Jennifer Wilson",
      title: "CEO COMPANY",
      image: speakerseven,
    },
    {
      name: "Richard Davis",
      title: "CEO COMPANY",
      image: speakereight,
    },
  ];

  return (
    <>
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

        <div className="image-container container-xxl p-0">
          <div className="image-row">
            {allSpeakers.slice(0, 4).map((speaker, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={3}
                style={{ padding: "0" }}
              >
                <div className="image-with-button w-100">
                  <img
                    src={speaker.image}
                    alt={`Speaker ${index + 1}`}
                    className="zoom-effect"
                  />
                  <div className="hover-button py-1 px-4">
                    <p className="patricia mb-0 text-danger">{speaker.name}</p>
                    <p className="ceo mb-0">{speaker.title}</p>
                  </div>
                </div>
              </Col>
            ))}
          </div>
          <div className="image-row">
            {allSpeakers.slice(4).map((speaker, index) => (
              <Col
                key={index + 4}
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={3}
                style={{ padding: "0" }}
              >
                <div className="image-with-button w-100">
                  <img
                    src={speaker.image}
                    alt={`Speaker ${index + 5}`}
                    className="zoom-effect"
                  />
                  <div className="hover-button py-1 px-4">
                    <p className="patricia mb-0 text-danger">{speaker.name}</p>
                    <p className="ceo mb-0">{speaker.title}</p>
                  </div>
                </div>
              </Col>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Speaker;
