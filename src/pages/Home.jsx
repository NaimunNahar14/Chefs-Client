import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import Details from './Details';

const Home = () => {

  const [lists, setLists] = useState([]);

  useEffect(() =>{
    fetch('https://the-recipe-server-naimunnahar14.vercel.app/recipes')
    .then((res) => res.json())
    .then((data) => setLists(data)); 
  }, []);

    return (
        <div>
          {
           lists.map(list =>
              <Details
              key={list._id}
              list = {list}

              
              
              ></Details>
             
              
              
              )
          }

           
        </div>
    );
};

export default Home;