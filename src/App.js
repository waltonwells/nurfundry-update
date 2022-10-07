import React from 'react'
import { Home } from './Home';
import Brandpage from './Brandpage'
import Creatorpage from './Creatorpage';
import { Route, Routes } from "react-router-dom"
import './App.css';
import Fanspage from './Fanspage';

const App = () => {
  return (
    <div className='App'>
          <Routes>
          <Route path="/" element={ <Home/> } />
        <Route path="fanspage" element={ <Fanspage/> } />
        <Route path="creatorpage" element={ <Creatorpage/> } />
         <Route path="brandpage" element={ <Brandpage/> } /> 
          </Routes>
    </div>
  )
}

export default App