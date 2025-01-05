import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; // Assuming firebase.js is correctly set up
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import scissors from '../assets/images/scissors.svg'; // Import your image
import WhatsAppChat from '../components/WhatsappChat';

const GalleryOverview = () => {
  const [galleries, setGalleries] = useState([]);
  const [filteredGalleries, setFilteredGalleries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const galleryCollection = collection(db, 'Gallery');
        const gallerySnapshot = await getDocs(galleryCollection);
        const galleriesData = gallerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        setGalleries(galleriesData);
        setFilteredGalleries(galleriesData); // Initially show all galleries
      } catch (error) {
        console.error('Error fetching galleries:', error);
      }
    };

    fetchGalleries();
  }, []);

  const handleSearch = (query) => {
    const filtered = galleries.filter((gallery) =>
      gallery.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGalleries(filtered);
  };

  return (
    <div className="page">
      <Navbar />

      <div className="gallery-overview-container">
        <h1 className="gallery-overview-title">Gallery</h1>
        <SearchBar onSearch={handleSearch} />

        {filteredGalleries.length === 0 ? (
          <div className="no-results-container">
            <img src={scissors} alt="No results" className="no-results-image" />
            <p className="no-results-message">Sorry, nothing found.</p>
          </div>
        ) : (
          <div className="gallery-overview-grid">
            {filteredGalleries.map((gallery) => (
              <div
                key={gallery.id}
                className="gallery-overview-box"
                onClick={() => navigate(`/gallery/${gallery.id}`)}
              >
                <div className="gallery-image-container">
                  <img
                    src={gallery.imageURLs && gallery.imageURLs[0]}
                    alt={gallery.title}
                    className="gallery-overview-image"
                  />
                  <div className="gallery-overlay">
                    <p className="gallery-overlay-text">{gallery.title}</p>
                  </div>
                  <p className="gallery-overlay-text-mobile">{gallery.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppChat /> 

    </div>
  );
};

export default GalleryOverview;
