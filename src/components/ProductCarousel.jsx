// ProductCarousel.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ useState } from 'react';
import PropTypes from 'prop-types';
import goldLeft from '../assets/images/gold-sparkless-left.png';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="product-carousel">
      <div className="product-carousel-content">
      <div className="product-carousel-content">

      <img src={goldLeft} alt="" className="obtained" />
        <img
          className="product-image"
          src={products[currentIndex]['product-url']}
          alt={products[currentIndex].title}
        />
      </div>
        <div className="product-info">
        <div className="carousel-buttons">
        <button className="outline2" onClick={prevProduct}><FontAwesomeIcon icon={faChevronLeft}/></button>
        <button className="outline2" onClick={nextProduct}><FontAwesomeIcon icon={faChevronRight}/></button>
      </div>
        <div className='product-view'>
        <div>
          <h3>{products[currentIndex].title}</h3>

          <p> {products[currentIndex].author}</p>
        </div>
        <div>

          <p> {products[currentIndex].country}</p>
          <p>{products[currentIndex].year}</p>
        </div>
          <a href={products[currentIndex].link} className='btn-line'>View Garment</a>
        </div>

      
        </div>
      </div>
    </div>
  );
};

ProductCarousel.propTypes = {
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

export default ProductCarousel;
