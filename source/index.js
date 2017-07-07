// Import React libriaries
import React from 'react';
import ReactDOM from 'react-dom';

// Import custom modules
import App from "./components/App.jsx";
import './app.scss';

// Mount React component
var mountingPoint = document.getElementById("app");
ReactDOM.render(<App />, mountingPoint);
