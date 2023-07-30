import React, { createContext , useReducer } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Errorpage from "./components/Errorpage";
import Logout from './components/Logout';

import { initialState , reducer } from '../src/reducer/UseReducer'; 

// 1. Context API
export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />

      <Route path="*" element={<Errorpage />} />
      {/* For showing the page when user visits any other web page */}
    </Routes>
  )
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState); // Both parameters are defined in UseReducer.js

  return (

    <>
    <UserContext.Provider value={{state, dispatch}}>
       
      <Navbar />

      <Routing />

    </UserContext.Provider>
    </>
  );
};

export default App;
