import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { UserStorage } from './UserContext';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/Helper/NotFound';
import './style.css';


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
            <Route path="*" element={<NotFound />} /> 
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
