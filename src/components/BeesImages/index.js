import { useState } from "react"
import "./BeeImages.css"

import IRAI from "../../assets/allTheMeli/IRAI.jpg"
import JATAI from "../../assets/allTheMeli/JATAI.jpg"
import MIRIM from "../../assets/allTheMeli/MIRIM.jpg"
import IRATIM from "../../assets/allTheMeli/IRATIM.jpeg"
import TATAIRA from "../../assets/allTheMeli/TATAIRA.jpg"
import ARAPUA from "../../assets/allTheMeli/ARAPUA.jpg"
import BORA from "../../assets/allTheMeli/BORA.jpg"

export const BeesImages = ({ melipons }) => {

    const [allMelipon] = useState([
        {
            name: 'IRAI',
            img: IRAI
        },
        {
            name: 'JATAI',
            img: JATAI
        },
        {
            name: 'MIRIM',
            img: MIRIM
        },
        {
            name: 'IRATIM',
            img: IRATIM
        },
        {
            name: 'TATAIRA',
            img: TATAIRA
        },
        {
            name: 'ARAPUA',
            img: ARAPUA
        },
        {
            name: 'BORA',
            img: BORA
        }
    ])

    const findImageBee = (theBee) => {
        const findBee = allMelipon.find((item) => item.name === theBee)['img']
        return findBee
    }

    return (
        <div>
            <img
                className="forBeeImagesImg "
                src={findImageBee(melipons)} />
        </div>
    )
}
