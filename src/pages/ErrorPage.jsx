import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()

    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h1 className="text-center">Oops!</h1>
                        <p className="text-center">We couldn't find the page you're looking for.</p>
                        <div>
                            <h2>
                                <span>Error</span>
                                {status || 404}
                            </h2>
                            <p>
                                {error?.message}
                            </p>
                            <Button variant="primary" className="mx-auto d-block" onClick={() => window.location.href = "/"}>Go back to homepage</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ErrorPage;

