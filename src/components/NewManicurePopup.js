import { useState, useEffect } from "react";
import "../style/Popup.css"
import { urlFor, client } from '../client'
import {FaBars, FaTimes} from 'react-icons/fa'
import { motion } from 'framer-motion'

function NewManicurePopup(props) {

    let manicureService = [
        {
            serviceName: "Bare-Mani",
            price: "24",
            detail: "This service comes with 100% vegan & cruelty free single-use gloves that are filled with intensive Collagen and Argan Oil that delivers an incredible nourishing and moisturizing treatment for the skin. This paraffin wax like treatment is the perfect remedy for skin dryness to help protects its natural oils and restore youthfulness. Also includes nails shaping, MODERATE cuticle care, relaxing hand massage. Finish with natural shiny buff or nails strengthener. DOES NOT INCLUDE POLISH"
        },
        {
            serviceName: "Manicure",
            price: "26",
            detail: "This is Aer signature manicure. This service comes with 100% vegan & cruelty free single-use gloves that are filled with intensive Collagen and Argan Oil that delivers an incredible nourishing and moisturizing treatment for the skin. This paraffin wax like treatment is the perfect remedy for skin dryness to help protects its natural oils and restore youthfulness. Also includes nails shaping, cuticle care, relaxing hand massage. Finish with a color of your choice."
        },
        {
            serviceName: "Gel Manicure",
            price: "48",
            detail: "Service includes our signature Mani in a Glove. Finishes with our vegan top branded gel lacquer that lasts for weeks and dry instantly."
        },
        {
            serviceName: "Gel Manicure w/ Hard Gel Overlay",
            price: "63",
            detail: "Service includes our signature Mani in a Glove, and a hard gel base coat applied over natural nails for strength. Ideal for those who want to grow out or strengthen their natural nails. Finishes with our vegan top branded gel lacquer that lasts for weeks and dry instantly."
        },
        {
            serviceName: "Dip-Powder Manicure",
            price: "85 - 115",
            detail: "Service includes our signature Mani in a Glove. Finishes with a dip-powder color of your choice over your natural nails. Dipping powders are odor-free acrylic alternative which promote a clean-air environment and offer gel-like shine & weeks of wear."
        },
        {
            serviceName: "Gel X-tension",
            price: "100 - 115",
            detail: "Gel-X Extensions are done with soft gel that yields no heavy dust, no odor, and no harsh filing on natural nails. Ideal for those who wants length on their nails without damaging their natural nails. Last up to 3+ weeks. NO REFILLS."
        },
    ]

    const turnOff = () => {
      document.body.style.overflow = "scroll";
    }

    return(props.trigger) ? (
        <motion.div transition={{duration: 1}} animate={{ opacity: 1}} initial={{opacity: 0}} 
        className="popup">
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

export default NewManicurePopup