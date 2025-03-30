import { NavLink } from "react-router-dom"
import { useCounterValue } from "../../context/CounterContext"
import { motion } from "framer-motion"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import "./NavBar.css"
import { useState } from "react"

export const NavBar = () => {
    const { counter } = useCounterValue()

    const [showNavScreen, setShowNavScreen] = useState(false)

    const showTheScreen = () => {
        setShowNavScreen(!showNavScreen)
    }

    return (
        <div>
            {/* Regular NavBar for large screens */}
            <nav className="theNav">
                <div className="navContent">

                    <NavLink to="/">The Hive!</NavLink>
                    <NavLink to="/pageCuriosities">Meliponiculture and Apiculture</NavLink>
                    <NavLink to="/lonelyOrSwarm">Lonely Ones or the Swarm</NavLink>

                    {counter > 2 && (
                        <motion.div animate={{ x: 100 }}>
                            <NavLink className="surpriseRegularScreen" to="/surprise">Surprise!</NavLink>
                        </motion.div>
                    )}
                </div>

                {!showNavScreen ? <div className="my-class">
                    <FaBars onClick={() => showTheScreen()} />
                </div> :
                    <div className="my-class">
                        <FaTimes onClick={() => showTheScreen()} />                    </div>
                }
            </nav>

            {showNavScreen && <nav className="menu_nav">
                <NavLink className="navNamesResponsive" onClick={() => showTheScreen()} to="/">The Hive!</NavLink>
                <NavLink className="navNamesResponsive" onClick={() => showTheScreen()} to="/pageCuriosities">Meliponiculture and Apiculture</NavLink>
                <NavLink className="navNamesResponsive" onClick={() => showTheScreen()} to="/lonelyOrSwarm">Lonely Ones or the Swarm</NavLink>

                {counter > 2 && (
                    <NavLink className="navNamesResponsive" onClick={() => showTheScreen()} to="/surprise">Surprise!</NavLink>
                )}
            </nav>}
        </div>
    )
}
