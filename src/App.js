import React from 'react';
import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'

import Routes from './routes'

import './global.css'

import Main from './pages/Main'
import Header from './components/Header'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}
