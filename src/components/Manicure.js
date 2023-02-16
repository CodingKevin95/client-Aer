import '../style/Service.css'
import Popup from "./ManicurePopup"
import { useEffect, useState } from 'react'
import { urlFor, client } from '../client'

function Manicure() {

    const [abouts, setAbouts] = useState([]);
    // const [show, setShow] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false)
    const [modal, setModal] = useState(false);
    const Toggle = () => {
        setModal(!modal)
        setButtonPopup(!buttonPopup)
    }

    // useEffect(() => {
    //     const query = '*[_type == "abouts"]';

    //     client.fetch(query)
    //         .then((data) => setAbouts(data))
    // }, [])

    return (
        <div className="pedicureBox">
            <p className='priceTitle'>Manicure</p>
            <div className='manicurePrice'>
                <p>Polish | 23</p>
                <p>Bare-Mani in a Glove | 24</p>
                <p>Mani in a Glove | 26</p>
                <p>Gel Manicure | 48</p>
                <p>Gel Manicure w/ Hard Gel Overlay | 63</p>
                <p>Dip-Powder Manicure | 85</p>
                <p>Gel X-tension | 100 - 115</p>
                {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                </Popup> */}
            </div>
            {/* <div className='more-detail' onClick={() => Toggle()}>More info</div> */}
        </div>
    )
}

export default Manicure