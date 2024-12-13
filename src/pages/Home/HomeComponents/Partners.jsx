import React from "react";
import { Container } from "react-bootstrap";
import b3 from "../../../assets/images/b3.png";
import b4 from "../../../assets/images/b4.png";
import b5 from "../../../assets/images/b5.png";
import b1 from "../../../assets/images/b1.png";
import b2 from "../../../assets/images/b2.png";

function Partners() {
  return (
    <div className="five-images py-5">
      <Container>
        <div
          style={{
            borderTop: "3px solid red",
            width: "3%",
            boxSizing: "border-box",
          }}
        ></div>
        <div className="gapping">
          <h2 className="about-heading fw-bold">OUR PARTNERS</h2>
        </div>
        <div className="imagesss text-center">
          <img className="imgg" src={b3} alt="No display" style={{width:'20%',padding:'30px'}}/>
          <img className="imgg" src={b4} alt="No display" style={{width:'20%',padding:'30px'}}/>
          <img className="imgg" src={b5} alt="No display" style={{width:'20%',padding:'30px'}}/>
          <img className="imgg" src={b1} alt="No display" style={{width:'20%',padding:'30px'}}/>
          <img className="imgg" src={b2} alt="No display" style={{width:'20%',padding:'30px'}}/>
        </div>
      </Container>
    </div>
  );
}

export default Partners;
