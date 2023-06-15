import "./Button.css"

export const Button = ({ text, functions, disabled }) => {
    return (
        <button disabled={disabled} className="geralButton" onClick={functions}>{text}</button>
    )
}
