import { useState, useEffect } from "react"
import { useContext } from "react"
import { ContextForCounter } from "../../context/CounterContext"


import "./Surprise.css"

export const Surprise = () => {

    const { counter } = useContext(ContextForCounter)
    const [lettersSize, setLettersSize] = useState(20)

    const letsWordTogether = () => {
        setLettersSize(lettersSize + 40)

    }

    return (
        <>
            {
                counter > 2 && <div
                    style={{ textAlign: 'center' }}
                    class="fade-in-text">
                    <p>Clique na Frase!</p>
                    <p
                        style={{ fontSize: `${lettersSize}px` }}
                        onClick={letsWordTogether}>Vamos trabalhar juntos!</p>
                    <p onClick={letsWordTogether}>Pelo mundo com as abelhas!</p>
                    <button onClick={() => setLettersSize(20)}>Reset Joke!</button>
                </div>
            }
        </>
    )
}
