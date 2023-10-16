import logo from "./logo.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import SectionService from "./components/Sectionservice.js"
import NavBar from "./components/Navbar.js"


// https://react.dev/reference/react/Component
// We recommend defining components as functions instead of classes.

export default function App() {
  const [answer, setAnswer] = useState("answer");

  function getSum() {
    let x = parseInt(document.getElementById("elementA").value);
    let y = parseInt(document.getElementById("elementB").value);

    let sum = x + y;
    console.log(sum);
    setAnswer(sum);
  }

  return (
    <center>
      <div>
        <NavBar/>
      </div>
    </center>
  );
}




/*
<div>
    <SectionService/>
</div>
<div className="App"> 
      <LogoWithText />
</div>
<div>
  <MyButton />
</div>
<div>
  <SumClass answer={answer} getSum={getSum} />
</div>

*/

function SumClass(props) {
  return (
    <header>
      <h1>We will be calling the sum function from render</h1>
      <TextField id='elementA' variant='outlined' />
      <TextField id='elementB' variant='outlined' />
      <br />
      <br />

      <button onClick={props.getSum} className='btn btn-primary'>
        Get Sum
      </button>
      <br />
      <br />
      <TextField
        id='elementC'
        disabled
        variant='outlined'
        value={props.answer}
      />
    </header>
  );
}

function LogoWithText() {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </header>
  );
}

function MyButton() {
  return (
    <header>
      <h1>Welcome to my app</h1>
      <button>I'm a button</button>
    </header>
  );
}
