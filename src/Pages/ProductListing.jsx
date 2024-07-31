import { useState, useEffect } from 'react';
import BreadCrumbs from "../components/BreadCrumbs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { fetchProducts } from '../firebase'; // Import fetchProducts from firebase.js

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar />
      <BreadCrumbs pageName="Products" home={{ href: '/', label: 'Home' }} links="Shop" />
      <div className="container">
        <Products products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductListing;
