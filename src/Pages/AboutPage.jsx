
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import AboutContent from '../components/AboutPageContent';

const AboutPage = () => {
  return (
    <div className="page">
      <Navbar />
      <HeroImage />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default AboutPage;
