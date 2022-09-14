import '../style/Footer.css'

function Footer() {
    return (
        <div className="footerBox" id="contact">
            <div className='footerBoxes'>
                <p className='footerTitle' >Address</p>
                <p className='footContent'><a href="https://www.google.com/maps/place/Aer+Nailbar/@42.345987,-71.1088313,15z/data=!4m5!3m4!1s0x0:0x11ff6a25354c6787!8m2!3d42.3458976!4d-71.1087855" target="_blank"> 1042 Beacon Street </a><br/><a href="https://www.google.com/maps/place/Aer+Nailbar/@42.345987,-71.1088313,15z/data=!4m5!3m4!1s0x0:0x11ff6a25354c6787!8m2!3d42.3458976!4d-71.1087855" target="_blank"> Brookline, MA 02446 </a></p>
            </div>
            <div className='footerBoxes'>
                <p className='footerTitle' > Hours</p>
                <p className='footContent'><div>Monday - Friday: 9:30 - 7:00</div><br/><p>Saturday: 9:00 - 6:00</p><br/>Sunday: Closed</p>
            </div>
            <div className='footerBoxes'>
                <p className='footerTitle' >Contact</p>
                <p className='footContent'><div><a href="tel:PHONE_NUM"> 617-505-3600 </a></div><br/><a href="mailto:hello@aernail.com">hello@aernail.com</a></p>
            </div>
        </div>
    )
}

export default Footer