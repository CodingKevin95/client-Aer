import { useState, useEffect } from "react";
import "../style/Popup.css"
import { urlFor, client } from '../client'
import {FaBars, FaTimes} from 'react-icons/fa'
import { motion } from 'framer-motion'

function Popup(props) {

    const [abouts, setAbouts] = useState([])

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query)
            .then((data) => setAbouts(data))
    }, [])

    return(props.trigger) ? (
        <motion.div transition={{duration: 1}} animate={{ opacity: 1}} initial={{opacity: 0}} className="popup">
            <div className="popup-inner">
            {abouts.map((about, index) =>  (
            <div key={index} className='manicurePrice'>
                <p className='random'>
                    <div className="title-popup">{about.title}</div>
                    <br/>
                    <div className="description-popup">{about.description}</div>
                </p>
            </div>
            ))}
                <a href='#book-now' rel="noreferrer">
                <button className='serviceBtnPopup' onClick={() => props.setTrigger(false)}>Appointments</button>
                </a>
                <div className="close-btn" onClick={() => props.setTrigger(false)}><FaTimes size={20} style={{color: 'black'}}/></div>
                { props.childern }
            </div>
        </motion.div>
    ) : "";
}

export default Popup