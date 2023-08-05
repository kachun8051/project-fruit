import React, { useContext } from 'react';
import { Context } from '../App';
import { Link } from 'react-router-dom';

const FruitList = () => {
  // pass the list from App.js to FruitList.js
  //const fruits = props.data;  
  const [fruit, setFruit] = useContext(Context);
  console.table(fruit);
  return (
    <>
      <h1>FruitList</h1>
      <div>
        {fruit.map((data)=>(
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