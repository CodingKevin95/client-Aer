import { useEffect, useState } from 'react'
import '../style/Service.css'
import { urlFor, client } from '../client'
import PopupP from "./PedicurePopup"

function PedicureCRUD() {

    const [works, setWorks] = useState([]);
    const [show, setShow] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false)
    const [modal, setModal] = useState(false);
    const Toggle = () => {
        setModal(!modal)
        setButtonPopup(!buttonPopup)
    }

    useEffect(() => {
        const query = '*[_type == "works"]';

        client.fetch(query)
            .then((data) => setWorks(data))
    }, [])

    return (
        <div className="pedicureBox">
            <p className='priceTitle'>Pedicure</p>
            {works.map((work, index) =>  (
            <div key={index} className='manicurePrice'>
                <p className='random' onClick={() => setShow
                (!show)}>
                    {work.title}
                </p>
                <PopupP trigger={buttonPopup} setTrigger={setButtonPopup}>
                </PopupP>
            </div>
            ))}
            <div className='more-detail' onClick={() => Toggle()}>More info</div>
        </div>
    )
}

export default PedicureCRUD