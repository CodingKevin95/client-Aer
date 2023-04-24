import React from 'react'
import Pin from './Pin'
import '../style/Service.css'

function PinterestLayout() {
    return (
        <div className='pinterestBox'>
            <Pin panel='thickFrenchDesign'/>
            <Pin panel='pinkBubble'/>
            <Pin panel='heartNailArt'/>
            <Pin panel='redAndBlueOmbre'/>
            {/* <Pin panel='pastelNailPolish'/> */}
            <Pin panel='blackAndWhiteFrench'/>
            <Pin panel='frenchOmbre'/>
            <Pin panel='mickeyMouse'/>
            <Pin panel='flowerDesign'/>
            <Pin panel='orangeDesign'/>
            <Pin panel='whiteCheckered'/>
            <Pin panel='blackLineFrench'/>
            <Pin panel='rainbowCloud'/>
            <Pin panel='pinkMarbleDesign'/>
            <Pin panel='blueFlameDesign'/>
            <Pin panel='thinAndThickFrench'/>
            <Pin panel='cowDesign'/>
        </div>
    )
}

export default PinterestLayout