import PortfolioBanner from '../components/PortfolioBanner'
import '../style/Portfolio.css'
import PinterestLayout from '../components/PinterestLayout'

function Portfolio() {
    return (
        <div className="portfolioPage" id='portfolio'>
            <div className='topPortfolioSection'>
                <div className='portfolioLine'></div>
                <div className='servicePortfolioTitle'>Nail art</div>
            </div>
            <PinterestLayout />
            <PortfolioBanner />
        </div>
    )
}

export default Portfolio