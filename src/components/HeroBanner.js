import '../style/Homepage.css'
import { motion } from "framer-motion"

function HeroBanner() {
    return (
        <motion.div transition={{duration: 2}} animate={{ opacity: 1}} initial={{opacity: 0}} className="sloganBox">
            {/* <p className='sloganSentence'>Let us help you live <p className="text animatedText">Colorfully.<br/>Live you!</p></p> */}
            <p className="text animatedText">Live Colorfully.<br/>Live You!</p>
        </motion.div>
    )
}

export default HeroBanner