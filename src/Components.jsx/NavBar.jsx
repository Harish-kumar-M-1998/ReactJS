import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

function NavBar() {
  let navigate = useNavigate();
  const textStyle = {
    fontFamily: 'Proxima Nova, sans-serif',
    fontSize: '25px', // Optional: Adjust font size as needed
    fontWeight: 'normal', // Optional: Adjust font weight as needed
  };

  return (
    <>
      {/* Sticky navigation bar  */}
      <div
        style={{
          position: "sticky",
          zIndex: 1,
          top: 0,
          backgroundColor:"#9761A7 ",
        }}
      >
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand>
              <b style={textStyle}>LIBRARY MANAGEMENT</b>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="text-center">
                <Nav className="mx-auto">
                  <Nav.Link onClick={() => navigate("/dashboard")}>
                    <b className="btn btn-outline-dark fw-bold text-info">
                      Book Records
                    </b>
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate("/add-book")}>
                    <b className="btn btn-outline-dark fw-bold text-info">
                      Add Book
                    </b>
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate("/author-records")}>
                    <b className="btn btn-outline-dark fw-bold text-info">
                      Author Records
                    </b>
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate("/add-author")}>
                    <b className="btn btn-outline-dark fw-bold text-info">
                      Add Author
                    </b>
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
     
    </>
  );
}

export default NavBar;