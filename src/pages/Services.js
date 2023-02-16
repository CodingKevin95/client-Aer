import ServiceBox from '../components/ServiceBox'
import '../style/Service.css'
import { Routes, Route, NavLink } from "react-router-dom"

function Service() {

    return (
        <div className="servicePage" id="service">
            <ServiceBox />
            {/* <div className='detailsForBtn'>
                <NavLink to="/appointment" style={{fontSize:"1rem"}}>
                    Appointment Policy
                </NavLink>
            </div> */}
            <a href='#book-now' rel="noreferrer">
                <button className='serviceBtn'>Appointments</button>
            </a>
            <a href='https://blvd.me/aer-nailbar/gift-cards' rel="noreferrer">
                <button className='serviceBtn'>Gift Card</button>
            </a>
            <div className='detailsForBtn'>
                <NavLink to="/appointment" style={{fontSize:"1rem"}}>
                    Appointment Policy
                </NavLink>
            </div>
        </div>
    )
}

export default Service