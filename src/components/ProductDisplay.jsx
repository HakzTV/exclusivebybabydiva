// ProductDisplay.js

import PropTypes from 'prop-types';
import ProductCarousel from './ProductCarousel';

const ProductDisplay = ({ products }) => {
  return (
    <div className="product-display-wrapper">
    <div className="container">
    <div className="product-display">

    <div className="display-content">

      <span>CUTTING EDGE ART
      </span>
      <span>PUSHING CREATIVE LIMITS</span>

      <div className="content-body">
        <p>Each year, winners of WOW Awards are added to an incredible collection of garments. Here you can browse through our digital collection of groundbreaking wearable art as previously seen on the WOW stage. You will read about the designers and the inspiration behind these stunning works of art and see their impressive awards and accolades.</p>
      </div>

      <div className="content-link">
        <a href="/" className="btn-line">
        EXPLORE THE WEARABLE ART ARCHIVE
        </a>
      </div>
    </div>
        <div className="display-content">

      <ProductCarousel products={products} />
        </div>
    </div>
    </div>
    </div>

  );
};

ProductDisplay.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      'product-url': PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductDisplay;
