// // src/components/ImageUpload.jsx
// import { useState } from 'react';
// import { db, storage, collection, addDoc, ref, uploadBytes, getDownloadURL } from '../firebase';

// const ImageUpload = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploading, setUploading] = useState(false);

//   const handleFileChange = (event) => {
//     setSelectedFiles(event.target.files);
//   };

//   const handleUpload = async () => {
//     setUploading(true);
//     const files = Array.from(selectedFiles);
//     const uploadPromises = files.map(async (file) => {
//       const storageRef = ref(storage, `pageContent/${file.name}`);
//       await uploadBytes(storageRef, file);
//       const url = await getDownloadURL(storageRef);
//       await addDoc(collection(db, 'SiteContent'), {
//         url,
//         name: file.name,
//         createdAt: new Date(),
//       });
//     });

//     try {
//       await Promise.all(uploadPromises);
//       alert('Upload successful');
//     } catch (error) {
//       console.error('Error uploading files:', error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div>
//       <input type="file" multiple onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={uploading}>
//         {uploading ? 'Uploading...' : 'Upload Images'}
//       </button>
//     </div>
//   );
// };

// export default ImageUpload;
import { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ImageUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = async () => {
    setUploading(true);
    const files = Array.from(selectedFiles);
    const uploadPromises = files.map(async (file) => {
      const storageRef = ref(storage, `pageContent/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      await addDoc(collection(db, 'SiteContent'), {
        url,
        name: file.name,
        createdAt: new Date(),
      });
    });

    try {
      await Promise.all(uploadPromises);
      alert('Upload successful');
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Images'}
      </button>
    </div>
  );
};

export default ImageUpload;
