import React from 'react';
import Form from './Components/Form';
import './App.css';
import ReturnToTop from './Components/ReturnToTop';

function App() {
  return (
    <div className = "wrapper">
      <Form className = "form"/>
      <ReturnToTop />
    </div>
  );
}

export default App;