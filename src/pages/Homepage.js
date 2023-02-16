import HeroBanner from "../components/HeroBanner"
import '../style/Homepage.css'

function Homepage() {
    return (
        <div className="homepage" id='home'>
            <HeroBanner />
            <div className="play-holder">
                <div className="player-thumb">
                </div>
            </div>
            {/* <img className="manicurephoto" src={require("../assets/manicure.jpg")} /> */}
            <img className="manicurephoto2" src={require("../assets/try.jpg")} />
            <img className="manicurephoto3" src={require("../assets/try2.jpg")} />
        </div>
    )
}

export default Homepage