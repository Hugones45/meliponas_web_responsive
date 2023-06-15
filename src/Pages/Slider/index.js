import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import "./Slider.css"

import bluebeesolitary from "../../assets/forTheSlide/bluebeesolitary.bmp"
import hive1 from "../../assets/forTheSlide/hive1.jpg"
import hive2 from "../../assets/forTheSlide/hive2.jpg"
import solitarybee3 from "../../assets/forTheSlide/solitarybee3.jpg"
import solitarybee1 from "../../assets/forTheSlide/solotarybee1.jpg"



export const Slider = () => {

    const images = [
        {
            id: 1,
            beeImg: hive1,
            title: "Hives",
        },
        {
            id: 2,
            beeImg: hive2,
        },
        {
            id: 3,
            beeImg: bluebeesolitary,
            title: "solitary",
        },
        {
            id: 4,
            beeImg: solitarybee3,

        },
        {
            id: 5,
            beeImg: solitarybee1,

        },
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
