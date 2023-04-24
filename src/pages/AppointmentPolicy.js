import { NavLink } from "react-router-dom"
import "../style/Careerpage.css"

function AppointmentPolicy() {
    return (
        <div className="careerpage">
            <div className="careerbox">
            <div className="backBtnBox">
                    <NavLink className="backBtn" to="/">aer.</NavLink>
                    <div className='lineAer2'></div>
                </div>
                <h1>Cancelation</h1>
                <p>
                    We understand that sometimes your schedule may change. If you need to cancel or reschedule your appointment, we ask that you call or email us 24 hours in advance to avoid the last minute cancelation/rescheduling fee (50% of the appointment's total).
                </p>

                <h1>No-show</h1>
                <p>
                We want to provide the best service for you, and to do so, we make sure we allot enough time for your appointment. To be fair to our technicians that prepared for the appointment and other customers that would've wanted the appointment, we have a "no-show" fee (100% of the appointment's total).
                </p>

                <h1>Contact</h1>
                <p>
                    Please feel free to give us a <a href="tel:617-505-3600"> call </a> or <a href="mailto:hello@aernailbar.com">email us</a>. We are always happy to answer and questions/concerns.
                </p>
            </div>
        </div>
    )
}

export default AppointmentPolicy