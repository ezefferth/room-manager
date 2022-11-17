import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import SalasProvider from './components/data/salas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SalasProvider>
      <App />
    </SalasProvider>

  </React.StrictMode>
)
