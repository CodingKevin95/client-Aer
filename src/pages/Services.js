import ServiceBox from '../components/ServiceBox'
import '../style/Service.css'

function Service() {

    return (
        <div className="servicePage" id="service">
            <ServiceBox />
            <div className='detailsForBtn'>
                For more services, add-ons, and details click the "appointments" button below
            </div>
            <a href='https://go.booker.com/location/AerNailBar/service-menu' target="_blank" rel="noreferrer">
                <button className='serviceBtn'>Appointments</button>
            </a>
            <a href='https://go.booker.com/location/AerNailBar/buy/gift-certificate' target="_blank" rel="noreferrer">
                <button className='serviceBtn'>Gift Card</button>
            </a>
        </div>
    )
}

export default Service