import { useEffect, useState } from 'react'
import '../style/Service.css'
import { urlFor, client } from '../client'
import Popup from "./ManicurePopup"

function ManicureCRUD() {

    const [abouts, setAbouts] = useState([]);
    const [show, setShow] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false)
    const [modal, setModal] = useState(false);
    const Toggle = () => {
        setModal(!modal)
        setButtonPopup(!buttonPopup)
    }

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query)
            .then((data) => setAbouts(data))
    }, [])

    return (
        <div className="pedicureBox">
            <p className='priceTitle'>Manicure</p>
            {/* <button onClick={() => setButtonPopup(true)}>More Description</button> */}
            {/* <div className='more-detail' onClick={() => Toggle()}>More info</div> */}
            {abouts.map((about, index) =>  (
            <div key={index} className='manicurePrice'>
                <p className='random' onClick={() => setShow(!show)}>
                    {about.title}
                </p>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                </Popup>
            </div>
            ))}
            <div className='more-detail' onClick={() => Toggle()}>More info</div>
        </div>
    )
}

export default ManicureCRUD