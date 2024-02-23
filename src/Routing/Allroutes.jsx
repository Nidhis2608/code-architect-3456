import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Loginsignup from '../Pages/signup';
import Login from '../Pages/Login';
const Allroutes = () => {



    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Loginsignup />} />
      <Route path="/login" element={<Login />} />
      </Routes>
  );
};

export default Allroutes;