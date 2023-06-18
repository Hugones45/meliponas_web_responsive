import { NavLink } from "react-router-dom"
import { useCounterValue } from "../../context/CounterContext"
import { motion } from "framer-motion"

import "./NavBar.css"

export const NavBar = () => {
    const { counter } = useCounterValue()

    return (
        <nav className="theNav">

            <NavLink to="/">The Hive!</NavLink>
            <NavLink to="/pageCuriosities">Meliponiculture and Apiculture</NavLink>
            <NavLink to="/lonelyOrSwarm"> Lonely Ones or the Swarm</NavLink  >

            {counter > 2 && <motion.div
                animate={{ x: 100 }}
            > <NavLink to="/surprise">Surprise!</NavLink></motion.div>}

        </nav>
    )
}
