import React from 'react'
import '../style/Portfolio.css'
import pastelNailPolish from '../assets/manicure.jpg'
import redAndBlueOmbre from '../assets/manicure5.jpg'
import pinkBubble from '../assets/o.jpg'
import heartNailArt from '../assets/manicure2.jpg'
import blackAndWhiteFrench from '../assets/manicure3.jpg'
import frenchOmbre from '../assets/manicure4.jpg'
import mickeyMouse from '../assets/manicure6.jpg'
import flowerDesign from '../assets/manicure7.jpg'
import orangeDesign from '../assets/manicure8.jpg'
import whiteCheckered from '../assets/manicure9.jpg'
import blackLineFrench from '../assets/manicure10.jpg'
import rainbowCloud from '../assets/manicure11.jpg'
import pinkMarbleDesign from '../assets/manicure12.jpg'
import thickFrenchDesign from '../assets/manicure13.jpg'
import blueFlameDesign from '../assets/manicure14.jpg'
import thinAndThickFrench from '../assets/manicure15.jpg'
import cowDesign from '../assets/manicure16.jpg'
import { useMediaQuery } from '@mui/material'

function Pin(props) {

    return (
        <div className='bounding-box' style={{
            ...styles.pin,
            ...styles[props.panel]
        }}>
        </div>
    )
}

const styles = {
    pin: {
        margin: '15px 10px',
        padding: '0',
        borderRadius: '16px',
        
    },
    pastelNailPolish: {
        gridRowEnd: 'span 26',
        backgroundColor: 'red',
        backgroundImage: `url(${pastelNailPolish})`,
    },
    redAndBlueOmbre: {
        gridRowEnd: 'span 33',
        backgroundColor: 'yellow',
        backgroundImage: `url(${redAndBlueOmbre})`,
    },
    pinkBubble: {
        gridRowEnd: 'span 38',
        backgroundColor: 'green',
        backgroundImage: `url(${pinkBubble})`,
    },
    heartNailArt: {
        gridRowEnd: 'span 36',
        backgroundColor: 'red',
        backgroundImage: `url(${heartNailArt})`,
    },
    blackAndWhiteFrench: {
        gridRowEnd: 'span 33',
        backgroundColor: 'yellow',
        backgroundImage: `url(${blackAndWhiteFrench})`,
    },
    frenchOmbre: {
        gridRowEnd: 'span 38',
        backgroundColor: 'green',
        backgroundImage: `url(${frenchOmbre})`,
    },
    mickeyMouse: {
        gridRowEnd: 'span 26',
        backgroundColor: 'green',
        backgroundImage: `url(${mickeyMouse})`,
    },
    flowerDesign: {
        gridRowEnd: 'span 30',
        backgroundColor: 'green',
        backgroundImage: `url(${flowerDesign})`,
    },
    orangeDesign: {
        gridRowEnd: 'span 30',
        backgroundColor: 'green',
        backgroundImage: `url(${orangeDesign})`,
    },
    whiteCheckered: {
        gridRowEnd: 'span 33',
        backgroundColor: 'green',
        backgroundImage: `url(${whiteCheckered})`,
    },
    blackLineFrench: {
        gridRowEnd: 'span 38',
        backgroundColor: 'green',
        backgroundImage: `url(${blackLineFrench})`,
    },
    rainbowCloud: {
        gridRowEnd: 'span 38',
        backgroundColor: 'green',
        backgroundImage: `url(${rainbowCloud})`,
    },
    pinkMarbleDesign: {
        gridRowEnd: 'span 38',
        backgroundColor: 'green',
        backgroundImage: `url(${pinkMarbleDesign})`,
    },
    thickFrenchDesign: {
        gridRowEnd: 'span 33',
        backgroundColor: 'green',
        backgroundImage: `url(${thickFrenchDesign})`,
    },
    blueFlameDesign: {
        gridRowEnd: 'span 33',
        backgroundColor: 'green',
        backgroundImage: `url(${blueFlameDesign})`,
    },
    thinAndThickFrench: {
        gridRowEnd: 'span 33',
        backgroundColor: 'green',
        backgroundImage: `url(${thinAndThickFrench})`,
    },
    cowDesign: {
        gridRowEnd: 'span 33',
        backgroundColor: 'green',
        backgroundImage: `url(${cowDesign})`,
    }
}

export default Pin