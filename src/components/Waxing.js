import '../style/Service.css'

function Waxing() {

    let waxingService = [
        {
            serviceName: "Chin",
            price: "15"
        },
        {
            serviceName: "Brows",
            price: "20"
        },
        {
            serviceName: "Bikini",
            price: "40"
        },
        {
            serviceName: "Full Arms",
            price: "50"
        },
        {
            serviceName: "Brazilian",
            price: "75"
        },
        {
            serviceName: "Full Legs",
            price: "85"
        },
    ]

    return (
        <div className="pedicureBox">
            <p className='priceTitle'>Waxing</p>
            <div className='manicurePrice'>
            { waxingService.map((service) => {
                    return (
                        <div class="services-card">
                            <p class="services-card">{service.serviceName} || {service.price}</p>
                        </div>
                    );
                }) }
            </div>
        </div>
    )
}

export default Waxing