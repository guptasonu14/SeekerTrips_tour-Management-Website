import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo1">
              <img src={logo} alt="" />
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'space-between' }}>
          <Col lg="3">
            <h4 className="footer__link-title">Discover</h4>

            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h4 className="footer__link-title">Quick Links</h4>

            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h4 className="footer__link-title">Contact</h4>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex  gap-3">
                <h6 className="mb-0 d-flex  gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>

                <p className="mb-0">Bihar, India</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex  gap-3">
                <h6 className="mb-0 d-flex  gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>

                <p className="mb-0">sguptabudha@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex  gap-3">
                <h6 className="mb-0 d-flex r gap-2">
                  <span>
                    <i class="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>

                <p className="mb-0">+91 9000050001</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <hr className="horizontal-line" />
        <Row>
          <Col lg="12" classname="text-center pt-5">
            <p className="copyright">
              Copyright {year}, design and develop by Sonu Gupta. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
