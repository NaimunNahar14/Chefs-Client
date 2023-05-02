import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-light mt-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Certainly! As a visitor to chef's and recipe websites, you'll discover a world of delicious recipes, helpful cooking tips, and expert advice from experienced chefs. Enjoy exploring the different websites and finding inspiration for your next culinary creation!</p>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul>
              <li>1234 Main Street</li>
              <li>City, State 12345</li>
              <li>info@chef'srecipes.com</li>
              <li>555-555-5555</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
      
    );
};

export default Footer;