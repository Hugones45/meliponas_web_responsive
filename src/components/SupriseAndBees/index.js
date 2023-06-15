import { useState } from "react"

export const SurpriseAndBees = () => {

    const [toggle, setToggle] = useState(false)

    const names = ['Jatai', "Irai", "Iratim", "Tataira"]

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Mostrar/Ocultar Nomes</button>

            {names.map((item, index) => {
                return toggle && <p key={index}>{item}</p>
            })}
        </div>
    )
}
