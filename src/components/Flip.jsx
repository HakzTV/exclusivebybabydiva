import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Flipybook = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = pages.length;
  const [isFlipping, setIsFlipping] = useState(false);
  const flipRef = useRef(null);

  // Swipe handling
  const handleSwipe = (direction) => {
    if (direction === 'left' && currentPage < totalPages - 1) {
      triggerFlip('next');
    } else if (direction === 'right' && currentPage > 0) {
      triggerFlip('previous');
    }
  };

  // Trigger page flip animation
  const triggerFlip = (direction) => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage((prevPage) => (direction === 'next' ? prevPage + 1 : prevPage - 1));
      setIsFlipping(false);
    }, 600); // Duration for the flip animation
  };

  // Mouse down to start swipe
  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const handleMouseMove = (moveEvent) => {
      const distance = moveEvent.clientX - startX;
      if (distance < -100) {
        handleSwipe('left');
        cleanUp();
      } else if (distance > 100) {
        handleSwipe('right');
        cleanUp();
      }
    };

    const cleanUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseUp = () => {
      cleanUp();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const goToPreviousPage = () => {
    if (currentPage > 0 && !isFlipping) {
      triggerFlip('previous');
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      triggerFlip('next');
    }
  };

  const renderPageContent = (side) => {
    const page = pages[currentPage];
    if (side === 'left') {
      return (
        <>
          <img src={page?.image} alt={`Page ${currentPage + 1}`} className="page-image" />
          <p className="page-content">{page?.contentLeft}</p>

        </>
      );
    } else if (side === 'right') {
      return (
        <>
          <img src={page?.image} alt={`Page ${currentPage + 1}`} className="page-image" />
          <p className="page-content">{page?.contentRight}</p>
                    <p className="page-content">{pages[currentPage]?.content}</p>
        </>
      );
    }
    return null; // Keep the other side blank
  };

  return (
    <div className="flipbook-container" ref={flipRef} onMouseDown={handleMouseDown}>
      <div className={`flipbook ${isFlipping ? 'flipping' : ''}`}>
        <div className={`book-page page-left ${isFlipping ? 'flip-left' : ''}`}>
          {renderPageContent('left')}
        </div>
        <div className={`book-page page-right ${isFlipping ? 'flip-right' : ''}`}>
          {renderPageContent('right')}
        </div>
      </div>
      <div className="page-controls">
  <button
    onClick={goToPreviousPage}
    disabled={currentPage === 0}
    className="arrow-button"
    style={{ display: currentPage === 0 ? 'none' : 'inline-block' }}
  >
    &#8592;
  </button>
  <span className="page-number">Page {currentPage + 1} of {totalPages}</span>
  <button
    onClick={goToNextPage}
    disabled={currentPage === totalPages - 1}
    className="arrow-button"
    style={{ display: currentPage === totalPages - 1 ? 'none' : 'inline-block' }}
  >
    &#8594;
  </button>
</div>

      
    </div>
  );
};

Flipybook.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      contentLeft: PropTypes.string.isRequired,
      contentRight: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Flipybook;
