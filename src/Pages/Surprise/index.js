import { useState } from "react"
import { useContext } from "react"
import { ContextForCounter } from "../../context/CounterContext"
import { Button } from "../../components/button/Button"

import wallpaper from "../../assets/background/backbee.jpg"
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
        } else if (lettersSize === 260) {
            return 'coral'
        } else if (lettersSize === 300) {
            return 'lawngreen'
        } else if (lettersSize === 340) {
            return 'orangered'
        } else if (lettersSize === 380) {
            return setLettersSize(lettersSize - 280)
        }
    }

    return (
        <>
            {
                counter > 1 && <div
                    className="fade-in-text" style={{
                        backgroundImage: `url(${wallpaper})`,
                        backgroundPosition: "center",
                        backgroundSize: '100% 100%',
                        height: '100vh',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <div className="backSentence"
                        style={{ backgroundColor: 'blanchedalmond' }}
                    >

                        <p>Click on the sentence below!</p>

                        <p

                            style={{
                                fontSize: `${lettersSize}px`,
                                color: byColors(),
                                fontWeight: 'bold',
                                marginBottom: 0
                            }}
                            className="workTogether"
                            onClick={letsWordTogether}>Let's work together!</p>

                        {lettersSize > 100 && <Button text='Reset joke!' functions={() => setLettersSize(20)} />
                        }
                        <p
                            style={{ fontSize: '30px', fontWeight: 'bold' }}
                            onClick={letsWordTogether}>For the world! With the bees!</p>


                    </div>

                </div>
            }
        </>
    )
}

