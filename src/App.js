import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import './style.css';
import { UserStorage } from './UserContext';
import User from './Components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';


function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="login/*" element={<Login />} /> 
            <Route path="foto/:id" element={<Photo />} /> 
            <Route path="perfil/:user" element={<UserProfile />} /> 
            <ProtectedRoute path="conta/*" element={<User />} /> 
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
