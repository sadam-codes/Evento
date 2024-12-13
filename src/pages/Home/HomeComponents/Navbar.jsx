import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";
import evento from "../../../assets/images/evento (2).png";
import { HashLink } from "react-router-hash-link";

function CollapsibleExample() {
  return (
    <div className="navbar-container">
      <Navbar expand="lg">
        <Container>
          <img src={evento} alt="evento" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto text-center justify-content-center navStyling">
            
              <HashLink smooth to="#home" className="text-white px-2 text-decoration-none">
                HOME
              </HashLink>
              <HashLink smooth to="#speakers" className="text-white px-2 text-decoration-none">
                SPEAKERS
              </HashLink>
              <HashLink smooth to="#events" className="text-white px-2 text-decoration-none">
                EVENTS
              </HashLink>
              <HashLink smooth to="#news" className="text-white px-2 text-decoration-none">
                NEWS
              </HashLink>
              <HashLink smooth to="#contact" className="text-white px-2 text-decoration-none">
                CONTACT
              </HashLink>
              <HashLink smooth to="#search" className="text-white px-2 text-decoration-none">
                <FaSearch />
              </HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CollapsibleExample;
