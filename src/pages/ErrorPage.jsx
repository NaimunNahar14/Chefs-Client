import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useRouteError } from 'react-router-dom';
import errorImage from '../assets/oops-404-error-with-broken-robot-concept-illustration_114360-1932.avif';
const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
                <Row>
                    <Col className='text-center'>
                    <Image src={errorImage}></Image>
                            <h2>
                                <span>Error</span>
                                {status || 404}
                            </h2>
                            <p>
                                {error?.message}
                            </p>
                            <Button variant="primary" className="mx-auto d-block" onClick={() => window.location.href = "/"}>Go back to homepage</Button>
                    </Col>
                </Row>
            

        </div>
    );
};

export default ErrorPage;

