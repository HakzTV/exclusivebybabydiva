import Navbar from '../components/Navbar';
import Video from "../components/Videos";
import AboutSection from '../components/AboutSection';
import ProductDisplay from '../components/ProductDisplay';
import HomeFooter from '../components/Home-Footer';
import { Helmet } from 'react-helmet';

// Import the images directly
import womanImage from '../assets/images/pro1.jpg';
import womanImage2 from '../assets/images/pro2.jpg';
import womanImage3 from '../assets/images/pro3.jpg';
import WhatsAppChat from '../components/WhatsappChat';
// import WhatsAppChat from '../components/WhatsappChat';

const data = [
  {
    title: "Kaftan",
    author: "Telvin varfley",
    // country: "Ghana",
    year: "2025",
    link: "/",
    "product-url": womanImage, // Use the imported image here
  },
  {
    title: "Agbada",
    author: "Telvin varfley",
    // country: "Ghana",
    year: "2025",
    link: "/",
   "product-url": womanImage2, // Use the imported image here
  },
  {
    title: "Corporate Wear",
    author: "Telvin varfley",
    // country: "Ghana",
    year: "2025",
    link: "/",
    "product-url": womanImage3, // Use the imported image here
  }
];

const Homepage = () => {
  return (
    <div className="page">
      <Helmet>
        <title>Exclusive Baby Diva FL | Home Page</title>
        <meta name="description" content="Welcome to a world of fashion in Africa." />
        <meta name="keywords" content="African Fashion, Unisex, Mens and Women's Wear" />
        <link rel="canonical" href="https://exclusivebabydiva.com/" />
      </Helmet>
      <Navbar />
      <Video />
      <AboutSection />
      <ProductDisplay products={data} />
      <HomeFooter />
       <WhatsAppChat /> 
    </div>
  );
};

export default Homepage;
