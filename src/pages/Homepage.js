import HeroBanner from "../components/HeroBanner"
import '../style/Homepage.css'

function Homepage() {
    return (
        <div className="homepage" id='home'>
            <HeroBanner />
            {/* <div className="drop">
                <div className="gaps"></div>
            </div>
            <div className="drop2">
                <div className="gaps2"></div>
            </div> */}
        </div>
    )
}

export default Homepage