import "./BeesButtons.css"

export const BeesButtons = ({ getMeliWordOne, getMeliWordTwo, words, wrongName }) => {

    const meliponas = ["TIM", "MI", "A", "TA", "RA", "JA", "BO", "I", "PU", "RIM"]

    const meliOne = meliponas.slice(0, 5)
    const meliTwo = meliponas.slice(5,)

    return (
        <div className="uperContainer">
            <div className="container">
                <div className="alinha">
                    {meliOne.map((item, index) =>

                        <button
                            className="buttonsForBeeWords "
                            onClick={() => getMeliWordOne(item)}
                            key={index}>{item}</button>
                    )}</div>

                <div className="letter">
                    <p className="forTheWords">{words}</p>
                    <p className="forWrongNames">{wrongName}</p>
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
