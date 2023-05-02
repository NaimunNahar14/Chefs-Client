import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2' variant="primary"> <FaGoogle></FaGoogle> Login with Google</Button>
            <Button variant="dark"> <FaGithub></FaGithub> Login with Github</Button>
            <div className='mt-4'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item variant="primary"> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item variant="success"><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item variant="danger"><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item variant="danger"><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                </ListGroup>
                

            </div>
        </div>
    );
};

export default RightNav;