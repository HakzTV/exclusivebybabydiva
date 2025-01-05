// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// const ProductCard = ({ product }) => {
//   const handleProductClick = () => {
//     // Store product data in localStorage when clicked
//     localStorage.setItem('selectedProduct', JSON.stringify(product));
//   };

//   return (
//     <div className="product-card">
//       <Link to={`/product/${product.id}`} target="_blank" onClick={handleProductClick}>
//         <div className="image-container">
//           <img
//             src={product['product-url']}
//             alt={product['product-name']}
//             className="product-image"
//           />
//           <div className="overlay">
//             <span className="bid-now">Order now</span>
//             <span className="bid-now">Add to Cart</span>
//           </div>
          
//         </div>
//         <div className="product-info">
//           <p>{product['product-name']}</p>
//           <p>GHC {product.price}</p>
//         </div>
//       </Link>
//     </div>
//   );
// };

// ProductCard.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.string,
//     'product-name': PropTypes.string,
//     'product-url': PropTypes.string,
//     price: PropTypes.string,
//     'product-details': PropTypes.string, // Optional
//   }),
// };

// export default ProductCard;
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { useCart } from './contexts/CartContext'; // Import the useCart hook

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Access addToCart from the Cart Context

  const handleProductClick = () => {
    // Store product data in localStorage when clicked
    localStorage.setItem('selectedProduct', JSON.stringify(product));
  };

  const handleAddToCart = () => {
    // Ensure product data has the necessary fields before passing to addToCart
    addToCart({
      id: product.id,
      'product-name': product['product-name'],
      price: product.price,
      'product-url': product['product-url'],
    }); // Call addToCart with the correct product fields
  };

  return (
    <div className="product-card">
      <Link to={`/buy/${product.id}`} target="_blank" onClick={handleProductClick}>
        <div className="image-container">
          <img
            src={product['product-url']}
            alt={product['product-name']}
            className="product-image"
          />
          <div className="overlay">
            <span className="bid-now">Order now</span>
            <span className="bid-now" onClick={handleAddToCart}>Add to Cart</span>
          </div>
        </div>
        <div className="product-info">
          <p>{product['product-name']}</p>
          <p>GHC {product.price}</p>
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
