import { useState, useEffect } from "react";
import "../style/Popup.css"
import { urlFor, client } from '../client'
import {FaBars, FaTimes} from 'react-icons/fa'

function PedicurePopup(props) {

    const [works, setWorks] = useState([]);

    useEffect(() => {
        const query = '*[_type == "works"]';

        client.fetch(query)
            .then((data) => setWorks(data))
    }, [])

    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            {works.map((about, index) =>  (
            <div key={index} className='manicurePrice'>
                <p className='random'>
                    <div className="title-popup">{about.title}</div>
                    <br/>
                    <div className="description-popup">{about.description}</div>
                </p>
            </div>
            ))}
                <a href='https://go.booker.com/location/AerNailBar/service-menu' target="_blank" rel="noreferrer">
                <button className='serviceBtnPopup'>Appointments</button>
                </a>
                <div className="close-btn" onClick={() => props.setTrigger(false)}><FaTimes size={20} style={{color: 'black'}}/></div>
                { props.childern }
            </div>
        </div>
    ) : "";
}

export default PedicurePopup