import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Upload from './Pages/upload';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Home from './components/Home';
import GoToTop from './components/GoToTop';

function App() {
  return (
    <>
    <div className='flex flex-col relative'>
      <BrowserRouter>
      <Navbar />
  
      <Routes>
       <Route path='/' exact element={<Home />}/>
       <Route path='/upload' exact element={<Upload />}/>
       <Route path='/login' exact element={<LoginPage />}/>
      </Routes>

      <GoToTop />
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
