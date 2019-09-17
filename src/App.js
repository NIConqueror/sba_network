import React from 'react';
import './App.css';
import './components/Header.css'
import './components/Navbar.css'
import './components/Profile.css'
import Header from '../src/components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


function App(){
  return(
    <div className = 'app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>);
}
 
export default App;