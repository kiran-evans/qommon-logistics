import './App.css';
import Home from "./components/home/Home";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DriverPage from './components/driver-page/DriverPage';
import ManagerPage from './components/manager-page/ManagerPage';

function App() {

  const [currentUser, setCurrentUser] = useState('');

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home setCurrentUser={setCurrentUser} />} />
        <Route exact path="/driver" element={<DriverPage currentUser={currentUser} />} />
        <Route exact path="/manager" element={<ManagerPage currentUser={currentUser} />} />
      </Routes>      
    </div>
    </BrowserRouter>
  );
}

export default App;
