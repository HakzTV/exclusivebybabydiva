
import Navbar from '../components/Navbar';
import founder from '../assets/images/about.jpeg'

import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import AboutContent from '../components/AboutPageContent';

const AboutPage = () => {
  return (
    <div className="page">
      <Navbar />
      <HeroImage 
          imageUrl={founder} 
        bigText="African Fashion" 
        smallText="Welcome to the World of" 


      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default AboutPage;
