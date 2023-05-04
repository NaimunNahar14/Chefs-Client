import React from 'react';
import {  Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import {FaThumbsUp } from "react-icons/fa";
// import Recipes from './recipes';
import InsideEditors from './InsideEditors';

const NewDetailsPage = () => {
    const chefs = useLoaderData();
    

    return (
        <div>
             <Container>
                <Card style={{ width: '20rem' }} className='mt-2'>
                    <Card.Img variant="top" src={chefs?.picture} />
                    <Card.Body>
                        <Card.Title>Chef Name: {chefs.name}</Card.Title>
                        <Card.Text>
                        <span className='text-primary'>Chef Bio:</span> {chefs.bio}
                          
                        </Card.Text>
                        <Card.Text>
                            <span className='text-primary'>Years of Experience:</span> {chefs.years_experience} years.
                        </Card.Text>
                        <Card.Text>
                            <span className='text-primary'>Numbers of Recipes: </span> {chefs.num_recipes}
                        </Card.Text>
                        <small className="text-primary"> <FaThumbsUp></FaThumbsUp>{chefs.likes}</small>
                    </Card.Body>
                </Card>
               <InsideEditors></InsideEditors>
        </Container>
        

                      
            
            
           
           
         
            
            
        </div>
    );
};

export default NewDetailsPage;