import { useState, useEffect } from 'react';
import ImageModal from './ImageModal';
import PropTypes from 'prop-types';

const ProductDetail = ({ product, onSelectProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [accordion1Open, setAccordion1Open] = useState(true);
  const [accordion2Open, setAccordion2Open] = useState(false);

  useEffect(() => {
    onSelectProduct(product['product-id']);
  }, [product, onSelectProduct]);

  const handleImageClick = index => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      Math.min(prevIndex + 1, product['alt-images'] ? product['alt-images'].length : 0)
    );
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const allImages = [product['product-url'], ...(product['alt-images'] || [])];

  return (
    <div className="content-wrapper mt-30">
      <div className="other-images">
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
      <div className="product-detail">
        <div className="image-container">
          <img
            src={product['product-url']}
            alt={product['product-name']}
            className="product-image"
            onClick={() => handleImageClick(0)}
          />
        </div>
      </div>
      <div className="product-info">
        <h2>{product['product-name']}</h2>
        <p>Item Condition: {product['item-condition']}</p>
        <p>{product['product-details']}</p>
        <div className="accordion-container">
          <div className={`accordion ${accordion1Open ? 'open' : ''}`}>
            <div
              className={`accordion-header ${accordion1Open ? 'open' : ''}`}
              onClick={() => setAccordion1Open(!accordion1Open)}
            >
              Product Details
            </div>
            <div className={`accordion-content ${accordion1Open ? 'open' : ''}`}>
              <p><strong>Price:</strong> {product.price}</p>
              <p><strong>Expiry Date:</strong> {product['expiry-Date']}</p>
              <p><strong>Condition:</strong> {product['item-condition']}</p>
            </div>
          </div>
          <div className={`accordion ${accordion2Open ? 'open' : ''}`}>
            <div
              className={`accordion-header ${accordion2Open ? 'open' : ''}`}
              onClick={() => setAccordion2Open(!accordion2Open)}
            >
              More Details
            </div>
            <div className={`accordion-content ${accordion2Open ? 'open' : ''}`}>
              <p><strong>Product Name:</strong> {product['product-name']}</p>
              <p><strong>Product Details:</strong> {product['product-details']}</p>
              <p><strong>Additional Information:</strong> {product['additional-info']}</p>
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
