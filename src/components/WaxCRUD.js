import { useEffect, useState } from 'react'
import '../style/Service.css'
import { urlFor, client } from '../client'

function WaxCRUD() {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const query = '*[_type == "testimonials"]';

        client.fetch(query)
            .then((data) => setTestimonials(data))
    }, [])

    return (
        <div className="pedicureBox">
            <p className='priceTitle'>Waxing</p>
            {testimonials.map((brand, index) =>  (
            <div key={index} className='manicurePrice'>
                <p className='random'>{brand.name}</p>
            </div>
            ))}
        </div>
    )
}

export default WaxCRUD