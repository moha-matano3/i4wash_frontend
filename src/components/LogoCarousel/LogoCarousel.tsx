import Slider from "react-slick";
import "./LogoCarousel.css";

// Import your logo images
import logo1 from "../../../src/assets/logo/carouselLogos/logo1.png";
import logo2 from "../../../src/assets/logo/carouselLogos/logo2.png";
import logo3 from "../../../src/assets/logo/carouselLogos/logo3.jpeg";
import logo4 from "../../../src/assets/logo/carouselLogos/logo4.jpeg";


const logos = [logo1, logo2, logo3, logo4];

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
