import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App flex flex-col items-center">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
