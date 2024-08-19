import { useState, useEffect } from 'react'
import React from 'react'


// import { useContext } from 'react'
// import {CounterContext} from "../context/CounterContext"

// 4- Refatorando com o hook
// Rota dinamica
import { Link } from 'react-router-dom'
import HookUseState from '../components/HookUseState'
import HookUserReducer from '../components/HookUserReducer'
import HookUseEffect from '../components/HookUseEffect'
import {SomeContext} from '../components/HookUseContext'
import { useContext } from 'react'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'

const Home = () => {
  const {contextValue} = useContext(SomeContext)

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [ error, setError] = useState(null)

  // get do banco de dados:

  return (
    <div>
    <h1>Home</h1>
    <HookUseState/>
    <HookUserReducer/>
    <HookUseEffect/>
    <hr />
    <h2>UseContext</h2>
    <p>Valor do contexto : {contextValue}</p>
    <hr />
    <h2>UseRef</h2>
    <HookUseRef/>
    <hr />
    <HookUseCallback/>
    <hr />
    <HookUseMemo/>
    </div>
  )
}

export default Home
