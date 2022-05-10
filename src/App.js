import React, {useContext} from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from './Pages/HomePage';
import AdminPage from './Pages/AdminPage';
import BookPage from './Pages/BookPage';
import { EthersContext } from './Context/EthersContext';
import Loader from './components/Loader/Loader';
const App = () =>{ 
  const {isLoading} = useContext(EthersContext)
  return(
  
  <div className="App">{
    <Routes>
    <Route exact path='/' element={<HomePage/>}></Route>
    <Route path='/admin'  element={<AdminPage/>}></Route>
    <Route path='/book'  element={<BookPage/>}></Route>
  </Routes>
  }
  
  </div>
)};

export default App;
