import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FruitList from './pages/FruitList';
import FruitDetail from './pages/FruitDetail';
import JuiceList from './pages/JuiceList';
import Branch from './pages/Branch';
import './App.css';
import ClsFetchData from './pages/ClsFetchData';

export const Context = React.createContext();

function App() {
  
  const [ fruit, setfruit ] = useState([]);
  const objFetchData = new ClsFetchData();
  
  // fetch data one time when rendering
  useEffect(
    () => {
      const fetchedData = async() => {
        const arr = await objFetchData.fetchFromB4A();
        console.log("useEffect: " + Array.isArray(arr));
        if (Array.isArray(arr)) {
          setfruit(arr);
        }
        else {
          console.log("Not an Array!");
          console.log(arr);
        }        
      }   
      fetchedData().catch(console.error);         
    }, []
  );

  return(
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
