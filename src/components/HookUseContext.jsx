import React from 'react'
import { createContext } from 'react'

export const SomeContext = createContext()

const HookUseContext = ({children}) => {
  
    const contextValue = "Teste do Contexto"
  
    return (
    <div>
      <SomeContext.Provider value={{contextValue}}>
        {children}
      </SomeContext.Provider>
    </div>
  )
}

export default HookUseContext
