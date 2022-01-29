import React from 'react'
import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Header from './components/content/Header'
import Home from './components/content/Home'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AboutUs from './components/content/AboutUs'
import './assets/style.css'
import Pricing from './components/content/Pricing'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<AboutUs />}/>
          <Route path="pricing" element={<Pricing />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
