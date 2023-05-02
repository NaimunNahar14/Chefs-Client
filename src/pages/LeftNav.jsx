import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const LeftNav = () => {
    return (
        <Container>
            <Row xs={1} md={1}  className="g-4 mt-2">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src='https://i.ibb.co/QbGfmk3/1000-F-596795133-i-ANGGJEJlxx-Zm-Cg07-Xy-Chrx-C6-WZIoll4.jpg' />
                            <Card.Body>
                                <Card.Title>Beef Curry and Rice</Card.Title>
                                <Card.Text>
                                Beef curry is a flavorful and aromatic dish made with tender beef, fragrant spices, and a rich tomato-based sauce.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src='https://i.ibb.co/W2N87mb/download-7.jpg' fluid />
                            <Card.Body>
                                <Card.Title className='text-center'>Khichuri</Card.Title>
                                <Card.Text>
                                Khichuri is a classic Bengali comfort food made with rice, lentils, and spices. It is a wholesome and nutritious one-pot meal.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src='https://i.ibb.co/sRGPtsY/istockphoto-1333127665-612x612.jpg' />
                            <Card.Body>
                                <Card.Title>Chicken Biriyani</Card.Title>
                                <Card.Text>
                                Chicken biryani is a popular Bangladesh ,Indian and Pakistani dish made with spiced rice, tender chicken, and aromatic spices. It is a flavorful and satisfying meal.
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                
            </Row>
           
        </Container>
    );
};

export default LeftNav;