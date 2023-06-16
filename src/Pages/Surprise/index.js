import { useState } from "react"
import { useContext } from "react"
import { ContextForCounter } from "../../context/CounterContext"
import { Button } from "../../components/button/Button"


import "./Surprise.css"

export const Surprise = () => {

    const { counter } = useContext(ContextForCounter)
    const [lettersSize, setLettersSize] = useState(20)

    const letsWordTogether = () => {
        setLettersSize(lettersSize + 40)
    }

    const byColors = () => {
        if (lettersSize === 60) {
            return 'purple'
        } else if (lettersSize === 100) {
            return 'red'
        } else if (lettersSize === 140) {
            return 'green'
        } else if (lettersSize === 180) {
            return 'blue'
        } else if (lettersSize === 180) {
            return 'orange'
        } else if (lettersSize === 220) {
            return 'aqua'
        }
    }

    return (
        <>
            {
                counter > 2 && <div
                    className="fade-in-text">
                    <p>Clique na Frase!</p>
                    <p
                        style={{ fontSize: `${lettersSize}px`, color: byColors() }}
                        onClick={letsWordTogether}>Vamos trabalhar juntos!</p>
                    <p onClick={letsWordTogether}>Pelo mundo! Com as abelhas!</p>


                    {lettersSize > 100 && 100 && <Button text='Reset joke!' functions={() => setLettersSize(20)} />
                    }
                </div>
            }
        </>
    )
}
