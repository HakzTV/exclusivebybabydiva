// import AboutSection from "../components/AboutSection";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import ProductCarousel from "../components/ProductCarousel";
// import ProductDisplay from "../components/ProductDisplay";
// import Video from "../components/Videos";
// import data from '../data/data.json';
// const Homepage = () => {
//     return (  
//         <div className="page">

//         <Navbar />
//         <Video />
//         <AboutSection />
//         <div className="page">
//       <ProductDisplay />
//       <ProductCarousel products={data} />
//     </div>
//         <Footer />
//         </div>
//     );
// }
 
// export default Homepage;// Homepage.js

import Navbar from '../components/Navbar';
import Video from "../components/Videos";

import AboutSection from '../components/AboutSection';
import ProductDisplay from '../components/ProductDisplay';
import data from '../data/data.json';
import HomeFooter from '../components/Home-Footer';

const Homepage = () => {
  return (
    <div className="page">
      <Navbar />
      <Video />
      <AboutSection />
      <ProductDisplay products={data} />
      <HomeFooter />
    </div>
  );
};

export default Homepage;
