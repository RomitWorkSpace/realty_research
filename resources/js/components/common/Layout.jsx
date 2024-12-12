import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from '../home/HomePage';

function Layout() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" exact element={<HomePage /> } />
    </Routes>
    <Footer />
    </>
  );
}

export default Layout;