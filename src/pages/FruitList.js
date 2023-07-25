import React from 'react';
import { Link } from 'react-router-dom';

const FruitList = (props) => {
  // pass the list from App.js to FruitList.js
  const fruits = props.datasrc;

  return (
    <>
      <h1>FruitList</h1>
      <div>
        {fruits.map((data)=>(
          <div className="card">
            <p>{data.name}</p>            
            <p>
              <Link to={"/fruitdetail/" + data.name}>
                <img src={data.url} alt={data.image}></img>
              </Link>  
            </p>            
          </div>))}
      </div>
    </>
    
  )
}

export default FruitList