import React from 'react';
import './App.css';
import '../src/components/Header';
import '../src/components/Navbar';
import '../src/components/Profile';


function App(){
  return(
    <div className = 'app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>);
}
 
export default App;