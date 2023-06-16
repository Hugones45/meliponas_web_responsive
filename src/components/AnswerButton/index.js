import "./AnswerButton.css"

export const AnswerButton = ({ propToggle, phrase, number }) => {

    const beeList = ["JATAI", "IRAI", "TATAIRA", "IRATIM", "BORA", "ARAPUA", "MIRIM"]

    return (
        <div className="toEraseValue">
            {propToggle && number > 0 && beeList.map((item, index) =>

                <p key={index}>{item}</p>)}

            <h2 className="toEraseValuePP ">{phrase}</h2>
        </div>
    )
}
