// src/components/HomeFooter.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/images/logo.png';
import { faInstagramSquare, faThreads, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import visa from '../assets/images/mono.png';

const HomeFooter = () => {
    return (  
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="left">
                        <div className="logo">
                            <img src={Logo} alt="Logo" />
                            <span>ExclusiveBabyDivaFL</span>
                        </div>
                        <div className="footer-content">
                            <p>ExclusiveBabyDivaFl stands at the forefront of contemporary and African fashion, blending elegance with cultural richness to create timeless, trendsetting pieces. Our brand celebrates diversity and sophistication, offering luxurious designs that honor African heritage while embracing modern style. At ExclusiveBabyDivaFl, we believe in fashion that empowers and inspires, ensuring that every garment reflects our commitment to quality, creativity, and authenticity in the ever-evolving world of fashion.</p>
                        </div>
                        <div className="footer-socials">
                            <a href="https://www.tiktok.com/@exclusivebabydivafl?_t=8fvtl9wloWr&_r=1">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100063763849264">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://instagram.com/exclusivebabydivafl?igshid=MzMyNGUyNmU2YQ==">
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </a>
                            <a href="https://www.threads.net/@exclusivebabydivafl">
                                <FontAwesomeIcon icon={faThreads} />
                            </a>
                        </div>
                    </div>
                    <div className="right">
                    <div className="bigfooter">

                        <div className="footer-about">
                            <h2 className="footer-about-title">About Us</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/aboutUs">About us</a></li>
                            </ul>
                        </div>
                        <div className="footer-about">
                            <h2 className="footer-about-title">Explore</h2>
                            <ul>
                                <li><a href="/faq">FAQs</a></li>
                                <li><a href="/about-team">Team</a></li>
                            </ul>
                        </div>
                        <div className="footer-about">
                            <h2 className="footer-about-title">Visit Us</h2>
                            <ul>
                                <li><a href="tel:+233543062425"> +233543062425</a></li>
                                <li><a href="mailto:info@exclusivebabydivafl.com">info@exclusivebabydivafl.com</a></li>
                            </ul>
                             {/* Include the Map component here */}
                        </div>

                    </div>
                        <div className="images">
                            <img src={visa} alt="Visa" />
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark-overlay top-overlay"></div>
        </div>
    );
};

export default HomeFooter;
