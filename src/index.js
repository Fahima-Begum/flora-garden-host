import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlantDetailsForm from './Components/PlantDetailsForm';
import PlantsDisplay from './Components/PlantsDisplay';
import Login from './Components/Login';
import Home from './Components/Home'
import Contact from './Components/Contact'
import Signuppage from './Components/Signuppage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route path='/' element={<Navbar />}></Route> */}
        <Route path='https://stellar-blini-f00d5b.netlify.app' element={<Home />}></Route>
        <Route path="https://stellar-blini-f00d5b.netlify.app/PlantsDisplay" element={<PlantsDisplay />}></Route>
        <Route path="https://stellar-blini-f00d5b.netlify.app/Login" element={<Login />}></Route>
        <Route path="https://stellar-blini-f00d5b.netlify.app/SignUp" element={<Signuppage />}></Route>
        <Route path="https://stellar-blini-f00d5b.netlify.app/Contact" element={<Contact />}></Route>
        <Route path="https://stellar-blini-f00d5b.netlify.app/PlantDetailsForm" element={<PlantDetailsForm />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();