import '../style/Service.css'
import NewPedicurePopup from './NewPedicurePopup'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

function Pedicure() {

    let pedicureService = [
        {
            serviceName: "Polish",
            price: "29"
        },
        {
            serviceName: "Bare-it Pedi",
            price: "43"
        },
        {
            serviceName: "Aer Pedicure",
            price: "45"
        },
        {
            serviceName: "Gel Pedicuree",
            price: "70"
        },
    ]
    
    const [buttonPopup, setButtonPopup] = useState(false)
    const [modal, setModal] = useState(false);
    const Toggle = () => {
        setModal(!modal)
        setButtonPopup(!buttonPopup)
        document.body.style.overflow = "hidden";
    }

    return (
        <div className="pedicureBox">
            <p className='priceTitle'>Pedicure</p>
            <div className='manicurePrice'>
                { pedicureService.map((service) => {
                    return (
                        <div class="services-card">
                            <p class="services-card">{service.serviceName} || {service.price}</p>
                        </div>
                    );
                }) }
                <NewPedicurePopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                </NewPedicurePopup>
            </div>
            <div className='more-detail-section'><Link className='more-detail' onClick={() => Toggle()} to='service' spy={true} smooth={true}>More info</Link></div>
        </div>
    )
}

export default Pedicure