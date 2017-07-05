// Import React libriaries
import React from 'react';
import ReactDOM from 'react-dom';

// Import custom modules
import RegistrationForm from "./components/RegistrationForm.jsx";

// Mount React component
var mountingPoint = document.getElementById("registrationForm");
ReactDOM.render(<RegistrationForm />, mountingPoint);
