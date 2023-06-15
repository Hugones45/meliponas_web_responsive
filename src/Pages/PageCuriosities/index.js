import { Card } from '../PageCuriosities/Card'
import './PageCuriosities.css'

import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'

export const PageCuriosities = () => {

    const [showFront, setShowFront] = useState(true)

    return (
        <div style={{ backgroundColor: "#000", textAlign: 'center', paddingTop: '10px', fontSize: '20px' }}>
            <h2 style={{ color: '#fff' }} >Double click the card below!</h2>

            <div className='greaTdiv' style={{ backgroundColor: 'transparent' }}>
                <div className='flippeable-card-container'>

                    <CSSTransition
                        in={showFront}
                        timeout={300}
                        classNames='flip'
                    >
                        <Card onClick={() => {
                            setShowFront((v) => !v)
                        }} />
                    </CSSTransition>


                </div>
            </div>
        </div>
    )
}
