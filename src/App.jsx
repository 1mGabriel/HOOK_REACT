import { useState } from 'react'
import{Outlet, Link} from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contatos</Link>
      </li>
    </ul>
    <Outlet/>
    </>
  )
}

export default App
