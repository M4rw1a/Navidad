
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'    
import { HashRouter as Router } from "react-router-dom";
import './index.css'
import Padre from './Padre.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Padre></Padre>
  </BrowserRouter>
);

