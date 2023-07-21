import React from 'react';
import { useParams, Link } from "react-router-dom";
//import fruits from './FruitList';
import myJson from './fruitlist.json';

const FruitDetail = (props) => {

  const params = useParams();

  //fruits
  const fruits = myJson;
  const thisFruit = fruits.find(fruit => fruit.name === params.fid);

  return (
    <>
        <h1>FruitDetail: {params.fid}</h1>
        <div className="details">
        <p>Name: {thisFruit.name}</p>
        <p>Price: ${thisFruit.price}</p>
        <p>
            <img src={process.env.PUBLIC_URL + "/images/" + thisFruit.image} alt={thisFruit.image}></img>
        </p>
        <p>        
            <img src={thisFruit.url} alt={thisFruit.image}></img>          
        </p>
        <p>
            Description: {thisFruit.description}
        </p>
            <p><Link to="/">Back to home</Link></p>
        </div>        
    </>
  )
}

export default FruitDetail;