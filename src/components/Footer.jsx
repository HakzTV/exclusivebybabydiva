import PropTypes from 'prop-types'; // Import PropTypes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/images/logo.png';
import visa from '../assets/images/mono.png';
import { faInstagramSquare, faPinterestP, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';

const Footer = ({ className }) => {
    return (  
        <div className={`footer ewl ${className}`}>
            <div className="container">
                <div className="footer-content">
                    <div className="left">
                        <div className="logo">
                            <img src={Logo} alt="Logo" />
                            <span>ExclusiveBabyDivaFL</span>
                        </div>
                        <div className="footer-content">
                            <p>ExclusiveBabyDivaFl stands at the forefront of contemporary and African fashion, blending elegance with cultural richness to create timeless, trendsetting pieces. Our brand celebrates diversity and sophistication, offering luxurious designs that honor African heritage while embracing modern style. </p>
                        </div>
                        <div className="footer-socials">
                            <a href="/">
                                <FontAwesomeIcon icon={faPinterestP} />
                            </a>
                            <a href="/">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="/">
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </a>
                            <a href="/">
                                <FontAwesomeIcon icon={faYoutube} />
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

// Define prop types for Footer component
Footer.propTypes = {
    className: PropTypes.string, // Specify that className is a string
};

// Default props
Footer.defaultProps = {
    className: '', // Default value for className
};

export default Footer;
