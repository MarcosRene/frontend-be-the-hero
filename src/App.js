import React from 'react';
import { ToastContainer } from 'react-toastify';

import './global.css';
import 'react-toastify/dist/ReactToastify.css';

import Router from './routes';

function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose={2100} />
    </>
  );
}

export default App;
