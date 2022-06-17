import logo from './logo.svg';
import './App.css';
import Home from './home';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Detail from './detail';

function App() {
  return (
    <div className="App">
      <Link to="/">check</Link>
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path=":id" element={<Detail />}/>
      </Routes>
    </div>
  );
}

export default App;
