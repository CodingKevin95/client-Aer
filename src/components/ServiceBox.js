import '../style/Service.css'
import Manicure from './Manicure'
import Pedicure from './Pedicure'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Waxing from './Waxing'
import ManicureCRUD from './ManicureCRUD'
import PedicureCRUD from './PedicureCRUD'
import WaxCRUD from './WaxCRUD'

function ServiceBox() {
    return (
        <div className="horizontalScroll">
            <div className='mainSlider'>
            <ManicureCRUD />
            {/* <Manicure /> */}
            <PedicureCRUD />
            {/* <Pedicure /> */}
            {/* <Waxing /> */}
            <WaxCRUD />
            </div>
        </div>
    )
}

export default ServiceBox