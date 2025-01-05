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
        <p>Exclusive Baby Diva Fl is an emerging brand dedicated to showcasing bold, innovative fashion that merges art and style. Our digital gallery features a curated collection of unique and exquisite garments, each piece carefully crafted to make a statement. As a new force in the fashion world, we are building a legacy of creativity and vision, celebrating the artistry and inspiration behind every design. Explore our ever-evolving collection and experience the cutting-edge of fashion, where every garment tells a story of passion and innovation.</p>
      </div>

      <div className="content-link">
        <a href="/gallery" className="btn-line">
        EXPLORE THE AFRICAN ART ARCHIVE
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
      productUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductDisplay;
