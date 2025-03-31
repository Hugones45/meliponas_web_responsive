import { useState } from "react"
import { BeesButtons } from "../../components/BeesButtons"
import { UpValue } from "../../components/UpValue"
import { CardsForBees } from "../../components/CardForBees"
import { useFetch } from "../../hooks/useFetch"
import { BeesImages } from "../../components/BeesImages"
import { Button } from "../../components/button/Button"

import "./Home.css"

import { useCounterValue } from "../../context/CounterContext"

export const Home = () => {

    const url = "https://json-bee.vercel.app/Especies"

    const [beeWords, setBeeWords] = useState('')
    const [selectBee, setSelectBee] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [wrongName, setWrongName] = useState('')

    const [answerBees, setAnswerBees] = useState(false)
    const [phrase, setPhrase] = useState('')
    const [number, setNumber] = useState(0)

    const { dataValue: bees } = useFetch(url)
    const { counter, setCounter } = useCounterValue()

    const getMeliWordOne = (word) => {
        setBeeWords(beeWords + word)
        setWrongName('')
    }

    const getMeliWordTwo = (word) => {
        setBeeWords(beeWords + word)
        setWrongName('')
    }

    const removeWord = (noWords) => {
        setBeeWords(noWords)
        setWrongName(noWords)
    }

    const eraseNameAfterCard = () => {
        setToggle(!toggle)
        setBeeWords('')
        setWrongName('')
    }

    const handleButton = (e) => {
        e.preventDefault()

        const findBee = bees.find((item) => item.name === beeWords)

        if (findBee) {
            setToggle(!toggle)
            setSelectBee(findBee)
            setCounter(counter + 1)

            return
        } else {
            setWrongName('Wrong Name!')
        }
    }

    const findColor = (theName) => {
        const findBeeColor = bees.find((item) => item.name === theName)['color']
        return findBeeColor
    }

    const answerFunction = () => {
        setNumber(number + 1)
        if (number === 0) {
            setPhrase('Are you sure you want to see the answers?')
        } else if (number > 0) {
            setPhrase('')
            setAnswerBees(!answerBees)
        }

    }

    return (

        <div className="homeContainer">
            <BeesButtons
                getMeliWordOne={getMeliWordOne}
                getMeliWordTwo={getMeliWordTwo}
                words={beeWords}
                wrongName={wrongName}
            />

            <div className="sendErase">
                <Button functions={handleButton} text='Send' />
                <UpValue cleanValue={removeWord} />
            </div>

            {toggle && selectBee &&
                <>
                    <CardsForBees
                        toggle={() => eraseNameAfterCard()}
                        img={<BeesImages melipons={selectBee.name} />}
                        color={findColor(selectBee.name)}
                        name={selectBee.name}
                        about={selectBee.about}
                    />
                </>}

        </div >
    );
}
