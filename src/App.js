import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './component/Login/Login';
import Dashaborad from './component/Dashborad/Dashaborad';
import Register from './component/Register/Register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Admin' element={<Dashaborad />}></Route>
      </Routes>
    </div>
  );
}

export default App;
