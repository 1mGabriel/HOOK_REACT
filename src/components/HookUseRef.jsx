import React from 'react'
import { useEffect, useState, useRef } from 'react'
const HookUseRef = () => {

    // 1- useRef
    const numberRef = useRef(0)
    const [counter,setCounter] = useState(0)
    const [counterb,setCounterB] = useState(0)
  
// 2- UseRef e DOM
    const inputRef = useRef()
    const [text, setText] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        setText("")

        inputRef.current.focus()
    }

    return (
    <div>
      <h1>HookUseRef</h1>
      <p>O componente renderizou:{numberRef.current} </p>
      <p>Counter 1: {counter}</p>
      <button type="button" onClick={()=>setCounter(counter + 1)}>Contador A</button>
      <p>Counter B: {counterb}</p>
      <button type="button" onClick={()=>setCounterB(counterb + 1)}>Contador B</button>
    
        {/* 2 - useRef e DOM */}
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e) =>setText(e.target.value)} />
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default HookUseRef
