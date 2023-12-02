import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Tabela from './components/Tabela/tabela.jsx'
import Calculadora from './components/Calculadora/calculadora.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Calculadora/>
      <Tabela/>
    </>
  </React.StrictMode>,
)
