import Navbar from '../components/Navbar';
// import dataw from '../public/data/data.json';
// import HomeFooter from '../components/Home-Footer';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import ContactPage from '../components/Contact';
import BreadCrumbs from '../components/BreadCrumbs';
import WhatsAppChat from '../components/WhatsappChat';

const ContactContent = () => {
  return (
    <div className="page">
    <Helmet>
        <title> Exclusive Baby Diva FL | Contact Page</title>
        <meta name="description" content="Contact us to get your style as soon as possible." />
        <meta name="keywords" content="African Fashion, Unisex, Mens and Women's Wear" />
        <link rel="canonical" href="https://exclusivebabydiva.com/contact" />
      </Helmet>
      <Navbar />
      <BreadCrumbs pageName="Contact" home={{ href: '/', label: 'Home' }} links="Contacts Us" />
      <div className="contact-wrapper">

        <ContactPage />
      </div>
      <Footer className="custom-footer" />
      <WhatsAppChat /> 

    </div>
  );
};

export default ContactContent;

