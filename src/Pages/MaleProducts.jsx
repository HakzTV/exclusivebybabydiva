
import { useState, useEffect } from 'react';
import { fetchProducts } from '../firebase'; // Import fetchProducts function
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BreadCrumbs from '../components/BreadCrumbs';
import WhatsAppChat from '../components/WhatsappChat';

const MaleProducts = () => {
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
          (product) => product['general-category'] === 'Male'
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
      <BreadCrumbs pageName="Male" home={{ href: '/', label: 'Home' }} links="Male" />
      <div className="container">
        <h1>Male Products</h1>
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

export default MaleProducts;
