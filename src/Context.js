import React, { createContext, useState } from 'react'
import schema from './assets/schema.json'

export const Data = createContext()

export default function Context({ children }) {
    function getRef(){
        let r=localStorage.getItem('reference')
        if(r) return JSON.parse(r)
        return Array(data.length).fill(' ')
    }
    function getIsOpen(){
        let o=localStorage.getItem('isOpen')
        if(o) return JSON.parse(o)
        return Array(data.length).fill(false)
    }
    function getBackup(){
        let b=localStorage.getItem('backup')
        if(b) return JSON.parse(b)
        return Array(data.length).fill(Array(1).fill(" "))
    }
    function getValue(){
        let v=localStorage.getItem('value')
        if(v) return JSON.parse(v)
        let temp = []
        keys.forEach((key, index) => {
            temp.push(opt[key])
        });
        return [...temp]
    }

    const data = schema.channels
    const opt =schema.optionals[0]
    const [reference, setReference] = useState(getRef)
    const [isOpen, setIsOpen] = useState(getIsOpen)
    const [backup, setBackup] = useState(getBackup)
    const keys = Object.keys(schema.optionals[0])
    const [value, setValue] = useState(getValue)

    return (
        <Data.Provider value={{ data, reference, setReference, isOpen, setIsOpen, backup, setBackup, opt, keys, value, setValue }}>
            {children}
        </Data.Provider>
    )
}
