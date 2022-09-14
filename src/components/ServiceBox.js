import '../style/Service.css'
import Manicure from './Manicure'
import Pedicure from './Pedicure'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Waxing from './Waxing'

function ServiceBox() {
    return (
        <div className="horizontalScroll">
            <div className='mainSlider'>
            {/* <MdChevronLeft className='slider-icon left' size={'3rem'}/> */}
            <Manicure />
            <Pedicure />
            <Waxing />
            {/* <MdChevronRight className='slider-icon right' size={'3rem'}/> */}
            </div>
        </div>
    )
}

export default ServiceBox