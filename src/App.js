import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import MyNavbar from './Components/Navbars/Headers';
import Create from './Components/Create';
import ViewItem from './Components/ViewItems';
import ItemForm from './Components/itemForm';
import Footer from './Components/Footer/footer';
import Success from './Components/Success';

function App() {
  return (
    <Router>
      <MyNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/edit/:id" element={<ItemForm />} />
        <Route path="/viewItems" element={<ViewItem/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
