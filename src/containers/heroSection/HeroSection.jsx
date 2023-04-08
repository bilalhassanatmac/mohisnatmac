import { motion, AnimatePresence } from "framer-motion";
import "./heroSection.css";
import { HeroCard } from "../../components/index";
import heroBanner from "../../images/heroSection/new-banner.png";
import customer1 from "../../images/customers/customer-1.jpg";
import customer2 from "../../images/customers/customer-2.jpg";
import customer3 from "../../images/customers/customer-3.jpg";
import customer4 from "../../images/customers/customer-4.jpg";
import customer5 from "../../images/customers/customer-5.jpg";
import customer6 from "../../images/customers/customer-6.jpg";
import adIcon from "../../images/heroIcons/advertisment.svg";
import webIcon from "../../images/heroIcons/webdev.svg";
import graphicIcon from "../../images/heroIcons/graphicsdesign.svg";
import whatsappIcon from "../../images/heroSection/whatsapp.svg";
const HeroSection = () => {

  const services = [
    {
      name: "Advertising and Marketing",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, nihil",
      image: adIcon
    },
    {
      name: "Website Development",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, nihil",
      image: webIcon
    },
    {
      name: "Graphic Designing",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, nihil",
      image: graphicIcon
    },
  ];


  return (
    <div className="hero-section" >
    
      <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
      <i class="fa fa-whatsapp my-float">
        <img src={whatsappIcon} alt="" srcset="" />
      </i>
      </a>
      <div className="hero-flex container" >
        <div className="hero-section-left">
          <div className="hero-main" >
          <p>FLAT RATE UI/UX DESIGN</p>
          <h1>We enact our verbal commitments</h1>
          </div>
          <div className="hero-description">
            <p>
            Collaborate with a seasoned product designer to bring your product ideas to life with confidence in two weeks' time.
            </p>
          </div>
          <div className="hero-button">
            <div className="button button-big button-blue">Meet With Us</div>
          </div>
          <div className="customers-section" >
            <div className="customers" >
              <img src={customer1} alt="" />
              <img src={customer2} alt="" />
              <img src={customer3} alt="" />
              <img src={customer4} alt="" />
              <img src={customer5} alt="" />
              <img src={customer6} alt="" />
            </div>
            <div className="review" >
              <p>"Mac Provides best IT Services"</p>
              <p className="total-customers">100+ Satisfied Customers</p>
            </div>
          </div>
        </div>
        <div  className=" hero-section-right">
          <img src={heroBanner} alt="Hero Banner"/>
        </div>
      </div>
      <div class="context">
      </div>
      <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
      {/* <div className="hero-cards-section" >
        <div className="hero-cards container">
          {
            services.map(
              service =>
              (
                <HeroCard name={service.name} image={service.image} info={service.info} key={service.name} />
              )
            )
          }
        </div>
          <div className="hero-cards-info container" >
          <h3>
          Preparing for your success trusted source in IT services
          </h3>
          <div className="button button-big button-blue">View all Services</div>
        </div>
      </div> */}
      <div>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
          </svg>
        </div>
    </div>
  )
}

export default HeroSection;