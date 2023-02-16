import '../style/Service.css'
import PopupP from "./PedicurePopup"
import { useEffect, useState } from 'react'
import { urlFor, client } from '../client'

function Pedicure() {

    const [abouts, setAbouts] = useState([]);
    // const [show, setShow] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false)
    const [modal, setModal] = useState(false);
    const Toggle = () => {
        setModal(!modal)
        setButtonPopup(!buttonPopup)
    }

    return (
        <div className="pedicureBox">
            <p className='priceTitle'>Pedicure</p>
            <div className='manicurePrice'>
                <p>Polish | 29</p>
                <p>Bare-it Pedi | 43</p>
                <p>Aer Pedicure | 45</p>
                <p>Gel Pedicure | 70</p>
                {/* <PopupP trigger={buttonPopup} setTrigger={setButtonPopup}>
                </PopupP> */}
            </div>
            {/* <div className='more-detail' onClick={() => Toggle()}>More info</div> */}
        </div>
    )
}

export default Pedicure