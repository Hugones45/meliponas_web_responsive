import './CardForBees.css'

export const CardsForBees = ({ name, about, color, toggle, img }) => {
    return (

        <div className='popupWrapper'>
            <div style={{ borderColor: color }} className='popup'>
                <p className='closeButton' onClick={toggle}>X</p>
                <div className='cardsFindBee'>{img}</div>
                <h2 className='nameBeeCard'>{name}</h2>
                <p className='text' style={{ whiteSpace: 'normal' }}>{about}</p>
            </div>


        </div>
    )
}
