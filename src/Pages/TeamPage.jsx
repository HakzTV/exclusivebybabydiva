
import Navbar from '../components/Navbar';
import founder from '../assets/images/about.jpeg'

import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import BasicContent from '../components/BasicContent';

const TeamPage = () => {
  return (
    <div className="page">
      <Navbar />
      <HeroImage 
          imageUrl={founder} 
        bigText="Meet our
world-class team" 
        smallText="Our Team" />
      <BasicContent 
         imageUrl={founder} 
         smallerText="passionate team"
        bigText="Meet the world-class team working behind-the-scenes at EBD. From garment technicians and lighting designers, to marketers and finance, our team is a talented group of individuals who care passionately about the arts and creative endeavour.
In the lead up to the show our core team is joined by an exceptional cast and crew of over 10 people." 
        smallText="Impossible without OUR"
      />
      <Footer />

    </div>
  );
};

export default TeamPage;
