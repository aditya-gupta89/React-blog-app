import {BrowserRouter} from "react-router-dom"
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Fragment } from 'react';
import Header from './components/layout/Header';
import Index from './components/pages/Index'
import About from "./components/pages/About";
import Contact from './components/pages/Contact';
import AuthForm from "./components/Auth/AuthForm";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<AuthForm/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
