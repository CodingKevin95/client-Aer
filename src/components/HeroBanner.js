import '../style/Homepage.css'
import { motion } from "framer-motion"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function HeroBanner() {
    return (
        <motion.div transition={{duration: 1}} animate={{ opacity: 1}} initial={{opacity: 0}} className='introBox'>
            {/* <div className="sloganBox">
                <p className="text animatedText">live colorfully<br/>live you</p>
                <p className='callToAction'>Let's create something beautiful together</p>
                <a href='#book-now' rel="noreferrer" className='heroButton'>
                    <ArrowForwardIcon/>
                    <button className='serviceBtn2'>Appointments</button>
                </a>
            </div> */}
            {/* <div className='introBoxPhoto'>
                <img className='introPhoto1' src={require("../assets/manicureFrontPg.png")} />
                <img className='introPhoto2' src={require("../assets/manicureFrontPg2.png")} />
            </div> */}
            <a href='#book-now' rel="noreferrer" className='appointmentSection'>
                <button className='appointmentSectionButton'>Appointments</button>
            </a>
        </motion.div>
    )
}

export default HeroBanner