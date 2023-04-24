import '../style/Service.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import waxingPhoto from '../assets/wax.jpg'

function Waxing() {

    let waxingService = [
        {
            serviceName: "Chin",
            price: "15"
        },
        {
            serviceName: "Brows",
            price: "20"
        },
        {
            serviceName: "Bikini",
            price: "40"
        },
        {
            serviceName: "Full Arms",
            price: "50"
        },
        {
            serviceName: "Brazilian",
            price: "75"
        },
        {
            serviceName: "Full Legs",
            price: "85"
        },
    ]

    return (
        <div className="serviceMenuO">
            <img src={waxingPhoto} alt="photo" className='servicePhoto'/>
            <div className='leftServiceSide'>
                <p className='serviceTitle'>Waxing</p>
                <div className='serviceList'>
                    { waxingService.map((service) => {
                        return (
                                <p class="services-card">{service.serviceName} || {service.price}</p>
                        );
                    }) }
                </div>
            </div>
        </div>
    )
}

export default Waxing