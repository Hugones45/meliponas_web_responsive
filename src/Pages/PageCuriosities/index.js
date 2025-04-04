import styles from "./pop_dens.module.css";

import apiculture from "../../assets/flipCard/apisBee.jpg";
import meliponiculture from "../../assets/flipCard/testbee2.jpg";

import { motion } from "framer-motion";
import { useState } from "react";

export const PageCuriosities = () => {
    const [flip, setFlip] = useState(false);

    return (
        <div className={styles.main_container}>

            <button className={styles.buttonsForBeeChange} onClick={() => setFlip(!flip)}>Meli-Apis!</button>

            <motion.div
                className={styles.cardContainer}
                animate={{ rotateY: flip ? 180 : 0 }}
                transition={{ duration: 0.7 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Lado 1 */}
                <motion.div
                    className={styles.cardFace}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className={styles.blockContainer}>
                        <img
                            src={meliponiculture} alt="Meliponiculture" className={styles.cardImage} />
                        <div className={styles.description_container} >
                            <h1>Meliponiculture</h1>
                            <p style={{ zIndex: '10' }}>Melipoculture is the term used for the activity of raising stingless bees, commonly known as meliponas. Unlike beekeeping, the management of meliponas rarely requires protection, except for some species. Although meliponiculture has grown in recent years, many Brazilians are still unaware of native bees, and this is due to the historical lack of incentive and interest from the Brazilian government in ecology and wildlife preservation.</p>
                            <p><span style={{ zIndex: '10', position: 'relative' }} /><span style={{ zIndex: '10', position: 'relative' }} >Brazilian soil is home to more than 250 species of stingless bees, which play a crucial role in balancing the biomes.. Cultivating these bees not only generates income but also provides knowledge about the land and benefits the entire ecosystem's health</span></p>
                        </div>


                    </div>
                </motion.div>

                {/* Lado 2 */}
                <motion.div
                    className={`${styles.cardFace} ${styles.cardBack}`}
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className={styles.blockContainer}>
                        <img
                            src={apiculture} alt="Apiculture" className={styles.cardImage} />

                        <div className={styles.description_container}>
                            <span style={{ zIndex: '10', position: 'relative' }} >
                                <h1>Apiculture</h1>
                                <p><span style={{ zIndex: '10', position: 'relative' }} >Apiculture is the practice of raising honeybees of the Apis mellifera genus, which are exotic bees originating from Africa and Europe. They arrived in Brazil alongside the colonizers, and initially, their cultivation focused on wax production, which was widely used for religious activities. In modern times, apiculture has become a significant source of income and plays a crucial role in Brazil's economy.</span></p>

                                <p><span style={{ zIndex: '10', position: 'relative' }} >However, excessive management and disregard for ecological consequences have been threatening the balance of native fauna. It is important to remember that all bee species need to be preserved, and it is up to us, as caretakers, to find a safe path for their preservation and prosperity.</span></p></span>
                        </div>

                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
