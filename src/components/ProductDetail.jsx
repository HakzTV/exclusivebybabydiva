import { useState, useEffect, useRef } from 'react';
import ImageModal from './ImageModal';
import PropTypes from 'prop-types';
import { useCart } from './contexts/CartContext';

const ProductDetail = ({ product, onSelectProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [accordion1Open, setAccordion1Open] = useState(true);
    const { addToCart } = useCart(); // Access addToCart from the Cart Context
  
  // const [accordion2Open, setAccordion2Open] = useState(false);
  const carouselRef = useRef(null);
 console.log(product)
  useEffect(() => {
    onSelectProduct(product['product-id']);
  }, [product, onSelectProduct]);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, allImages.length - 1)
    );
  };
  
  
  const handleAddToCart = () => {
    // Create a new product object to align with the CartContext
    const newProduct = {
      ...product,
      id: product['product-id'], // map 'product-id' to 'id'
    };
  
    // Now add the updated product to the cart
    if (newProduct.id && newProduct['product-name']) {
      addToCart(newProduct);
    } else {
      console.error('Invalid product data:', newProduct);
    }
  };
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -180, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 180, behavior: 'smooth' });
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const allImages = [product['product-url'], ...(product['alt-images'] || [])];

  return (
    <div className="content-wrapper mt-30">
      <div className="product-detail">
        <div className="image-container">
          <img
            src={product['product-url']} 
            alt={product['product-name']}
            className="product-image"
            onClick={() => handleImageClick(0)}
          />
        </div>
        <div className="other-images">
          <button className="carousel-button left" onClick={scrollLeft}>
            &lt;
          </button>
          <div className="carousel" ref={carouselRef}>
            {product['alt-images'] && product['alt-images'].length > 0 ? (
              product['alt-images'].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product['product-name']} alternative ${index + 1}`}
                  className="alt-image"
                  onClick={() => handleImageClick(index + 1)}
                />
              ))
            ) : (
              <p>No other images</p>
            )}
          </div>
          <button className="carousel-button right" onClick={scrollRight}>
            &gt;
          </button>
        </div>
      </div>
      <div className="product-info">
        <h2>{product['product-name']}</h2>
        {/* <p>Item Condition: {product['product-details']}</p> */}
        <p>{product['product-details']}</p>
        <div className="accordion-container">
            <button className='btn product-btn' onClick={handleAddToCart}>Add to Cart</button>
            <a href='/checkout' className='btn-alt m-left' >Checkout</a>
          <div className={`accordion ${accordion1Open ? 'open' : ''}`}>
            <div
              className={`accordion-header ${accordion1Open ? 'open' : ''}`}
              onClick={() => setAccordion1Open(!accordion1Open)}
            >
              Product Details
            </div>
            <div className={`accordion-content ${accordion1Open ? 'open' : ''}`}>
              <p><strong>Price:</strong> {product.price}</p>
              {/* <p><strong>Product Name:</strong> {product['product-name']}</p> */}
              <p><strong>Product Details:</strong> {product['product-details']}</p>
            </div>
          </div>
       
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        images={allImages}
        currentIndex={currentIndex}
        onClose={() => setIsModalOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  onSelectProduct: PropTypes.func.isRequired,
};

export default ProductDetail;
