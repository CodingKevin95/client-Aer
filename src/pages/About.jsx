import '../style/About.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function About () {
    return (
        <div className="about" id="about">
            <div className='topAboutSection'>
                <div className='aboutLine'></div>
                <div className='serviceAboutTitle'>About us</div>
            </div>
            <div className='aboutDetails'>
                <div className="leftSide">
                    <img className='introPhoto1' src={require("../assets/manicureFrontPg.png")} />
                    <img className='introPhoto2' src={require("../assets/manicureFrontPg2.png")} />
                </div>
                <div className="rightSide">
                    <div className='rightSideAbout'>
                        {/* <h1>ABOUT</h1> */}
                        <h5>Come see for yourself why e-file and our talented technicians are the future of manicures!</h5>
                        <p>With its precision and efficiency, the e-file technique creates a long-lasting manicure that's far superior to traditional methods, and, with our team of highly skilled technicians, you can be sure that you're in good hands. They can create classic and timeless looks, as well as one-of-a-kind designs that truly express your individuality.</p>
                        <p>Whether you're looking for a classic look for everyday or a unique design for a special occasion like a wedding, birthday, or first date, our technicians can create timeless classics, as well as a wide range of eye-catching nail designs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}