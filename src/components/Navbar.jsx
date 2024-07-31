import { useEffect, useState } from 'react';
import Logo from '../assets/images/Diva-Logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <div className="links">
                        <ul>
                            <li><a href="/aboutUs">About Us</a></li>
                            <li><a href="/products">Shop</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="logo">
                    <a href="/" className="logo">

                        <img src={Logo} alt="Logo" />
                        <span>Exclusive Baby Diva</span>
                    </a>
                    </div>
                    <div className="action-buttons">
                        <a href="/" className="btn-alt ">
                            <div className="pulse-ring"></div>
                            <div className="outline"></div>
                            Gallery
                        </a>
                        <a href="/" className="btn">
                            Book now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
