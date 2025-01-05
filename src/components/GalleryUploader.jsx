// import { useState } from 'react';
// import { db, storage } from '../firebase'; // Assuming firebase.js is correctly set up
// import { collection, addDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// const GalleryUploader = () => {
//   const [title, setTitle] = useState('');
//   const [category, setCategory] = useState('');
//   const [tagInput, setTagInput] = useState('');
//   const [tags, setTags] = useState([]);
//   const [images, setImages] = useState([]);

//   const handleImageChange = (e) => {
//     setImages([...e.target.files]);
//   };

//   const handleTagKeyDown = (e) => {
//     if (e.key === 'Enter' && tagInput.trim() !== '') {
//       setTags([...tags, tagInput.trim()]);
//       setTagInput(''); // Clear input field after adding the tag
//       e.preventDefault(); // Prevent form submission on "Enter"
//     }
//   };

//   const removeTag = (indexToRemove) => {
//     setTags(tags.filter((_, index) => index !== indexToRemove));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!title || !category || images.length === 0) {
//       alert('Please fill in all fields and select at least one image.');
//       return;
//     }

//     try {
//       // Upload each image and get its URL
//       const uploadedImages = await Promise.all(
//         images.map(async (image) => {
//           const storageRef = ref(storage, `gallery/${image.name}`);
//           await uploadBytes(storageRef, image);
//           const imageURL = await getDownloadURL(storageRef);
//           return imageURL;
//         })
//       );

//       // Add document to Firestore with image URLs, title, category, and tags
//       await addDoc(collection(db, 'Gallery'), {
//         title,
//         category,
//         imageURLs: uploadedImages,
//         tags
//       });

//       alert('Images uploaded successfully!');
//       setTitle('');
//       setCategory('');
//       setTags([]);
//       setImages([]);
//     } catch (error) {
//       console.error('Error uploading images:', error);
//     }
//   };

//   return (
//     <div className="image-uploader">
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Category:</label>
//           <input
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Tags:</label>
//           <input
//             type="text"
//             value={tagInput}
//             onChange={(e) => setTagInput(e.target.value)}
//             onKeyDown={handleTagKeyDown}
//             placeholder="Press Enter to add a tag"
//           />
//           <div className="tags-container">
//             {tags.map((tag, index) => (
//               <span key={index} className="tag-pill">
//                 {tag}
//                 <button
//                   type="button"
//                   className="remove-tag"
//                   onClick={() => removeTag(index)}
//                 >
//                   &times;
//                 </button>
//               </span>
//             ))}
//           </div>
//         </div>
//         <div>
//           <label>Images:</label>
//           <input type="file" multiple onChange={handleImageChange} required />
//         </div>
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// };

// export default GalleryUploader;
import { useState } from 'react';
import { db, storage } from '../firebase'; // Assuming firebase.js is correctly set up
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const GalleryUploader = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files); // Check if images are captured
    setImages(files);
  };

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      setTags([...tags, tagInput.trim()]);
      setTagInput(''); // Clear input field after adding the tag
      e.preventDefault(); // Prevent form submission on "Enter"
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !category || images.length === 0) {
      alert('Please fill in all fields and select at least one image.');
      return;
    }

    setLoading(true); // Set loading to true while uploading

    try {
      // Upload each image and get its URL
      const uploadedImages = await Promise.all(
        images.map(async (image) => {
          const storageRef = ref(storage, `gallery/${image.name}`);
          console.log(`Uploading ${image.name}...`); // Log the upload process
          await uploadBytes(storageRef, image);
          const imageURL = await getDownloadURL(storageRef);
          console.log(`Uploaded ${image.name}: ${imageURL}`); // Log the URL
          return imageURL;
        })
      );

      // Add document to Firestore with image URLs, title, category, and tags
      await addDoc(collection(db, 'Gallery'), {
        title,
        category,
        imageURLs: uploadedImages,
        tags,
      });

      alert('Images uploaded successfully!');
      // Reset state after upload
      setTitle('');
      setCategory('');
      setTags([]);
      setImages([]);
    } catch (error) {
      console.error('Error during upload:', error);
      alert('Upload failed. Please check the console for more information.');
    } finally {
      setLoading(false); // Reset loading state after the request completes
    }
  };

  return (
    <div className="image-uploader">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tags:</label>
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder="Press Enter to add a tag"
          />
          <div className="tags-container">
            {tags.map((tag, index) => (
              <span key={index} className="tag-pill">
                {tag}
                <button
                  type="button"
                  className="remove-tag"
                  onClick={() => removeTag(index)}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>
        <div>
          <label>Images:</label>
          <input type="file" multiple onChange={handleImageChange} required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
};

export default GalleryUploader;
