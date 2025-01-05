import { useEffect, useState, useRef } from 'react';
import Logo from '../assets/images/logo.png';
// import { auth } from '../firebase';
// import { onAuthStateChanged } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars, faTimes, faCaretDown, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './contexts/CartContext'; // Using the CartContext here
import SearchIcon from './SearchIcon';

const Navbar = () => {
    // const [isScrolled, setIsScrolled] = useState(false);
    // // const [authUser, setAuthUser] = useState(null);
    // const [menuOpen, setMenuOpen] = useState(false);
    // const [dropdownOpen, setDropdownOpen] = useState(false);
    // const [isCartOpentwo, setIsCartOpentwo] = useState(false);
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const { cart, removeFromCart } = useCart();  // Destructure from CartContext
    // const cartRef = useRef(null);  // 
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false); // Unified cart state
    const { cart, removeFromCart } = useCart();
    const cartRef = useRef(null);
    //remove cart
    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);  // Call removeFromCart from context
    };
    //scroll
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

    //Auth change
    // useEffect(() => {
    //     const listen = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setAuthUser(user);
    //             const uid = user.uid;
    //             console.log(uid);
    //         } else {
    //             setAuthUser(null);
    //         }
    //     });
    //     return () => {
    //         listen();
    //     };
    // }, []);

    // const userSignOut = () => {
    //     signOut(auth).then(() => {
    //         console.log('sign out');
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // };
    //toggle

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    //dropdown
    // const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleDropdown = (event) => {
        event.preventDefault(); // Prevent default link-like behavior
        setDropdownOpen(!dropdownOpen);
    };
    
    // Close cart when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    

    const checkout = () => {
        // Save the cart data to localStorage before navigating to checkout
        localStorage.setItem('cart', JSON.stringify(cart));
    };


    return (
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                <div
                                    className="cart-icon mobi"
                                    onClick={() => setIsCartOpen(!isCartOpen)} // Toggle cart on click
                                    ref={cartRef}
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    <span className="cart-count">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>

                                    {isCartOpen && (
                                        <div className="cart-dropdown">
                                            {cart.length > 0 ? (
                                                <ul>
                                                    {cart.map((item) => (
                                                        <li key={item.id}>
                                                            {item['product-name']} x {item.quantity}
                                                            <button
                                                                onClick={() => handleRemoveFromCart(item.id)}
                                                                className="remove-btn"
                                                            >
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>Your cart is empty</p>
                                            )}
                                            <div className="pt-20">
                                                <a href="/checkout" className="btn" onClick={checkout}>
                                                    Checkout
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                    {/* Off-canvas menu */}
                    <div className={`offcanvas-menu ${menuOpen ? 'open' : ''}`}>
                        <div className="hamburger-menu" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                        </div>
                        <div className="links">
                        <ul>
                                <li><a href="/aboutUs">About Us</a></li>
                                <li><a href="/about-team">Team</a></li>
                                <li>
    <a href='#'
     
        onClick={(e) => toggleDropdown(e)} // Pass the event to toggleDropdown
    >
        Shop <FontAwesomeIcon icon={faCaretDown} />
    </a>
    {dropdownOpen && (
        <ul className="dropdown">
            <li><a href="/male">Male</a></li>
            <li><a href="/female">Female</a></li>
            <li><a href="/kids">Kids</a></li>
        </ul>
    )}
</li>

                                <li><a href="/faq">FAQs</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                            <div className="action-buttons">
                        {/* Cart Icon */}
                      

                        <SearchIcon />
                        <a href="/gallery" className="btn-alt">
                            <div className="pulse-ring"></div>
                            <div className="outline"></div>
                            Gallery
                        </a>
                    </div>
                        </div>
                    </div>
                    {/* Regular navbar content */}
                   
                    <div className="links">
                    <ul>
                                <li><a href="/aboutUs">About Us</a></li>
                                <li><a href="/about-team">Team</a></li>
                                <li>
                                    <a href="/products" onClick={toggleDropdown}>
                                        Shop <FontAwesomeIcon icon={faCaretDown} />
                                    </a>
                                    {dropdownOpen && (
                                        <ul className="dropdown">
                                            <li><a href="/male">Male</a></li>
                                            <li><a href="/female">Female</a></li>
                                            <li><a href="/kids">Kids</a></li>
                                        </ul>
                                    )}
                                </li>
                                <li><a href="/faq">FAQs</a></li>
                            <li><a href="/contact">Contact</a></li>

                            </ul>
                    </div>
                    <div className="logo">
                        <a href="/" className="logo">
                            <img src={Logo} alt="Logo" />
                            <span>ExclusiveBabyDivaFL</span>
                        </a>
                    </div>
                    <div className="action-buttons">
                        {/* Cart Icon */}
                        <div 
                            className="cart-icon" 
                            onMouseEnter={() => setIsCartOpen(true)}
                            onMouseLeave={() => setIsCartOpen(true)}  // Keep the cart open on hover
                            ref={cartRef}  // Attach the cart ref here
                        >
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span className="cart-count">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>

                            {isCartOpen && (
                                <div className="cart-dropdown">
                                    {cart.length > 0 ? (
                                        <ul>
                                            {cart.map((item) => (
                                                <li key={item.id}>
                                                    {item['product-name']} x {item.quantity}
                                                    <button
                                                        onClick={() => handleRemoveFromCart(item.id)} 
                                                        className="remove-btn"
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>Your cart is empty</p>
                                    )}
                                    <div className="pt-20">

                                    <a href="/checkout" className="btn " onClick={checkout}>
                                        Checkout
                                    </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <SearchIcon />
                        <a href="/gallery" className="btn-alt">
                            <div className="pulse-ring"></div>
                            <div className="outline"></div>
                            Gallery
                        </a>
                    </div>
                    <div className="hamburger-menu" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

// import { useEffect, useState, useRef } from 'react';
// import Logo from '../assets/images/logo.png';
// import { auth } from '../firebase';
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faBars, faTimes, faCaretDown, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { useCart } from './contexts/CartContext'; // Using the CartContext here
// import SearchIcon from './SearchIcon';

// const Navbar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [authUser, setAuthUser] = useState(null);
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [isCartOpen, setIsCartOpen] = useState(false);
//     const { cart, removeFromCart } = useCart();  // Destructure from CartContext
//     const cartRef = useRef(null);  // Reference for cart dropdown

//     const handleRemoveFromCart = (productId) => {
//         removeFromCart(productId);  // Call removeFromCart from context
//     };

//     const toggleMenu = () => setMenuOpen(!menuOpen);
//     const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//     useEffect(() => {
//         const handleScroll = () => {
//             const offset = window.scrollY;
//             setIsScrolled(offset > 0);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     useEffect(() => {
//         const listen = onAuthStateChanged(auth, (user) => {
//             setAuthUser(user ? user : null);
//         });
//         return () => listen();
//     }, []);

//     const userSignOut = () => {
//         signOut(auth).then(() => console.log('sign out')).catch(console.error);
//     };

//     // Close cart when clicking outside of it
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (cartRef.current && !cartRef.current.contains(event.target)) {
//                 setIsCartOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     const checkout = () => {
//         // Save the cart data to localStorage before navigating to checkout
//         localStorage.setItem('cart', JSON.stringify(cart));
//     };

//     return (
//         <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
//             <div className="container">
//                 <div className="navbar-content">
//                     {/* Off-canvas menu */}
//                     <div className={`offcanvas-menu ${menuOpen ? 'open' : ''}`}>
//                         <div className="hamburger-menu" onClick={toggleMenu}>
//                             <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
//                         </div>
//                         <div className="links">
//                             <ul>
//                                 <li><a href="/aboutUs">About Us</a></li>
//                                 <li><a href="/about-team">Team</a></li>
//                                 <li>
//                                     <a href="/products" onClick={toggleDropdown}>
//                                         Shop <FontAwesomeIcon icon={faCaretDown} />
//                                     </a>
//                                     {dropdownOpen && (
//                                         <ul className="dropdown">
//                                             <li><a href="/products/male">Male</a></li>
//                                             <li><a href="/products/female">Female</a></li>
//                                             <li><a href="/products/kids">Kids</a></li>
//                                         </ul>
//                                     )}
//                                 </li>
//                                 <li><a href="/faq">FAQs</a></li>
//                                 <li><a href="/contact">Contact</a></li>
//                             </ul>
//                             <div className="action-buttons">
//                                 <a href="/gallery" className="btn-alt">
//                                     <div className="pulse-ring"></div>
//                                     <div className="outline"></div>
//                                     Gallery
//                                 </a>
//                                 {authUser ? (
//                                     <div className="profile-dropdown">
//                                         <FontAwesomeIcon icon={faUser} className="profile-icon" />
//                                         <div className="dropdown-content">
//                                             <a href="/">My Account</a>
//                                             <button onClick={userSignOut}>Sign out</button>
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     <a href="/login" className="btn">Login</a>
//                                 )}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Regular navbar content */}
//                     <div className="links">
//                         <ul>
//                             <li><a href="/aboutUs">About Us</a></li>
//                             <li><a href="/about-team">Team</a></li>
//                             <li
//                                 className="dropdown-wrapper"
//                                 onMouseEnter={() => setDropdownOpen(true)}
//                                 onMouseLeave={() => setDropdownOpen(false)}
//                             >
//                                 <a href="/products">
//                                     Shop <FontAwesomeIcon icon={faCaretDown} />
//                                 </a>
//                                 {dropdownOpen && (
//                                     <ul className="dropdown">
//                                         <li><a href="/products/male">Male</a></li>
//                                         <li><a href="/products/female">Female</a></li>
//                                         <li><a href="/products/kids">Kids</a></li>
//                                     </ul>
//                                 )}
//                             </li>
//                             <li><a href="/faq">FAQs</a></li>
//                             <li><a href="/contact">Contact</a></li>
//                         </ul>
//                     </div>
//                     <div className="logo">
//                         <a href="/" className="logo">
//                             <img src={Logo} alt="Logo" />
//                             <span>ExclusiveBabyDivaFL</span>
//                         </a>
//                     </div>

//                     <div className="action-buttons">
//                         {/* Cart Icon */}
//                         <div 
//                             className="cart-icon" 
//                             onMouseEnter={() => setIsCartOpen(true)}
//                             onMouseLeave={() => setIsCartOpen(true)}  // Keep the cart open on hover
//                             ref={cartRef}  // Attach the cart ref here
//                         >
//                             <FontAwesomeIcon icon={faShoppingCart} />
//                             <span className="cart-count">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>

//                             {isCartOpen && (
//                                 <div className="cart-dropdown">
//                                     {cart.length > 0 ? (
//                                         <ul>
//                                             {cart.map((item) => (
//                                                 <li key={item.id}>
//                                                     {item['product-name']} x {item.quantity}
//                                                     <button
//                                                         onClick={() => handleRemoveFromCart(item.id)} 
//                                                         className="remove-btn"
//                                                     >
//                                                         <FontAwesomeIcon icon={faTrash} />
//                                                     </button>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     ) : (
//                                         <p>Your cart is empty</p>
//                                     )}
//                                     <div className="pt-20">

//                                     <a href="/checkout" className="btn " onClick={checkout}>
//                                         Checkout
//                                     </a>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                         <SearchIcon />
//                         <a href="/gallery" className="btn-alt">
//                             <div className="pulse-ring"></div>
//                             <div className="outline"></div>
//                             Gallery
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
