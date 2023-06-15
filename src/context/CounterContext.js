import { useState, createContext, useContext } from "react"

export const ContextForCounter = createContext()

export const CounterContext = ({ children }) => {

    const [counter, setCounter] = useState(0)

    return (
        <ContextForCounter.Provider value={{ counter, setCounter }}>
            {children}

        </ContextForCounter.Provider>
    )
}

export function useCounterValue() {
    return useContext(ContextForCounter)
}