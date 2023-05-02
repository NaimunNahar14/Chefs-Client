import React from 'react';
import Navigationbar from '../pages/Shared/Navigationbar';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/LeftNav';
import RightNav from '../pages/RightNav';

const Main = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Header></Header>
            <Container>       
                <Row>
                    <Col lg={3} sm={12}>
                        <LeftNav></LeftNav>

                    </Col>
                    <Col lg={6} sm={12}>
                        <h2>main comming..</h2>
                    </Col>
                    <Col lg={3} sm={12}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
            
            
        </div>
    );
};

export default Main;