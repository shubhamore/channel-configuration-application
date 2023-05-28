import React, { createContext,useState } from 'react'
import schema from './assets/schema.json'

export const Data = createContext()

export default function Context({children}) {
    const data = schema.channels
    const [reference, setReference] = useState(Array(data.length).fill(' '))
    const [isOpen, setIsOpen] = useState(Array(data.length).fill(false))
    const [backup, setBackup] = useState(Array(data.length).fill(Array(1).fill(" ")))
    const [opt, setOpt] = useState(schema.optionals[0])
    const keys = Object.keys(schema.optionals[0])
    const [value, setValue] = useState([])
//   return <Data.Provider value={{isOpen, setIsOpen}}>{children}</Data.Provider>
  return <Data.Provider value={{data,reference, setReference,isOpen, setIsOpen,backup, setBackup,opt, setOpt,keys,value, setValue}}>{children}</Data.Provider>
}
