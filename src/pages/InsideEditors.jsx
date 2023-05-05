import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const InsideEditors = ({ recipe }) => {
    const { name, ingredients, cooking_method, rating } = recipe[0];
    const [showToast1, setShowToast1] = useState(false);
    const handleToast1 = () => setShowToast1(true);
    
    return (
        <div className='mt-4'>

            <Card>
                <Card.Body>
                    <Card.Title className='text-center text-primary'>Recipe Name: {name}</Card.Title>
                    <Card.Text>
                        Ingredients:
                        <ul>
                            <li>{ingredients}</li>
                        </ul>
                    </Card.Text>
                    <Card.Text>
                        <span>cooking_method: </span>
                        {cooking_method}
                    </Card.Text>
                    <Button variant="danger" className="text-center" onClick={handleToast1}>
                     Favorites <FaHeart></FaHeart>
                    </Button>
                </Card.Body>
                <Card.Footer className='text-muted d-flex'>
                    <div className='flex-grow-1 d-flex'>
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                   <span>{rating}</span>
                    </div>
                    <Toast show={showToast1} onClose={() => setShowToast1(false)}>
                        <Toast.Body className='text-danger'>ADDED Your Favorites Items</Toast.Body>
                    </Toast>
                </Card.Footer>
            </Card>


        </div>
    );
};

export default InsideEditors;
