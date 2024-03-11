import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Home/Home.jsx'
import Apropos from './Apropos.jsx';
import Appartement from './Appartement.jsx';
import MainHeader from './MainHeader.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <MainHeader/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/APropos' element={<Apropos></Apropos>}/>
        <Route path='/Appartement' element={<Appartement/>}/>
       

       
      </Routes>
    </Router>
   
  </React.StrictMode>,

)
