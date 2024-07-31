// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// // import { useEffect, useState } from 'react';

// const ProductCard = ({ product }) => {
// //   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(product['expiry-Date']));

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setTimeLeft(calculateTimeLeft(product['expiry-Date']));
// //     }, 1000);

// //     return () => clearInterval(timer);
// //   }, [product['expiry-Date']]);

// //   function calculateTimeLeft(expiryDate) {
// //     const difference = new Date(expiryDate) - new Date();
// //     let timeLeft = {};

// //     if (difference > 0) {
// //       timeLeft = {
// //         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
// //         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
// //         minutes: Math.floor((difference / 1000 / 60) % 60),
// //         seconds: Math.floor((difference / 1000) % 60),
// //       };
// //     } else {
// //       timeLeft = { expired: true };
// //     }

// //     return timeLeft;
// //   }

//   return (
//     <div className="product-card">
//       <Link to={`/product/${product['product-id']}`}>
//         <div className="image-container">
//           <img src={product['product-url']} alt={product['product-name']} className="product-image" />
//           <div className="overlay">
//             <span className="bid-now">Order now</span>
//           </div>
//         </div>
//         <div className="product-info">
//           {/* <p>Ends In: {timeLeft.expired ? 'Expired' : `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</p> */}
//           <p>{product['product-name']}</p>
//           <p>{product.price}</p>
//         </div>
//       </Link>
//     </div>
//   );
// };

// ProductCard.propTypes = {
//   product: PropTypes.shape({
//     'product-id': PropTypes.number.isRequired,
//     'product-name': PropTypes.string.isRequired,
//     'product-url': PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     'expiry-Date': PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default ProductCard;
    import { Link } from 'react-router-dom';
    import PropTypes from 'prop-types';

    const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
        <Link to={`/product/${product.id}`}>
            <div className="image-container">
            <img src={product['product-url']} alt={product['product-name']} className="product-image" />
            <div className="overlay">
                <span className="bid-now">Order now</span>
            </div>
            </div>
            <div className="product-info">
            <p>{product['product-name']}</p>
            <p>${product.price}</p>
            </div>
        </Link>
        </div>
    );
    };

    ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        'product-name': PropTypes.string.isRequired,
        'product-url': PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        'product-details': PropTypes.string, // Optional
    }).isRequired,
    };

    export default ProductCard;
