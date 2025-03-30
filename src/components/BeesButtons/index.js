import "./BeesButtons.css"
import { AiOutlineArrowDown } from "react-icons/ai"
import { GiBee } from "react-icons/gi"


export const BeesButtons = ({ getMeliWordOne, getMeliWordTwo, words, wrongName }) => {

    const meliponas = ["TIM", "MI", "A", "TA", "RA", "JA", "BO", "I", "PU", "RIM"]

    const meliOne = meliponas.slice(0, 5)
    const meliTwo = meliponas.slice(5,)

    const answerFunction = () => {
        // setNumber(number + 1)
        // if (number === 0) {
        //     setPhrase('Are you sure you want to see the answers?')
        // } else if (number > 0) {
        //     setPhrase('')
        //     setAnswerBees(!answerBees)
        // }

    }

    return (
        <div className="uperContainer">
            <div className="container">
                <div className="alinha">
                    {meliOne.map((item, index) =>

                        <button
                            className="buttonsForBeeWords"
                            onClick={() => getMeliWordOne(item)}
                            key={index}>{item}</button>
                    )}</div>

                <div className="letter">

                    <p className={`forTheWords ${wrongName ? "text-red" : ""}`}>{words}</p>

                    <div className="hintBee">
                        {!wrongName ? <GiBee className="theLittleBee" size={60} /> :

                            <p className="forWrongNames">{wrongName}</p>}


                    </div>

                </div>
                <div className="alinha">
                    {meliTwo.map((item, index) =>

                        <button
                            className="buttonsForBeeWords "
                            onClick={() => getMeliWordTwo(item)}
                            key={index}>{item}</button>
                    )}</div>
            </div>
        </div>

    )
}
