import React from 'react';
import { Card, CardGroup, Container,Image  } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import {FaThumbsUp } from "react-icons/fa";

const NewDetailsPage = () => {

    const list = useLoaderData();

    return (
        <div>
            <Container>
            <CardGroup  className='mb-4'>
                <Card border='primary' className='d-flex align-item-center'>
                <Image style={{height:'25%'}} src={list?.picture} roundedCircle />                 
                    <Card.Body>
                        <Card.Title className='text-primary text-center'>Chef Name: {list.name}</Card.Title>
                        <Card.Text className='text-dark'>
                         <span className='text-primary'>Chef Bio:</span> {list.bio}
                        </Card.Text>
                        <Card.Text>
                            <span className='text-primary'>Years of Experience:</span> {list.years_experience} years.
                        </Card.Text>
                        <Card.Text>
                            <span className='text-primary'>Numbers of Recipes: </span> {list.num_recipes}
                        </Card.Text>
                        <div>
                        <Card.Text>
                           
                           

                        </Card.Text>
                            
                        </div>
                        <div>
                        <Card.Text>
                            
                        </Card.Text>

                        </div>
                        <div>
                        <Card.Text>
                            
                        </Card.Text>

                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-primary"> <FaThumbsUp></FaThumbsUp>{list.likes}</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </Container>
            
            
           
           
            
            
            
        </div>
    );
};

export default NewDetailsPage;