import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Navigationbar = () => {
    return (
        <Container className='pt-4 '>
            <Navbar bg="primary" variant="dark" className='rounded' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">CHEF'S HUNTER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#Blog">Blog</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            
                        </Nav>
                        <Nav>
                        <Button>login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Navigationbar;