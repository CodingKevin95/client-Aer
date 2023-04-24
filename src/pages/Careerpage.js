import { NavLink } from "react-router-dom"
import "../style/Careerpage.css"

function Careerpage() {
    return (
        <div className="careerpage">
            <div className="careerbox">
                <div className="backBtnBox">
                    <NavLink className="backBtn" to="/">aer.</NavLink>
                    <div className='lineAer2'></div>
                </div>
                <h1>Join Our Team</h1>
                <p>
                    We are seeking an experienced front desk associate with great customer service, passionate nail technicians and aestheticians that enjoy what they do. We would LOVE to have you on our team!
                </p>
                <h1>Apply Now</h1>
                <p>
                    Please email a resume, contact info and cover letter (optional) to <a href="mailto:hello@aernailbar.com">hello@aernailbar.com</a>
                </p>
                <h1>Positions Available</h1>
                <p>Front Desk Associate <br />
                    Nail Technician <br />
                    Waxing & Esthetics
                </p>
            </div>
        </div>
    )
}

export default Careerpage