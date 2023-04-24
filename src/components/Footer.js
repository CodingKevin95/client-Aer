import '../style/Footer.css'
import { Routes, Route, NavLink } from "react-router-dom"
import Careerpage from '../pages/Careerpage'

function Footer() {
    return (
        <div className="footerBox" id="contact">
            <div className='footerBoxes'>
                <p className='footerTitle' >Address</p>
                <p className='footContent'><a className='footerLink' href="https://www.google.com/maps/place/Aer+Nailbar/@42.345987,-71.1088313,15z/data=!4m5!3m4!1s0x0:0x11ff6a25354c6787!8m2!3d42.3458976!4d-71.1087855" target="_blank"> 1042 Beacon Street </a><br/><a className='footerLink' href="https://www.google.com/maps/place/Aer+Nailbar/@42.345987,-71.1088313,15z/data=!4m5!3m4!1s0x0:0x11ff6a25354c6787!8m2!3d42.3458976!4d-71.1087855" target="_blank"> Brookline, MA 02446 </a></p>
            </div>
            <div className='footerBoxes'>
                <p className='footerTitle' > Hours</p>
                <p className='footContent'><div>Monday - Friday: 9:30 - 7:00</div><br/><p className='footContent'>Saturday: 9:00 - 6:00</p><br/>Sunday: 10:00 - 4:00</p>
            </div>
            <div className='footerBoxes'>
                <p className='footerTitle' >Contact</p>
                <p className='footContent'><div><a className='footerLink' href="tel:617-505-3600"> 617-505-3600 </a></div><br/><a className='footerLink' href="mailto:hello@aernailbar.com">hello@aernailbar.com</a></p>
                <NavLink className='footContent' to="/career">
                    Careers
                </NavLink>
            </div>
        </div>
    )
}

export default Footer