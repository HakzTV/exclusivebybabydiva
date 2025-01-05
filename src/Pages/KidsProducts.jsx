// import { useState, useEffect } from 'react';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { db } from '../firebase';
// import ProductCard from '../components/ProductCard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import BreadCrumbs from '../components/BreadCrumbs';
// import WhatsAppChat from '../components/WhatsappChat';

// const KidsProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const q = query(collection(db, 'products'), where('general-category', '==', 'Kids'));
//       const querySnapshot = await getDocs(q);
//       const fetchedProducts = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setProducts(fetchedProducts);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className='page'>
//     <Navbar />
//     <BreadCrumbs pageName="Kids" home={{ href: '/', label: 'Home' }} links="Kids" />
//     <div className="container">

//       <h1>Kids Products</h1>
//       <div className="product-grid">
//         {products.length > 0 ? (
//           products.map((product) => <ProductCard key={product.id} product={product} />)
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//     <Footer />
//     <WhatsAppChat /> 

//     </div>
//   );
// };

// export default KidsProducts;

import { useState, useEffect } from 'react';
import { fetchProducts } from '../firebase'; // Import fetchProducts function
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BreadCrumbs from '../components/BreadCrumbs';
import WhatsAppChat from '../components/WhatsappChat';

const KidsProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        // Fetch all products using the fetchProducts function
        const allProducts = await fetchProducts();

        // Filter products based on the "general-category"
        const filteredProducts = allProducts.filter(
          (product) => product['general-category'] === 'Kids'
        );

        setProducts(filteredProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="page">
      <Navbar />
      <BreadCrumbs pageName="Kids" home={{ href: '/', label: 'Home' }} links="Kids" />
      <div className="container">
          <h1>Kids Products</h1>

        <div className="product-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id} // Use the 'id' field for the key
                product={product} // Pass the entire product object
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default KidsProducts;
