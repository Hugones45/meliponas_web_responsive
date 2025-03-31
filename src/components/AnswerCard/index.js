import "./AnswerCard.css"
import { GiBee } from "react-icons/gi"
import { useState, useEffect } from "react"


export const AnswerCard = () => {

    const url = "https://json-bee.vercel.app/Especies"


    const beeList = ["JATAI", "IRAI", "TATAIRA", "IRATIM", "BORA", "ARAPUA", "MIRIM"]

    const [getBeeUrl, setGetBeeUrl] = useState([])

    const [showDisplayAnswers, setShowDisplayAnswers] = useState(false)

    const [showTheBees, setShowTheBees] = useState(false)

    const showTheAnswersBees = () => {
        setShowDisplayAnswers(!showDisplayAnswers)
    }

    const returnBooleans = () => {
        setShowDisplayAnswers(!showDisplayAnswers)
        if (showTheBees) {
            setShowTheBees(!showTheBees)
        }
    }

    const getBees = async () => {
        const fetchBees = await fetch(url)
        const respBees = await fetchBees.json()

        setGetBeeUrl(respBees)
    }

    useEffect(() => {
        getBees()
    }, [])

    const getBeeColor = (beeName) => {
        const findTheColor = getBeeUrl.find((item) => item.name.toUpperCase() === beeName)['color']

        return findTheColor ? findTheColor : "black";
    };


    return (
        <div >
            {showDisplayAnswers && <div className="popupWrapperAnswer">
                <div className="popupAnswer">
                    <p className="closePopss" onClick={() => returnBooleans()} >X</p>
                    <p className="warningss">Are you sure you want to see the answers?</p>

                    {!showTheBees && < div className="answerButtonsBeees">
                        <button className="buttonsForBeeChange" onClick={() => setShowTheBees(!showTheBees)}>Yes</button>
                        <button className="buttonsForBeeChange" onClick={() => showTheAnswersBees()}>No</button>
                    </div>}

                    {showTheBees && <>{beeList.map((item, key) =>
                        <p style={{ color: `${getBeeColor(item)}` }} key={key} className="allTheBeees">{item}</p>
                    )}</>}

                </div>
            </div>}

            <GiBee
                onClick={() => showTheAnswersBees()} className="theGiantBee" size={60} />
        </div >
    )
}
