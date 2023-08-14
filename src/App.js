import logo from './logo.svg';
import './App.css';
import React from 'react'
import TextField from '@mui/material/TextField';
class RenderFunction extends React.Component {
    constructor() {
        super();
        this.state = {
            answer: "Answer"
        }
        this.getSum = this.getSum.bind(this)
    }
 
    getSum() {
        let x = parseInt(document
            .getElementById("elementA").value);
 
        let y = parseInt(document
            .getElementById("elementB").value);
 
        console.log(x + y)
        this.setState({
            answer: x + y
        })
    }
 
    render() {
        return (
            <center>
                <div>
                    <h1>Welcome to my app</h1>
                    <MyButton />
                </div>
                <div className="App"> 
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        Learn React
                        </a>
                    </header>
                </div>
                <h1>
                    We will be calling sum
                    function from render
                </h1>
                <div>
                    <TextField id="elementA"
                        variant="outlined" />  
 
                    <TextField id="elementB"
                        variant="outlined" />
                    <br></br>
                    <br></br>
 
                    <button onClick={this.getSum}
                        className="btn btn-primary">
                        Get Sum
                    </button>
                    <br></br>
                    <br></br>
                    <TextField id="elementC" disabled
                        variant="outlined"
                        value={this.state.answer} />
                </div>
            </center>
        )
    }
}

function MyButton() {
    return (
      <button>I'm a button</button>
    );
}

export default function App() {
    return (
        <div className="App">
            <RenderFunction />
        </div>
    );
}

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      MyButton();
    </div>
  );
}

function MyButton() {
  return (
    <div className="App-button">
        <button id ="btn">I'm a button</button>
    </div>
  );
}

export default App;
*/