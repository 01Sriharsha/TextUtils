import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import AboutUs from './Components/AboutUs';
import React, { useState } from 'react'
import Time from './Components/Time';



function App() {

  const [mode, setMode] = useState('light');

  const lightModeNavbar = {
    backgroundColor : "green"
  }

  let toggleMode = () => {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
      {/* <Navbar/> */}
      <div className="container my-3">
        <Time/>
        <TextForm heading="Enter the text to analyze" mode={mode}/>
        {/* <AboutUs/> */}
      </div>
    </>
  );
}

export default App;
