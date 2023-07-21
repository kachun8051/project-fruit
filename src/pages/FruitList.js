import React from 'react';
import myJson from './fruitlist.json';

const FruitList = () => {

  const fruits = myJson;

  return (
    <>
      <h1>FruitList</h1>
      <div>
        {fruits.map((data)=>(
          <div className="card">
            <p>{data.name} / {data.price}</p>
            <p>{data.image}</p>
            <p>
              <img src={process.env.PUBLIC_URL + "/images/" + data.image} alt={data.image}></img>
            </p>
            <p>
              <img src={data.url} alt={data.image}></img>
            </p>
          </div>))}
      </div>
    </>
    
  )
}

export default FruitList