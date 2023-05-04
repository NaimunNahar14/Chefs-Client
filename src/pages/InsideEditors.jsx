import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const InsideEditors = () => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorited(true);
        setShowToast(true);
  };
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title className='text-center text-primary'>Shorshe Ilish</Card.Title>
                        <Card.Text>
                        Ingredients:
                            <ul>
                                <li>4 ilish fish</li>
                                <li>1 onion, sliced</li>
                                <li>1 tbsp. mustard seeds</li>
                                <li>1 tsp. turmeric powder</li>
                                <li>1 tsp. red chili powder</li>
                                <li>2 green chilies, sliced</li>
                                <li>2 tbsp. mustard oil</li>
                            </ul>  
                        </Card.Text>
                        <Card.Text>
                            <span>cooking_method: </span>
                        Marinate the fish with turmeric powder and salt. Heat the mustard oil in a pan and fry the fish until browned. Remove and keep aside. Add the onion and fry until golden brown. Add the mustard seeds and fry for 1 minute. Add the turmeric powder, red chili powder, and salt. Fry for 2 minutes. Add 1 cup of water and bring to a boil. Add the fried fish and green chilies. Cover and cook for 10 minutes on low heat. Serve hot with steamed rice.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-danger" onClick={handleFavoriteClick} disabled={isFavorited}> Favorite </Button>
                        <Toast show={showToast} onClose={() => setShowToast(false)}>
                            <Toast.Header>
                                <strong className="mr-auto">Favorite</strong>
                            </Toast.Header>
                            <Toast.Body>This recipe is now your favorite!</Toast.Body>
                        </Toast>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title className='text-center text-primary'>Chapli Kebab</Card.Title>
                        <Card.Text>
                        Ingredients:
                        <ul>
                                <li>1 lb. ground beef</li>
                                <li>1 onion, sliced</li>
                                <li>1 tbsp. ginger paste</li>
                                <li>1 tbsp. garlic paste</li>
                                <li>1 tsp. cumin powder</li>
                                <li>1 tsp. coriander powder</li>
                                <li>1/2 tsp. garam masala</li>
                            </ul>  
                            
                        </Card.Text>
                        <Card.Text>
                            <span>cooking_method: </span>
                            1. In a large mixing bowl, combine the ground beef, onion, cilantro, ginger paste, garlic paste, cumin powder, coriander powder, red chili powder, garam masala, egg, and salt. Mix well.\n2. Form the mixture into small, thin patties.\n3. Heat the oil in a large skillet over medium heat. Add the patties and cook until browned on both sides and cooked through, about 5-7 minutes per side.\n4. Serve hot with green chutney or ketchup.
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-danger" onClick={handleFavoriteClick} disabled={isFavorited}> Favorite </Button>
                        <Toast show={showToast} onClose={() => setShowToast(false)}>
                            <Toast.Header>
                                <strong className="mr-auto">Favorite</strong>
                            </Toast.Header>
                            <Toast.Body>This recipe is now your favorite!</Toast.Body>
                        </Toast>
                       
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Body>
                        <Card.Title className='text-center text-primary'>Beef Curry</Card.Title>
                        <Card.Text>
                        Ingredients:
                        <ul>
                                <li>1 lb. ground beef</li>
                                <li>1 onion, sliced</li>
                                <li>1 tbsp. ginger paste</li>
                                <li>1 tbsp. garlic paste</li>
                                <li>1 tsp. cumin powder</li>
                                <li>1 tsp. coriander powder</li>
                                <li>1/2 tsp. garam masala</li>
                            </ul>  
                            
                        </Card.Text>
                        <Card.Text>
                            <span>cooking_method: </span>
                            1. In a large mixing bowl, combine the ground beef, onion, cilantro, ginger paste, garlic paste, cumin powder, coriander powder, red chili powder, garam masala, egg, and salt. Mix well.\n2. Form the mixture into small, thin patties.\n3. Heat the oil in a large skillet over medium heat. Add the patties and cook until browned on both sides and cooked through, about 5-7 minutes per side.\n4. Serve hot with green chutney or ketchup.
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-danger" onClick={handleFavoriteClick} disabled={isFavorited}> Favorite </Button>
                        <Toast show={showToast} onClose={() => setShowToast(false)}>
                            <Toast.Header>
                                <strong className="mr-auto">Favorite</strong>
                            </Toast.Header>
                            <Toast.Body>This recipe is now your favorite!</Toast.Body>
                        </Toast>
                       
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default InsideEditors;
