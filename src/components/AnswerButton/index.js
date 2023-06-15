import { useState } from "react"
import { Button } from "../button/Button"
import "./AnswerButton.css"

export const AnswerButton = ({ beeToggleValue, changeToggleBee }) => {

    const [toggle, setToggle] = useState(false)
    const [number, setNumber] = useState(0)
    const [phrase, setPhrase] = useState('')

    const beeList = ["JATAI", "IRAI", "TATAIRA", "IRATIM", "BORA", "ARAPUA", "MIRIM"]

    const AnswersCondition = () => {

        setNumber(number + 1)
        if (number === 0) {
            setPhrase('Tem certeza que deseja ver as respostas? Se pesquisar por meliponas na internet certamente vai achar algum nome!')
        } else if (number === 1) {
            setPhrase('Pense bem!')
        } else if (number === 2) {
            setPhrase('Depois não vá se queixar a ninguém!')
        } else if (number > 2) {
            setPhrase('')
            setToggle(!toggle)
        }
    }

    return (
        <div className="toEraseValue">
            <div className="above">
                <input
                    style={{ cursor: 'pointer' }}
                    onClick={changeToggleBee}
                    type="checkbox" />
                {!beeToggleValue ? <button className="hideButton" disabled>Answers</button> :
                    <Button disabled={!beeToggleValue} functions={() => AnswersCondition()} text='Answers' />
                }
            </div>

            <div>
                <h2 className="toEraseValuePP ">{phrase}</h2>
                {toggle && beeList.map((item, index) =>
                    <p

                        key={index}>{item}</p>)}
            </div>
        </div>
    )
}
