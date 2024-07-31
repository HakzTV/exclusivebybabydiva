import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/images/Diva-Logo.png';
import {   faInstagramSquare,  faPinterestP, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import instagram from '../assets/images/Social-Icons-1.png'

// import twitter from '../assets/images/Social-Icons-2.png'
// import facebook from '../assets/images/Social-Icons-3.png'
// import tiktok from  '../assets/images/Social-Icons-4.png'

const Footer = () => {
    return (  
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="left">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                        <span>Exclusive Baby Diva</span>
                    </div>
                    <div className="footer-content">
                        <p>s a world renowned wearable art experience, where an annual design competition culminates in a spectacular show combining theatre, art, fashion, music, & performance.</p>
                    </div>
                    <div className="footer-socials">
                    <a href="/">

                    <FontAwesomeIcon  icon={faPinterestP} />
                    </a>
                    <a href="/">
                        
                    <FontAwesomeIcon  icon={faFacebookF} />
                    </a>
                    <a href="/">
                        
                    <FontAwesomeIcon  icon={faInstagramSquare} />
                    </a>
                    <a href="/">
                        
                    <FontAwesomeIcon  icon={faYoutube} />
                    </a>

                    </div>
                    </div>
                    <div className="right">
                        <div className="footer-about">
                        <h2 className="footer-about-title">About Us</h2>
                            <ul>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Text 01</a></li>
                                <li><a href="/">Text 02</a></li>
                            </ul>
                        </div>
                        <div className="footer-about">
                        <h2 className="footer-about-title">Explore</h2>
                            <ul>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Text 01</a></li>
                                <li><a href="/">Text 02</a></li>
                            </ul>
                        </div>
                        <div className="footer-about">
                        <h2 className="footer-about-title">About Us</h2>
                            <ul>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Text 01</a></li>
                                <li><a href="/">Text 02</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
      <div className="dark-overlay top-overlay"></div>

        </div>
    );
}
 
export default Footer;