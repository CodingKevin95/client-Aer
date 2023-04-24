import '../style/Service.css'
import NewManicurePopup from './NewManicurePopup'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

function Manicure(props) {

    let manicureService = [
        {
            serviceName: "Polish",
            price: "23"
        },
        {
            serviceName: "Bare-Mani",
            price: "24"
        },
        {
            serviceName: "Manicure",
            price: "26"
        },
        {
            serviceName: "Gel Manicure",
            price: "48"
        },
        {
            serviceName: "Gel Manicure w/ Hard Gel Overlay",
            price: "63"
        },
        {
            serviceName: "Dip-Powder Manicure",
            price: "85 - 115"
        },
        {
            serviceName: "Gel X-tension",
            price: "100 - 115"
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
            <p className='priceTitle'>Manicure</p>
            <div className='manicurePrice'>
                { manicureService.map((service) => {
                    return (
                        <div class="services-card">
                            <p class="services-card">{service.serviceName} || {service.price}</p>
                        </div>
                    );
                }) }
                <NewManicurePopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                </NewManicurePopup>
            </div>
            <div className='more-detail-section'><Link className='more-detail' onClick={() => Toggle()} to='service' spy={true} smooth={true}>More info</Link></div>
        </div>
    )
}

export default Manicure