import React from 'react';
import { Link } from 'react-router-dom';

const FruitList = (props) => {
  // pass the list from App.js to FruitList.js
  //const fruits = props.data;
  console.table(props.data);

  return (
    <>
      <h1>FruitList</h1>
      <div>
        {props.data.map((data)=>(
          <div className="card" key={data.id} >
            <p>{data.name}</p>            
            <p>
              <Link to={"/fruitdetail/" + data.id}>
                <img src={data.url} alt={data.image}></img>
              </Link>  
            </p>            
          </div>))}
      </div>
    </>
    
  )
}

export default FruitList;