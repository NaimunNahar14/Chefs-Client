import React from 'react';
import Navigationbar from '../pages/Shared/Navigationbar';
import Header from '../pages/Shared/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../pages/Shared/Footer';
import RightNav from '../pages/RightNav';
import { Outlet } from 'react-router-dom';

const RecipesLayout = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Header></Header>
            <Container>
                <Row>
                <Col lg={9} sm={12}>
                        <Outlet></Outlet>
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

export default RecipesLayout;