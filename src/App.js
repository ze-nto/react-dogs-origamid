import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import './style.css';
import { UserStorage } from './UserContext';


function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/login/*" element={<Login />} /> 
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
