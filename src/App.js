import React from 'react'
import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
     
     </Routes>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
