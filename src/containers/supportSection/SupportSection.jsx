import "./supportSection.css";
import serviceIcon from "../../images/supportSection/support.svg";

const ServiceSection = () => {
  return (
    <div className="service-section-main" >
        <div className="service-section-sub container section-padding" >
            <div className="left-section" >
                <img src={serviceIcon} alt="services icon" />
            </div>
            <div className="right-section" >
                <p className="subtext" >IT Support For Business</p>
                <h2>Preparing for your success trusted source in IT services.</h2>
                <div className="info" >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                <ul>
                    <li>Available in 14.1-in. and 16-in. versions.</li>
                    <li>The potential loss of the Touch Bar.</li>
                    <li>High-speed USB 4.0.</li>
                    <li>Which means as the company ramps</li>
                </ul>
                </div>
            </div>
        </div>
        <div className="service-section-image" ></div>
    </div>
  )
}

export default ServiceSection;