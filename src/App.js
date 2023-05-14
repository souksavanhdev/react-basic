import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './page/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './route/Router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
  <>
  <Router />
  <ToastContainer />
  </>
  )
}

export default App;
