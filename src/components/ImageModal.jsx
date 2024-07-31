import PropTypes from 'prop-types';

const ImageModal = ({ isOpen, images, currentIndex, onClose, onPrev, onNext }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        {currentIndex > 0 && (
          <span className="prev-button" onClick={onPrev}>&#9664;</span>
        )}
        <img src={images[currentIndex]} alt="Product" className="modal-image" />
        {currentIndex < images.length - 1 && (
          <span className="next-button" onClick={onNext}>&#9654;</span>
        )}
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default ImageModal;
