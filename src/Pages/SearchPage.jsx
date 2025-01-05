import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust to your Firebase config path
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query') || ''; // Get search query from URL
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productsCollection = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCollection);
        const productsData = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);
        setFilteredProducts(productsData); // Initially show all products
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search query (by category)
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredProducts(products); // Show all products if query is empty
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = products.filter((product) =>
        product.category?.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page">
    <Navbar />
    <div className="container">

    <div className="search-page">
      <h1 className='search-title'>Search Results for "{searchQuery}"</h1>
      {filteredProducts.length > 0 ? (
        <Products products={filteredProducts} /> // Use your existing Products component
      ) : (
        <p className='search-title' >No products found for "{searchQuery}".</p>
      )}
    </div>
    </div>
    <Footer />

    </div>
  );
};

export default SearchPage;
