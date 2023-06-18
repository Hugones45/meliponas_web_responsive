import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import "./Slider.css"

import bluebeesolitary from "../../assets/forTheSlide/bluebeesolitary.bmp"
import hive1 from "../../assets/forTheSlide/hive1.jpg"
import hive2 from "../../assets/forTheSlide/hive2.jpg"
import solitarybee1 from "../../assets/forTheSlide/solotarybee1.jpg"
import iratim1 from "../../assets/forTheSlide/33.jpg"
import urucu from "../../assets/forTheSlide/urucu.jpg"
import anotheriratim from "../../assets/forTheSlide/anotheriratim.jpg"
import iratim2 from "../../assets/forTheSlide/iratim2.jpg"
import beeentrance1 from "../../assets/forTheSlide/abelhas-sem-ferrao-mel-de-excelente-qualidade-3-cpt.jpg"
import urucuentrance from "../../assets/forTheSlide/urucuentrance.png"
import jataientrance from "../../assets/forTheSlide/jataientrance.bmp"
import lambeolhoscolmeia from "../../assets/forTheSlide/lambeolhoscolmeia.jpg"
import beehive40 from "../../assets/forTheSlide/beehive40.jpg"
import greathives from "../../assets/forTheSlide/238160_web.jpg"
import alicerce from "../../assets/forTheSlide/alicerce.jpg"
import polen from "../../assets/forTheSlide/polem.jpg"
import bumble1 from "../../assets/forTheSlide/bumble1.jpg"
import bumble2 from "../../assets/forTheSlide/bumble2.jpg"
import bumble3 from "../../assets/forTheSlide/buble3.jpg"
import beesol1 from "../../assets/forTheSlide/solitary33.jpg"
import beesol2 from "../../assets/forTheSlide/solotary44.jpg"
import layeggs from "../../assets/forTheSlide/solitarylayeggs.jpg"
import greensol from "../../assets/forTheSlide/solitarybee2.bmp"
import jataiprincipal from "../../assets/forTheSlide/jataipreincipal.bmp"


import queen1 from "../../assets/forTheSlide/queen1.jpg"
import queen2 from "../../assets/forTheSlide/queen2.jpg"
import queen3 from "../../assets/forTheSlide/queen3.jpg"

export const Slider = () => {

    const images = [
        {
            id: Math.random(),
            beeImg: bluebeesolitary,

        },

        {
            id: Math.random(),
            beeImg: solitarybee1,
        },
        {
            id: Math.random(),
            beeImg: greensol
        },
        {
            id: Math.random(),
            beeImg: beesol1,

        },
        {
            id: Math.random(),
            beeImg: beesol2,
        },
        {
            id: Math.random(),
            beeImg: layeggs
        },
        {
            id: Math.random(),
            beeImg: bumble1,
        },
        {
            id: Math.random(),
            beeImg: bumble2,
        },
        {
            id: Math.random(),
            beeImg: bumble3,
        },
        {
            id: Math.random(),
            beeImg: hive2,
        },
        {
            id: Math.random(),
            beeImg: beehive40,

        },
        {
            id: Math.random(),
            beeImg: greathives,
        },
        {
            id: Math.random(),
            beeImg: alicerce
        },
        {
            id: Math.random(),
            beeImg: hive1,

        },
        {
            id: Math.random(),
            beeImg: lambeolhoscolmeia,
        },
        {
            id: Math.random(),
            beeImg: polen,
        },
        {
            id: Math.random(),
            beeImg: queen1,

        },
        {
            id: Math.random(),
            beeImg: queen2,
        },
        {
            id: Math.random(),
            beeImg: queen3,
        },
        {
            id: Math.random(),
            beeImg: jataientrance,
        },
        {
            id: Math.random(),
            beeImg: beeentrance1,

        },
        {
            id: Math.random(),
            beeImg: urucuentrance,
        },
        {
            id: Math.random(),

            beeImg: iratim1,
        },
        {
            id: Math.random(),
            beeImg: iratim2,

        },
        {
            id: Math.random(),
            beeImg: anotheriratim,
        },
        {
            id: Math.random(),

            beeImg: urucu,
        },
        {
            id: Math.random(),
            beeImg: jataiprincipal,
        }
    ]

    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <div className="theSlideShow">

            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 800 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1.0 }}
                    className="inner">

                    {images.map((item) => (
                        <motion.div
                            className="theImagesItens"
                            key={item.id}>
                            <img src={item.beeImg} alt="images" />
                            <p>{item.title}</p>
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>

        </div>
    )
}
