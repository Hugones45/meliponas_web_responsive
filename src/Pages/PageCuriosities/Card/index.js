import './Card.css'
import './FlipTransiton.css'
import bee from "../../../assets/flipCard/testbee2.jpg"
import apisBee from "../../../assets/flipCard/apisBee.jpg"
import "./BackDetails.css"

export const Card = ({ onClick }) => {
    return (

        <div className='card' onDoubleClick={onClick}>

            <div className='card-back'>
                <div className='forImagesContainerApis'>

                    <div className='forImagesAlinhaApis'>
                        <img className='forImagesApisIMG' src={apisBee} alt='abelhasApisTeste' />
                    </div>

                    <div className='forImagesAlinhaApis'>
                        <div className='forTheTextMeliApis'>
                            <h1>Apiculture</h1>
                            <p>Apiculture is the practice of raising honeybees of the Apis mellifera genus, which are exotic bees originating from Africa and Europe. They arrived in Brazil alongside the colonizers, and initially, their cultivation focused on wax production, which was widely used for religious activities. In modern times, apiculture has become a significant source of income and plays a crucial role in Brazil's economy.</p>

                            <p>However, excessive management and disregard for ecological consequences have been threatening the balance of native fauna. It is important to remember that all bee species need to be preserved, and it is up to us, as caretakers, to find a safe path for their preservation and prosperity.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='card-front'>
                <div className='forImagesContainer'>

                    <div className='forImagesAlinha '>
                        <img className='forImages' src={bee} alt="abelhasTeste" />
                    </div>

                    <div className='forImagesAlinha '>
                        <div className='forTheTextMeli'>
                            <h1>Meliponiculture</h1>
                            <p>Melipoculture is the term used for the activity of raising stingless bees, commonly known as meliponas. Unlike beekeeping, the management of meliponas rarely requires protection, except for some species. Although meliponiculture has grown in recent years, many Brazilians are still unaware of native bees, and this is due to the historical lack of incentive and interest from the Brazilian government in ecology and wildlife preservation.</p>
                            <p>Brazilian soil is home to more than 250 species of stingless bees, which play a crucial role in balancing the biomes. Cultivating these bees not only generates income but also provides knowledge about the land and benefits the entire ecosystem's health.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}
