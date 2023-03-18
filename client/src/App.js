import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import HomePage from './components/HomePage';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignInForm />} />
        <Route path="/signUp" element={<SignUpForm />} />
      </Routes>
    </div>
  )
}

export default App; 