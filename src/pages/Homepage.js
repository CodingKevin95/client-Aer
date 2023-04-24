import HeroBanner from "../components/HeroBanner"
import '../style/Homepage.css'

function Homepage() {
    return (
        <div className="homepage" id='home'>
            {/* <div className="leftBackground"></div>
            <div className="rightBackground"></div> */}
            <HeroBanner />
        </div>
    )
}

export default Homepage