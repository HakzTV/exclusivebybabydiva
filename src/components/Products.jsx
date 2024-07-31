// // import { useEffect, useState } from 'react';
// // import PropTypes from 'prop-types';
// // import ProductCard from './ProductsCard';


// // const Products = ({ fetchProducts }) => {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     const loadProducts = async () => {
// //       try {
// //         const data = await fetchProducts();
// //         setProducts(data);
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //       }
// //     };

// //     loadProducts();
// //   }, [fetchProducts]);

// //   return (
   
// //       <div className="products-grid">
// //         {products.map((product, index) => (
// //           <ProductCard key={index} product={product} />
// //         ))}
// //         </div>
// //   );
// // };

// // Products.propTypes = {
// //   fetchProducts: PropTypes.func.isRequired,
// // };

// // export default Products;

// import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import ProductCard from './ProductCard';
// import { fetchProducts } from '../firebase'; // Import the fetchProducts function

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     loadProducts();
//   }, []);

//   return (
//     <div className="products-grid">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />  
//       ))}
//     </div>
//   );
// };

// Products.propTypes = {
//   fetchProducts: PropTypes.func,  // Prop type is not required now since we're directly using the function
// };

// export default Products;
import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { fetchProducts } from '../firebase'; // Import the fetchProducts function

const Products = () => {
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
    <div className="products-grid">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

// Remove fetchProducts from prop types as it's no longer passed as a prop
// Products.propTypes = {
//   // fetchProducts: PropTypes.func, // No longer needed
// };

export default Products;
