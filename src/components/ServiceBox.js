import '../style/Service.css'
import Manicure from './Manicure'
import Pedicure from './Pedicure'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Waxing from './Waxing'


function ServiceBox() {
    return (
        <div className="horizontalScroll">
            <div className='mainSlider'>
            <Manicure />
            <Pedicure />
            <Waxing />
            </div>
        </div>
    )
}

export default ServiceBox