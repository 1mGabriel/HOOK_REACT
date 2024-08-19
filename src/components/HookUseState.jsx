import React from 'react'
import { useState } from 'react'
const HookUseState = () => {
  const [name, setName] = useState("Gabriel")
  
    return (
    <div>
      <h1>UseState</h1>
      <input type="text" placeholder="Mudar o nome"onChange={(e)=>setName(e.target.value)} />
      <p>O nome do state é {name}</p>
    <hr />
    </div>
  )
}

export default HookUseState
