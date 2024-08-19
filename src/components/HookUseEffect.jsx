import React from 'react'
import { useEffect, useState } from 'react'
const HookUseEffect = () => {
  
//   UseEfecct sem dependecias

useEffect(()=>{
    console.log("estou sendo executado")
})
 const [number, setNumber] = useState(1)
  
  const changeSomething = (e) =>{
    setNumber(number +1)
}

// Array  dependencias vazio
useEffect(()=>{
    console.log("Serei executado apenas uma vex")
}, [])

// Array de dependencias com valores
const [anotherNumber, setAnotherNumber] = useState(0)
useEffect(()=>{
    if(anotherNumber > 0){
        console.log("Sou executado quando muda o anotherNUmber")
    }
},[anotherNumber])

// 4- CleanUP useEffect:
    // useEffect(()=>{
    //     const timer = setTimeout(()=>{
    //         console.log("Hello word")
    //         setAnotherNumber(anotherNumber +1)
    //     }, 2000)
    //     return () => clearTimeout(timer)
    // }, [anotherNumber])

    return (
    <div>
    <hr />
      <h2>UseEffect</h2>
        <p>Número: {number}</p>
        <button onClick={changeSomething}>+</button>
        <button onClick={(e) => setAnotherNumber(anotherNumber + 1)}>setAnotherNumber</button>
    <hr />
    </div>
  )

}

export default HookUseEffect
