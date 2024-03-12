import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home/Home.jsx'
import Apropos from './Pages/Apropos/Apropos.jsx';
import Appartement from './Pages/Appartements/Appartement.jsx';
import MainHeader from './MainHeader.jsx';
import { MainFooter } from './MainFooter.jsx';
import { ErrorDiv } from './Pages/Error/ErrorDiv.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <MainHeader/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/APropos' element={<Apropos></Apropos>}/>
        <Route path='/Appartement/:id' element={<Appartement/>}/>
        <Route path='*' element={<ErrorDiv/>}/>
       

       
      </Routes>
      <MainFooter/>
    </Router>
   
  </React.StrictMode>,

)
