// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from './Footer';
// import Navbar from './Navbar';

// const Checkout = () => {
//   const navigate = useNavigate();

//   const [cart, setCart] = useState([]);
//   const [userInfo, setUserInfo] = useState({
//     name: '',
//     address: '',
//     phone: '',
//     message:'',
//   });

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    
//     console.log("Loaded Cart from localStorage:", savedCart);
//     setCart(savedCart);
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserInfo((prevInfo) => ({
//       ...prevInfo,
//       [name]: value,
//     }));
//   };

//   const handleCheckoutSubmit = (e) => {
//     e.preventDefault();
//     console.log('Checkout Data:', userInfo, cart);

//     // After submitting, you might want to clear the cart in localStorage
//     localStorage.removeItem('cart');

//     // Redirect to a success page
//     navigate('/success');
//   };

//   if (!cart) {
//     return <div>Loading cart...</div>; // Handle loading state
//   }

//   return (
//     <div className="page">
//         <Navbar />
//     <div className="container">
//       <h2>Checkout</h2>
      
//       {/* User Info Form */}
//       <form onSubmit={handleCheckoutSubmit}>
//           <h3 className='cart-style'>Your Cart</h3> 
//       <div className="form-wrap">
//  {/* Cart Preview */}
//  <div className="cart-preview">
//           {cart.length > 0 ? (
//             <div className="cart-items">
//               {cart.map((item) => (
//                 <div className="cart-item" key={item.id}>
//                   <img  src={item['product-url']} alt={item['product-name']} />
//                   <div>
//                     <p>{item['product-name']}</p>
//                     <p>Quantity: {item.quantity}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>Your cart is empty</p>
//           )}
//         </div>
//         <div className="user-info">
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={userInfo.name}
//               onChange={handleInputChange}
//               required
//             />
//           </label>
//           <label>
//             Address:
//             <input
//               type="text"
//               name="address"
//               value={userInfo.address}
//               onChange={handleInputChange}
//               required
//             />
//           </label>
//           <label>
//             Phone:
//             <input
//               type="text"
//               name="phone"
//               value={userInfo.phone}
//               onChange={handleInputChange}
//               required
//             />
//           </label>
//           <label>
//             Message:
//             <textarea 
//             name="message" 
//             value={userInfo.message}
//             onChange={handleInputChange}
//             ></textarea>
//           </label>

//            {/* Checkout Button */}
//         <button type="submit" className="checkout-btn">
//           Proceed to Checkout
//         </button>
//         </div>

       
//       </div>

       
//       </form>
//     </div>
//     <Footer /> 
//     </div>
//   );
// };

// export default Checkout;
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import emailjs from 'emailjs-com'; // Import emailjs for sending emails
import Modal from './Modal'; // Import Modal component

const Checkout = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Initialize EmailJS with the public key
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS); // Ensure you have this in your .env
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Loaded Cart from localStorage:', savedCart);
    setCart(savedCart);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert('Your cart is empty! Please add items before proceeding.');
      return;
    }

    const emailTemplateParams = {
      to_email: userInfo.email, // Send email to the customer's email
      additional_email: 'exclusivebabydivafl@gmail.com', // Send email to your business email
      user_name: userInfo.name,
      user_email: userInfo.email,
      user_address: userInfo.address,
      user_phone: userInfo.phone,
      user_message: userInfo.message,
      cart_details: cart
        .map((item) => `${item['product-name']} (x${item.quantity})`)
        .join(', '),
    };

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID, // Your EmailJS service ID
        import.meta.env.VITE_EMAIL_TEMPLATE, // Your EmailJS template ID
        emailTemplateParams
      );

      // Show modal upon success
      setShowModal(true);

      // Clear the cart after a successful checkout
      localStorage.removeItem('cart');
      setCart([]);

      // Redirect to a success page after 2 seconds (delay for modal to be visible)
      setTimeout(() => navigate('/success'), 2000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send your order. Please try again.');
    }
  };

  if (!cart) {
    return <div>Loading cart...</div>; // Handle loading state
  }

  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <h2>Checkout</h2>

        {/* User Info Form */}
        <form onSubmit={handleCheckoutSubmit}>
          <h3 className="cart-style">Your Cart</h3>
          <div className="form-wrap">
            {/* Cart Preview */}
            <div className="cart-preview">
              {cart.length > 0 ? (
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img
                        src={item['product-url']}
                        alt={item['product-name']}
                      />
                      <div>
                        <p>{item['product-name']}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
            <div className="user-info">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Email: {/* Added email input */}
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={userInfo.address}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={userInfo.message}
                  onChange={handleInputChange}
                ></textarea>
              </label>

              {/* Checkout Button */}
              <button type="submit" className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer  className="gonelol2"/>

      {/* Modal for success feedback */}
      <div className="supwe">

      <Modal showModal={showModal} onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
};

export default Checkout;
