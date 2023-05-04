import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navigationbar = () => {

    const {user, logOut} =useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error));
    }
    return (
        <Container className='pt-4 '>
            <Navbar bg="primary" variant="dark" className='rounded' expand="lg">
                <Container>
                    <Navbar.Brand href="/">CHEF'S HUNTER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            
                        </Nav>
                        <Nav>
                        <Nav.Link href="#dd"></Nav.Link>
                            {user && <FaUserCircle style={{ fontSize: '2rem' }}>
                            </FaUserCircle>
                            }
                            {user ?         
                                <Button onClick={handleLogOut}>Logout</Button> :
                                <Link to='/login'><Button>login</Button>
                                </Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Navigationbar;