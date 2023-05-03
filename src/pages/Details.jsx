import React from 'react';
import { Button, Card, CardGroup, Container, Image } from 'react-bootstrap';
import {FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Details = ({list}) => {
    const{_id, name, picture, num_recipes, likes, bio, years_experience} = list;
    return (
        <Container>
            <CardGroup  className='mb-4'>
                <Card border='primary' className='d-flex align-item-center'>
                <Image style={{height:'50%'}} src={list?.picture} roundedCircle />                 
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
                        <Link to={`/chefs/${_id}`}><Button variant="outline-danger"> Views Recipes Button</Button></Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-primary"> <FaThumbsUp></FaThumbsUp>{list.likes}</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </Container>
    );
};

export default Details;