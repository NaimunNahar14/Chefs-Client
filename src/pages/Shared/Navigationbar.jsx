import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navigationbar = () => {

    const {user, logOut} =useContext(AuthContext);
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Name
         
        </Tooltip>
      );
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
                            <Nav.Link as={NavLink} to="/" exact activeClassName="active">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/blog" exact activeClassName="active">
                                Blog
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about" exact activeClassName="active">
                                About
                            </Nav.Link>
                            
                            
                        </Nav>
                        <Nav>
                        <Nav.Link href="#dd"></Nav.Link>
                        {user && <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip} >
                        <Button><FaUserCircle style={{ fontSize: '2rem' }}>
                            </FaUserCircle></Button>
                            


                            </OverlayTrigger>}
                        
                            {user ?         
                                <Button onClick={handleLogOut}>Logout</Button> :
                                <Link to='/login'><Button>Login</Button>
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