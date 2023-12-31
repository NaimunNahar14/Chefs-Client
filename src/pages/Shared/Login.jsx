import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../providers/AuthProvider';
import {  FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    const handleGoogleSignIn = () =>{
       signInWithPopup(auth, googleProvider)
       .then(result =>{
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
       })
       .catch(error =>{
        console.log(error.message);
       })

    }
    const { signIn } = useContext(AuthContext);
    const navigate =useNavigate();
    const location = useLocation();
    // console.log('loging page location', location)
    const from = location.state?.from?.pathname || '/'
    
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true});
            // navigate(from, {replace: true });
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <Container className='w-25 mx-auto'>
            <h3 className='text-center'>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-success">
                    Don't have you any account?
                    <Link to='/register'>Register</Link>

                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
            <br />
            <Button onClick={handleGoogleSignIn} className='mb-2' variant="primary"> <FaGoogle></FaGoogle> Login with Google</Button>
            <Button onClick={handleGithubSignIn} variant="dark"> <FaGithub></FaGithub> Login with Github</Button>
        </Container>
    );
};

export default Login;