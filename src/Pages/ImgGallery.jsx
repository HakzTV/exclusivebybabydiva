// import { useEffect, useState } from 'react';
// import { db } from '../firebase'; // Assuming firebase.js is correctly set up
// import { collection, getDocs } from 'firebase/firestore';

// const ImageGallery = () => {
//   const [imageGroups, setImageGroups] = useState({});

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const galleryCollection = collection(db, 'Gallery');
//         const gallerySnapshot = await getDocs(galleryCollection);
//         const images = gallerySnapshot.docs.map(doc => doc.data());

//         // Group images by category and include titles
//         const groupedImages = images.reduce((acc, image) => {
//           if (image.category && Array.isArray(image.imageURLs)) {
//             if (!acc[image.category]) {
//               acc[image.category] = {
//                 title: image.title,
//                 imageURLs: [],
//               };
//             }
//             acc[image.category].imageURLs.push(...image.imageURLs); // Multiple images per document
//           }
//           return acc;
//         }, {});

//         setImageGroups(groupedImages);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div className="gallery-container">
//       {Object.keys(imageGroups).map((category) => (
//         <div key={category}>
//           <h2 className='gal-title'>{imageGroups[category].title}</h2> {/* Display the title */}
//           <div className="gallery-grid">
//             {imageGroups[category].imageURLs.map((src, index) => (
//               <div key={index} className="gallery-item">
//                 <img src={src} alt={`Image from ${category}`} loading="lazy" className="gallery-image" />
//               </div>
//             ))}
//           </div>
//           {imageGroups[category].imageURLs.length === 0 && <p>No images available in this category.</p>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Assuming firebase.js is correctly set up

const GalleryDetail = () => {
  const { id } = useParams(); // Get the id from the URL
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const galleryDoc = doc(db, 'Gallery', id);
        const gallerySnapshot = await getDoc(galleryDoc);

        if (gallerySnapshot.exists()) {
          setGallery(gallerySnapshot.data());
        } else {
          console.error('No gallery found with the given ID');
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
      }
    };

    fetchGallery();
  }, [id]);

  if (!gallery) {
    return <p>Loading...</p>;
  }

  return (
    <div className="gallery-detail">
      <h2>{gallery.title}</h2>
      <div className="gallery-grid">
        {gallery.imageURLs && gallery.imageURLs.length > 0 ? (
          gallery.imageURLs.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Gallery image ${index}`} className="gallery-image" />
            </div>
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  );
};

export default GalleryDetail;
