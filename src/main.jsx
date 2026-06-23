import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

const root = createRoot (document.getElementById('root'));
root.render(
  <div>
    <button onClick= {() => console.log('Click')}>ClickMe</button>
  </div>
);
