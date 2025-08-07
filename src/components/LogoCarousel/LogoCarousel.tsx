import Slider from "react-slick";
import "./LogoCarousel.css";

// Import your logo images
import logo1 from "../../../src/assets/icons/add.svg";
import logo2 from "../../../src/assets/icons/add.svg";
import logo3 from "../../../src/assets/icons/add.svg";
import logo4 from "../../../src/assets/icons/add.svg";
import logo5 from "../../../src/assets/icons/add.svg";
import logo6 from "../../../src/assets/icons/add.svg";
import logo7 from "../../../src/assets/icons/add.svg";
import logo8 from "../../../src/assets/icons/add.svg";
import logo9 from "../../../src/assets/icons/add.svg";
import logo10 from "../../../src/assets/icons/add.svg";
import logo11 from "../../../src/assets/icons/add.svg";
import logo12 from "../../../src/assets/icons/add.svg";
import logo13 from "../../../src/assets/icons/add.svg";
import logo14 from "../../../src/assets/icons/add.svg";
import logo15 from "../../../src/assets/icons/add.svg";
import logo16 from "../../../src/assets/icons/add.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11,logo12,logo13,logo14,logo15,logo16];

export default function LogoCarousel() {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="logo-carousel-wrapper">
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="logo-slide">
                        <img src={logo} alt={`logo-${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
