import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted , setAccepted] = useState(false);
    const[regerror, setRegerror] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (event) =>{
        event.preventDefault();
        setSuccess('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        createUser(email, password)
        .then (result => {
            const createdUser = result.user;
            console.log(createdUser);
            setRegerror('');
            event.target.reset();
            setSuccess('User has Created Successfully')
        })
        .catch(error =>{
            console.log(error.message);
            setRegerror(error.message);
        })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <div>
           <Container className='w-25 mx-auto'>
            <h2 className='text-center'>Register</h2>
                <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" required/>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter photo url"required/>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email"required/>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password"required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                        onClick={handleAccepted}
                         type="checkbox"
                          name='accept' 
                           label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
                    </Form.Group>

                    <Button variant="primary" disabled={!accepted} type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-success">
                        Already have you any account?
                        <Link to='/Login'>Login</Link>

                    </Form.Text>
                    <div>
                        <Form.Text className="text-primary mt-2">
                            {success}

                        </Form.Text>
                        <Form.Text className="text-danger">
                            {regerror}
                        </Form.Text>
                    </div>
                    
                </Form>
            </Container>
            
        </div>
    );
};

export default Register;