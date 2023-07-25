
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
  return (
    <div className="App">
      <BrowserRouter>
        <Link className="box" to="/">Home</Link>
        <Link className="box" to="/fruit">Fruit</Link>
        <Link className="box" to="/juice">Juice</Link>
        <Link className="box" to="/branch">Branch</Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fruit" element={<FruitList datasrc={fruits} />} />
          <Route path="/fruitdetail" element={<FruitDetail  datasrc={fruits} />}>
            <Route path=":fid" element={<FruitDetail  datasrc={fruits} />} />
          </Route>
          <Route path="/juice" element={<JuiceList />} />
          <Route path="/branch" element={<Branch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
