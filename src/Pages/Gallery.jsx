import Navbar from '../components/Navbar';
// import dataw from '../public/data/data.json';
import HomeFooter from '../components/Home-Footer';
import { Helmet } from 'react-helmet';
import GalleryDetail from './ImgGallery';
import WhatsAppChat from '../components/WhatsappChat';

const Gallery = () => {
  return (
    <div className="page">
    <Helmet>
        <title> Exclusive Baby Diva FL | Gallery Page</title>
        <meta name="description" content="Welcome to a world of fashion in africa." />
        <meta name="keywords" content="African Fashion, Unisex, Mens and Women's Wear" />
        <link rel="canonical" href="https://exclusivebabydiva.com/gallery" />
      </Helmet>
      <Navbar />
      <GalleryDetail />
      <HomeFooter />
      <WhatsAppChat /> 

    </div>
  );
};

export default Gallery;

