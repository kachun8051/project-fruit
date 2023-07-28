import React from 'react';
import { useParams, Link } from "react-router-dom";

const FruitDetail = (props) => {

  const params = useParams();
  // pass the list from App.js to FruitDetail.js
  // const fruits = props.datasrc;
  // const thisFruit = fruits.find(fruit => fruit.id === parseInt(params.fid));
  const thisFruit2 = props.datasrc[parseInt(params.fid)-1];
  //const arr = props.data;
  if (thisFruit2 === undefined) {
    return (<h1>FruitDetail: {params.fid}</h1>);
  } 
  else {
    return (
      <>
          <h1>FruitDetail: {params.fid}</h1>
          <div className="details">
            <p>Name: {thisFruit2.name}</p>
            <p>Price: ${thisFruit2.price}</p>
            <p>
              <img src={process.env.PUBLIC_URL + "/images/" + thisFruit2.image} alt={thisFruit2.image}></img>
            </p>
            <p><img src={thisFruit2.url} alt={thisFruit2.image}></img></p>
            <p>Description: {thisFruit2.description}</p>
            <div className='rowC'>
              <p style={{marginLeft: 10, marginRight: 10}}><Link to="/fruit">Back to Fruit List</Link></p>
              <p style={{marginLeft: 10, marginRight: 10}}><Link to="/">Back to home</Link></p>
            </div>
          </div>        
      </>
    )
  }
}

export default FruitDetail;