
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-router-dom';

const Modal = ({ showModal, onClose }) => {
  if (!showModal) return null; // Don't render the modal if `showModal` is false

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your purchase. We are processing your order.</p>
        <Link to={`/`}>



        <button className="modal-btn" onClick={onClose}>
          Close
        </button>
        </Link>
      </div>
    </div>
  );
};

// Define prop types
Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,  // showModal should be a boolean and required
  onClose: PropTypes.func.isRequired,    // onClose should be a function and required
};

export default Modal;
