import React, { useState } from 'react';
import {  Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import {FaThumbsUp } from "react-icons/fa";
import InsideEditors from './InsideEditors';

const NewDetailsPage = () => {

    const list = useLoaderData();

    return (
        <div>
            <Container>
                <Card style={{ width: '20rem' }} className='mt-2'>
                    <Card.Img variant="top" src={list?.picture} />
                    <Card.Body>
                        <Card.Title>Chef Name: {list.name}</Card.Title>
                        <Card.Text>
                        <span className='text-primary'>Chef Bio:</span> {list.bio}
                          
                        </Card.Text>
                        <Card.Text>
                            <span className='text-primary'>Years of Experience:</span> {list.years_experience} years.
                        </Card.Text>
                        <Card.Text>
                            <span className='text-primary'>Numbers of Recipes: </span> {list.num_recipes}
                        </Card.Text>
                        <small className="text-primary"> <FaThumbsUp></FaThumbsUp>{list.likes}</small>
                    </Card.Body>
                </Card>
                <InsideEditors></InsideEditors>
        </Container>
        

                      
            
            
           
           
            
            
            
        </div>
    );
};

export default NewDetailsPage;