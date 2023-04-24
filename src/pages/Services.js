import ServiceBox from '../components/ServiceBox'
import '../style/Service.css'
import { Routes, Route, NavLink } from "react-router-dom"
import TestingPedicure from '../components/TestingPedicure'
import TestingManicure from '../components/TestingManicure'
import TestingWaxing from '../components/TestingWaxing'

function Service() {

    return (
        <div className="servicePage" id="service">
            <div className='topServiceSection'>
                <div className='line'></div>
                <div className='serviceSectionTitle'>Our Services</div>
            </div>
            {/* <ServiceBox /> */}
            <TestingManicure />
            <TestingPedicure />
            <TestingWaxing />
            {/* <div className='serviceBtnSection'> */}
                <a href='#book-now' rel="noreferrer">
                    <button className='serviceBtn'>Appointments</button>
                </a>
                <a href='https://blvd.me/aer-nailbar/gift-cards' rel="noreferrer">
                    <button className='serviceBtn'>Gift Card</button>
                </a>
            {/* </div>     */}
            <div className='detailsForBtn'>
                <NavLink className='detailsForBtn' to="/appointment">
                    Appointment Policy
                </NavLink>
            </div>
        </div>
    )
}

export default Service