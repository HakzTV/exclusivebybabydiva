
// import Navbar from '../components/Navbar';

// import Footer from '../components/Footer';

// const ServicesPage = () => {
//   return (
//     <div className="page servicePage">
//       <Navbar />
//       {/* <HeroImage 
//           imageUrl={founder} 
//         bigText="African Fashion" 
//         smallText="Welcome to the World of" /> */}
//       <div className="service-page">
//         <div className="main-title">
//             Our Services
//         </div>
//         <div className="services">
//         <div className="service">
//                 Men
//             </div>
//         <div className="service">
//                 Women
//             </div>
//             <div className="service">
//                 Kids
//             </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ServicesPage;

// ServicesPage.jsx
import  { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppChat from '../components/WhatsappChat';

const services = [
  { category: 'Men', products: ['Kaftans', 'Agbada', 'Suits', 'Casual', 'Corporate outfits'] },
  { category: 'Women', products: ['Kaftans', 'Agbada', 'Suits', 'Casual', 'Corporate outfits'] },
  { category: 'Kids', products: ['Kaftans', 'Agbada', 'Suits', 'Casual', 'Corporate outfits'] },
];

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const handleBubbleClick = () => {
    window.location.href = '/product'; // Redirect to product page
  };

  return (
    <div className="page servicePage">
      <Navbar />
      <div className="service-page">
        <div className="main-title">Our Services</div>
        <div className="services">
          {services.map((service, index) => (
            <div
              key={index}
              className="service"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {service.category}
              {hoveredService === index && (
                <div className="bubble-container">
                  {service.products.map((product, idx) => (
                    <div
                      key={idx}
                      className="bubble"
                      onClick={handleBubbleClick} // No need for product parameter
                    >
                      {product}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <WhatsAppChat /> 

    </div>
  );
};

export default ServicesPage;
