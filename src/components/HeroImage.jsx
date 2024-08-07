// import  { useEffect } from 'react';
// import { gsap } from 'gsap';
// import founder from '../assets/images/about.jpeg'
// const HeroImage = () => {
//     useEffect(() => {
//         const tl = gsap.timeline();
//         tl.fromTo('.heroTextBig', { x: '-100%' }, { x: '-40%', duration: 1.5, ease: 'power2.out' })
//           .fromTo('.heroTextSmall', { x: '-100%' }, { x: '-40%', duration: 1.5, ease: 'power2.out' }, '-=1');
//       }, []);

//   return (
//     <div className="heroContainer">
//       <div className="dark-overlay "></div>
//       <div className="overlay "></div>
//       <div className="leftoverlay "></div>
//       <img src={founder} alt="Hero Background" className="heroImage" />
//       <div className="heroContent">
//         <h1 className="heroTextSmall">WELCOME TO the WORLD of</h1>
//         <h2 className="heroTextBig">african fashion</h2>
//       </div>
//     </div>
//   );
// };

// export default HeroImage;
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';


const HeroImage = ({ imageUrl, bigText, smallText }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.heroTextBig', { x: '-100%' }, { x: '-40%', duration: 1.5, ease: 'power2.out' })
      .fromTo('.heroTextSmall', { x: '-100%' }, { x: '-40%', duration: 1.5, ease: 'power2.out' }, '-=1');
  }, []);

  return (
    <div className="heroContainer">
      <div className="dark-overlay"></div>
      <div className="overlay"></div>
      <div className="leftoverlay"></div>
      <img src={imageUrl} alt="Hero Background" className="heroImage" />
      <div className="heroContent">
        <h1 className="heroTextSmall">{smallText}</h1>
        <h2 className="heroTextBig">{bigText}</h2>
      </div>
    </div>
  );
};

HeroImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  bigText: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
};

export default HeroImage;
