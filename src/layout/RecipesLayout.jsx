import React from 'react';
import Navigationbar from '../pages/Shared/Navigationbar';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';

const RecipesLayout = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Container>
                <Row>
                <Col lg={12} sm={12}>
                        <Outlet></Outlet>
                    </Col>
                </Row>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default RecipesLayout;