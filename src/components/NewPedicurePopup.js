import { useState, useEffect } from "react";
import "../style/Popup.css"
import { urlFor, client } from '../client'
import {FaBars, FaTimes} from 'react-icons/fa'
import { motion } from 'framer-motion'

function NewPedicurePopup(props) {

    let manicureService = [
        {
            serviceName: "Bare-it Pedi",
            price: "43",
            detail: "Most basic pedicure. Soak, nails shaping, cuticle care, exfoliate, mild callus care, relaxing massage, and finish with a shiny buff. (NO COLORS)"
        },
        {
            serviceName: "Aer Pedicure",
            price: "45",
            detail: "This is our signature pedicure. Service includes feet soak, nails shaping, cuticle care, exfoliation, mud mask, mild callus treatment, relaxing massage with hot stones, finishes with a polish of your choice. Our pedicures come with a box of 4 pods of fresh soak, sugar scrub, moisture mask and luxury lotion. Each box is designed for single use with recycled materials. All contain natural ingredients and are both paraben free & vegan friendly"
        },
        {
            serviceName: "Gel Pedicuree",
            price: "70",
            detail: "This service includes our signature Aer Pedi. Finishes with our vegan top branded gel lacquer that lasts for weeks and dry instantly."
        }
    ]

    const turnOff = () => {
      document.body.style.overflow = "scroll";
    }

    return(props.trigger) ? (
        <motion.div transition={{duration: 1}} animate={{ opacity: 1}} initial={{opacity: 0}} className="popup">
            <div className="popup-inner">
            { manicureService.map((service) => {
                    return (
                        <div class="services-popup">
                            <p class="services-popup-card">{service.serviceName} || {service.price}</p>
                            <p class="services-popup-card">{service.detail}</p>
                        </div>
                    );
                }) }
                <a href='#book-now' rel="noreferrer">
                <button className='serviceBtnPopup' onClick={() => props.setTrigger(false)}>Appointments</button>
                </a>
                <div className="close-btn" onClick={() => {props.setTrigger(false); turnOff()}}><FaTimes size={20} style={{color: 'black'}}/></div>
                { props.childern }
            </div>
        </motion.div>
    ) : "";
}

export default NewPedicurePopup