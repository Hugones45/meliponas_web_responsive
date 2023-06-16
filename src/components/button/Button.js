import "./Button.css"

export const Button = ({ text, functions }) => {
    return (
        <button className="geralButton" onClick={functions}>{text}</button>
    )
}
