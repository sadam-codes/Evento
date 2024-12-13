import { Container } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div className="bg-dark">
      <Container>
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-2">
          <div className="text-white">
            <p className="footer-para mb-0 d-sm-inline-block d-lg-flex" style={{paddingLeft:'15px'}}>
              Copyright © 2022 All Rights Reserved | This Template
              Is Made With 🤍 By Colorib
            </p>
          </div>
          <div className="text-white" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <p className="footer-para">
              <span style={{ padding: "0px 10px" }}>Home</span>
              <span style={{ padding: "0px 10px" }}>Speaker</span>
              <span style={{ padding: "0px 10px" }}>Event</span>
              <span style={{ padding: "0px 10px" }}>News</span>
              <span style={{ padding: "0px 10px" }}>Contact</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
