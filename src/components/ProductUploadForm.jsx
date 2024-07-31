// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid'; // Import the UUID function
// import { db, storage } from '../firebase';
// import { collection, addDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// const ProductUploadForm = () => {
//   const [productName, setProductName] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [productDetails, setProductDetails] = useState('');
//   const [files, setFiles] = useState(null); // Allows multiple files

//   const handleFileChange = (e) => {
//     setFiles(e.target.files); // Sets multiple files
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const imageUrls = [];
//       if (files) {
//         for (const file of files) {
//           const storageRef = ref(storage, `Products/${file.name}`);
//           await uploadBytes(storageRef, file);
//           const imageURL = await getDownloadURL(storageRef);
//           imageUrls.push(imageURL);
//         }
//       }

//       // Generate a unique ID for the product
//       const productId = uuidv4();

//       const productData = {
//         'product-id': productId, // Add the unique ID
//         'product-name': productName,
//         'price': price,
//         'category': category,
//         'product-details': productDetails,
//         'product-url': imageUrls[0], // Main image
//         'alt-images': imageUrls.slice(1) // Additional images
//       };

//       await addDoc(collection(db, 'products'), productData);
//       alert('Product uploaded successfully!');
      
//       // Clear form fields
//       setProductName('');
//       setPrice('');
//       setCategory('');
//       setProductDetails('');
//       setFiles(null);
//     } catch (error) {
//       console.error('Error uploading product:', error);
//       alert('Error uploading product.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="product-upload-form">
//       <div className="form-group">
//         <label>Product Name:</label>
//         <input
//           type="text"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Price:</label>
//         <input
//           type="text"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Category:</label>
//         <input
//           type="text"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Product Details:</label>
//         <textarea
//           value={productDetails}
//           onChange={(e) => setProductDetails(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Images:</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           multiple // Allows multiple file selection
//           required
//         />
//       </div>
//       <button type="submit">Upload Product</button>
//     </form>
//   );
// };

// export default ProductUploadForm;
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ProductUploadForm = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [files, setFiles] = useState(null);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageUrls = [];
      if (files) {
        for (const file of files) {
          const storageRef = ref(storage, `Products/${file.name}`);
          await uploadBytes(storageRef, file);
          const imageURL = await getDownloadURL(storageRef);
          imageUrls.push(imageURL);
        }
      }

      const productId = uuidv4();

      const productData = {
        'product-id': productId, // Consistent use of 'product-id'
        'product-name': productName,
        'price': price,
        'category': category,
        'product-details': productDetails,
        'product-url': imageUrls[0],
        'alt-images': imageUrls.slice(1)
      };

      await addDoc(collection(db, 'products'), productData);
      alert('Product uploaded successfully!');
      
      setProductName('');
      setPrice('');
      setCategory('');
      setProductDetails('');
      setFiles(null);
    } catch (error) {
      console.error('Error uploading product:', error);
      alert('Error uploading product.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-upload-form">
      <div className="form-group">
        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Price:</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Product Details:</label>
        <textarea
          value={productDetails}
          onChange={(e) => setProductDetails(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Images:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          multiple
          required
        />
      </div>
      <button type="submit">Upload Product</button>
    </form>
  );
};

export default ProductUploadForm;
