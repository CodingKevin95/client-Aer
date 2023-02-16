import Navbar from '../components/Navbar';
import Homepage from './Homepage';
import Portfolio from './Portfolio';
import Service from './Services';
import Footerpage from './Footerpage';
import { motion } from 'framer-motion'

function Mainpage() {
    return (
        <motion.div transition={{duration: 1}} animate={{ opacity: 1}} initial={{opacity: 0}}>
            <Navbar />
            <Homepage />
            <Service />
            <Portfolio />
            <Footerpage />
    </motion.div>
    )
}

export default Mainpage