import "./serviceSection.css";
import { ServiceCard } from "../../components/index";
import facebookIcon from "../../images/heroIcons/facebook.svg";
import documentryIcon from "../../images/heroIcons/documentry.svg";
import filmsIcon from "../../images/heroIcons/films.svg";
import graphicsIcon from "../../images/heroIcons/graphics.svg";
import youtubeIcon from "../../images/heroIcons/youtube.svg";


const ServiceSection = () => {
    const services = [
        {
            id:1,
            name: "Facebook Posts",
            image: facebookIcon
        },
        {
            id:2,
            name: "Documentry",
            image: documentryIcon
        },
        {
            id:3,
            name: "Graphics",
            image: graphicsIcon
        },
        {
            id:4,
            name: "Short Films",
            image: filmsIcon
        },
        {
            id:5,
            name: "Youtube",
            image: youtubeIcon
        },
        {
            id:6,
            name: "Documentry",
            image: documentryIcon
        },
        {
            id:7,
            name: "Short Films",
            image: filmsIcon
        },
        {
            id:8,
            name: "Graphics",
            image: graphicsIcon
        },
        {
            id:9,
            name: "Facebook Posts",
            image: facebookIcon
        },
        {
            id:10,
            name: "Youtube",
            image: youtubeIcon
        },
        {
            id:11,
            name: "Facebook Posts",
            image: facebookIcon
        },
        {
            id:12,
            name: "Documentry",
            image: documentryIcon
        },
        {
            id:13,
            name: "Graphics",
            image: graphicsIcon
        },
        {
            id:14,
            name: "Short Films",
            image: filmsIcon
        },
        {
            id:15,
            name: "Youtube",
            image: youtubeIcon
        },
        ];
  return (
    <div className="services-section">
        <div className="services-section-body container section-padding">
            <div className="services-section-header">
                <p>It Support For Business</p>
                <h2>We’re Here To Help</h2>
            </div>
            <div className="services-section-cards section-margin" >
                {
                services.map(
                    service => <ServiceCard name={service.name} image={service.image} key={service.id} />
                )
                }
            </div>
        </div>
    </div>
  )
}

export default ServiceSection;