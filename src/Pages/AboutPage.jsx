import Navbar from '../components/Navbar';
import founder from '../assets/images/banner2.png';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import AboutContent from '../components/AboutPageContent';
// import Flipbook from '../components/Origin';
import ClothingRack from '../components/Origin';
import VisionComponent from '../components/OurVision';
import WhatsAppChat from '../components/WhatsappChat';
// import TestimonialCarousel from '../components/TestimonalCarousel';

const AboutPage = () => {
  return (
    <div className="page">
      <Navbar />
      <HeroImage 
          imageUrl={founder} 
          bigText="of African & Contemporary Fashion" 
          smallText="Welcome to the World" 
            specstyle="customHeroStyle"
          />
      <AboutContent />
{/* <TestimonialCarousel /> */}
    {/* <Flipbook /> */}
    <VisionComponent />
    <ClothingRack />
      <Footer className="gonelol" /> {/* Pass className prop */}
      <WhatsAppChat /> 

    </div>
  );
};

export default AboutPage;

