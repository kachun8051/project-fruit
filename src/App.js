import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FruitList from './pages/FruitList';
import FruitDetail from './pages/FruitDetail';
import JuiceList from './pages/JuiceList';
import Branch from './pages/Branch';
import fruitJson from './data/fruitlist.json';
import './App.css';

function App() {
  //fruits
  const fruits = fruitJson;
  const [ fruit, setfruit ] = useState(fruits);

  return (
    <div className="App">
      <BrowserRouter>
        <Link className="box" to="/">Home</Link>
        <Link className="box" to="/fruit">Fruit</Link>
        <Link className="box" to="/juice">Juice</Link>
        <Link className="box" to="/branch">Branch</Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fruit" element={<FruitList data={fruit} />} />
          <Route path="/fruitdetail" element={<FruitDetail  datasrc={fruit} />}>
            <Route path=":fid" element={<FruitDetail />} />
          </Route>
          <Route path="/juice" element={<JuiceList />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
