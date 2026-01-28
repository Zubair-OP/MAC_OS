import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WindowContext from './Context/WindowContext';

createRoot(document.getElementById('root')).render(
    <WindowContext>
      <App />
    </WindowContext>
)
