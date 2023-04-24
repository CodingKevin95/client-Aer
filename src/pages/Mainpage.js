import Navbar from '../components/Navbar';
import Homepage from './Homepage';
import Portfolio from './Portfolio';
import Service from './Services';
import Footerpage from './Footerpage';
import { motion } from 'framer-motion'
import About from './About';
import Appointments from './Appointment';

function Mainpage() {
    return (
        <div>
        {/* <motion.div transition={{duration: 1}} animate={{ opacity: 1}} initial={{opacity: 0}}> */}
            <Navbar />
            <Homepage />
            {/* <Appointments /> */}
            {/* <About /> */}
            <motion.div transition={{duration: 1}} animate={{ opacity: 1}} initial={{opacity: 0}}>
                <Service />
            </motion.div>
            <Portfolio />
            <Footerpage />
        {/* </motion.div> */}
        </div>
    )
}

export default Mainpage