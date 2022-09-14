import InstagramPhoto from '../components/InstagramPhoto'
import PortfolioBanner from '../components/PortfolioBanner'
import '../style/Portfolio.css'

function Portfolio() {
    return (
        <div className="portfolioPage" id='portfolio'>
            <InstagramPhoto />
            <PortfolioBanner />
        </div>
    )
}

export default Portfolio