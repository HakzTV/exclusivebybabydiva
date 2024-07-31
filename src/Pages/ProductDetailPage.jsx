import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import BreadCrumbs from "../components/BreadCrumbs";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
import Navbar from '../components/Navbar';

const ProductDetailContent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); // Ensure loading state is true at the start

      try {
        console.log('Fetching product with product-id:', id); // Log product-id for debugging
        const q = query(collection(db, 'products'), where('product-id', '==', id));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const productData = querySnapshot.docs[0].data();
          console.log('Product data:', productData); // Log data for debugging
          setProduct(productData);
        } else {
          console.log('No product found with product-id:', id);
          setError('No product found.');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Error fetching product.');
      } finally {
        setLoading(false); // Ensure loading state is false after fetching
      }
    };

    fetchProduct();
  }, [id]);

  const handleSelectProduct = (productId) => {
    console.log('Product selected with product-id:', productId);
    // Implement your selection logic here
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar />
      <BreadCrumbs pageName="Products" home={{ href: '/', label: 'Women' }} links="oh well" />
      <div className="container">
        {product ? (
          <ProductDetail
            product={product}
            onSelectProduct={handleSelectProduct} // Pass function
          />
        ) : (
          <p>No product found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailContent;
