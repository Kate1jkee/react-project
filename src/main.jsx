import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Layout from './components/layout/component'

const root = createRoot (document.getElementById('root'));
root.render(
 <StrictMode>
  <Layout>
   <App />
  </Layout>
 </StrictMode>
);
