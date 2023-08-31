/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div>
      <App />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

import Header from "./components/header";
import SectionService from "./components/sectionservice";
import SectionOneHomePage from "./components/sectiononehomepage";
import SectionTwoHomePage from "./components/sectiontwohomepage";
import SectionThereHomePage from "./components/sectiontherehomepage";

export default function Home() {
  return (
    <div>
      <Header />
      <SectionService />
      <SectionOneHomePage />
      <SectionTwoHomePage />
      <SectionThereHomePage />
    </div>
  );
}
