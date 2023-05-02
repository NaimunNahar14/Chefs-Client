import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Header = () => {
    return (
        
        <Container className='pt-2'>
            <Row>
                <Col md={6}>
                    <h1 className='text-primary'>Welcome to our Chef's and Recipe Website</h1>
                    <p>A platform that provides a collection of recipes and culinary-related content created by professional chefs and food enthusiasts. The website aims to help people learn about cooking, explore new cuisines, and develop their culinary skills.</p>
                </Col>
                <Col md={6}>
                    <Image src="https://i.ibb.co/LgJ8rPt/1000-F-544943175-Wm-Y7-FXrug-Ent-I9-Ah-U6mpo1-Mbdmkbxapm.jpg/500x500" fluid />
                </Col>
            </Row>
        </Container>
       
    );
};

export default Header;