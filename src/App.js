import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Parse from 'parse/dist/parse.min.js';
import { PARSE_APPLICATION_ID, PARSE_HOST_URL, PARSE_JAVASCRIPT_KEY } from './data/keys';
import HomePage from './pages/HomePage';
import FruitList from './pages/FruitList';
import FruitDetail from './pages/FruitDetail';
import JuiceList from './pages/JuiceList';
import Branch from './pages/Branch';
import './App.css';

export const Context = React.createContext();
// reference: https://youtu.be/0jwnn9sKICg
// npm install parse <-- install parse library
// Your Parse initialization configuration goes here
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  
  const [ fruit, setfruit ] = useState([]);  

  const fetchAllFruits = async() => {
    if (fruit.length > 0) {
      return;
    } 
    else {
      const query = new Parse.Query('fruitlist');
      // find all rows of fruitlist
      const lstQueried = await query.find();
      // for debug
      lstQueried.forEach(
        (item) => { console.log(item.attributes.name) }
      );
      let lstTmp = [];      
      let result = new Promise(
        (resolve, reject) => {
          lstQueried.forEach(
            (item, idx) => {
              let obj = {
                'id': item.attributes.seq,
                'name': item.attributes.name,
                'price': item.attributes.price,
                'image': item.attributes.image,
                'description': item.attributes.description,
                'url': item.attributes.url
              }
              lstTmp.push(obj);
              if (idx === lstQueried.length-1) {
                resolve();
              }
            }
          ); 
        }
      );
      result.then( 
        () => { setfruit(lstTmp); }
      );      
    }        
  }

  // fetch data one time when rendering
  useEffect(
    () => {
      //  fetch("https://hh68057a.github.io/demo/product_demo1.json")
      //    .then((Response) => Response.json())
      //    .then((data) => setfruit(data));            
      fetchAllFruits()
    }, []
  );

  return (
    <Context.Provider value={[ fruit, setfruit ]}>
      <div className="App">
      <BrowserRouter>
        <Link className="box" to="/">Home</Link>
        <Link className="box" to="/fruit">Fruit</Link>
        <Link className="box" to="/juice">Juice</Link>
        <Link className="box" to="/branch">Branch</Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fruit" element={<FruitList />} />
          <Route path="/fruitdetail" element={<FruitDetail />}>
            <Route path=":fid" element={<FruitDetail />} />
          </Route>
          <Route path="/juice" element={<JuiceList />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
    </Context.Provider>    
  );
}

export default App;
