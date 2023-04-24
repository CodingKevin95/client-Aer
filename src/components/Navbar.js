import '../style/Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-scroll'

function Navbar() {
const [nav, setNav] = useState(false)
const [slide, setSlide] = useState(false)

const handleNav = () => {
    setSlide(!slide)
    setNav(!nav)
}

    return (
        <div className='navbar'>
            <div className='container'>
                <div className={slide ? 'logo slide-right' : 'logo'}>
                <ul className='contactBox'>
                <li className='contactRow'>
                    <a className='contactBtn' href='/'>
                        <Link activeClass='active' to='home' spy={true} smooth={true} duration={500}>
                            aer.
                        </Link>
                        <div className='lineAer'></div>
                    </a>
                </li>   
            </ul> 
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='/'><Link onClick={handleNav} activeClass='active' to='home' spy={true} smooth={true} duration={500}>Home</Link></a></li>
                    <li><a href='/'><Link onClick={handleNav} activeClass='active' to='service' spy={true} smooth={true} duration={500}>Service/Appointment</Link></a></li>
                    <li><a href='/'><Link onClick={handleNav} activeClass='active' to='portfolio' spy={true} smooth={true} duration={500}>Nail Art</Link></a></li>
                    <li><a href='/'><Link onClick={handleNav} activeClass='active' to='contact' spy={true} smooth={true} duration={500}>Contact</Link></a></li>
                </ul>
                <div className='hamburger' onClick={handleNav}>
                    {nav ? (<FaTimes size={20} style={{color: 'rgb(0, 0, 0)'}}/>) : (<FaBars size={20} style={{color: 'rgb(0, 0, 0)'}}/>)}
                </div>                
            </div>

        </div>
    )

}

export default Navbar