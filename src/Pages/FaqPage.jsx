import Navbar from '../components/Navbar';
// import dataw from '../public/data/data.json';
import HomeFooter from '../components/Home-Footer';
import { Helmet } from 'react-helmet';
import FAQ from '../components/FAQ';
import WhatsAppChat from '../components/WhatsappChat';

const FaqPage = () => {
  return (
    <div className="page">
    <Helmet>
        <title> Exclusive Baby Diva FL | FAQ </title>
        <meta name="description" content="Welcome to a world of fashion in africa." />
        <meta name="keywords" content="African Fashion, Unisex, Mens and Women's Wear" />
        <link rel="canonical" href="https://exclusivebabydiva.com/faq" />
      </Helmet>
      <Navbar />
      <FAQ />
      <HomeFooter />
      <WhatsAppChat /> 

    </div>
  );
};

export default FaqPage;

