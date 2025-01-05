import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Parallax } from 'react-parallax';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import goldLeft from '../assets/images/gold-sparkless-left.png';
import goldRight from '../assets/images/gold-sparkless-right.png';
import gold from '../assets/images/gold.png';
import mens from '../assets/images/model.jpg';
import womens from '../assets/images/solo-cup.jpg';
import woman from '../assets/images/hands.jpg';
import weman from '../assets/images/wemen.jpg';
import manman from '../assets/images/manman.jpg';
import kids from '../assets/images/pro-7.jpeg'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const quote = `"`
  useEffect(() => {
    const animateWords = () => {
      const words = document.querySelectorAll('.ani-text');
      
      words.forEach(word => {
        const text = word.textContent.split(' ');
        word.innerHTML = '';

        text.forEach((t, index) => {
          const span = document.createElement('span');
          span.textContent = t;
          span.style.color = `#fff`;
          span.classList.add('word');
          span.style.opacity = '0'; // Start with opacity 0
          word.appendChild(span);
          if (index < text.length - 1) {
            word.appendChild(document.createTextNode(' ')); // Add a space between words
          }
        });
      });

      const wordElements = document.querySelectorAll('.word');

      wordElements.forEach((word) => {
        gsap.fromTo(
          word,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6, // Adjust animation duration as needed
            scrollTrigger: {
              trigger: word,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
              scrub: true,
              onComplete: () => {
                word.style.opacity = 1; // Ensure opacity is set to 1 after animation completes
              }
            },
          }
        );
      });
    };

    animateWords();
  }, []);


  return (
    <div className="home-about-sec">
      <div className="home-about-img">
        <img src={goldLeft} alt="Gold Left" className="goldLeft" />
        <img src={goldRight} alt="Gold Right" className="goldRight" />
      </div>
      <div className="container">
        <div className="home-about-wrapper">
          <div className="home-about-grid">
            <div className="home-about-content">
              <div className="top-content marg-medium">
                <p>
                At ExclusiveBabyDivaFl, we believe in fashion that empowers and inspires, ensuring that every garment reflects our commitment to quality, creativity, and authenticity in the ever-evolving world of fashion.
                </p>
              </div>
              <div className="bottom-content">
                <a href="/gallery" className="btn-line">
                  Check out our gallery
                </a>
              </div>
            </div>
            {/* <div className="home-about-content">
              <div className="top-content">
                <p>26 JULY - 13 AUGUST</p>
                <p>ACCRA, GHANA</p>
                <p>TSB ARENA WELLINGTON</p>
              </div>
              <div className="bottom-content">
                <a href="/gallery" className="btn-line">
                  Check out our gallery
                </a>
              </div>
            </div> */}
            <div className="home-about-content-inner">
                <img src={kids} alt="Mens fit" />
                <span>
                  <a href="/kids">Children's Outfit</a>
                  <FontAwesomeIcon icon={faArrowRight} className="icon" />
                </span>
                <div className="dark-overlay"></div>
              </div>
            <div className="home-about-content-double">
              <div className="home-about-content-inner">
                <img src={manman} alt="Mens fit" />
                <span>
                  <a href="/male">Mens Outfit</a>
                  <FontAwesomeIcon icon={faArrowRight} className="icon" />
                </span>
                <div className="dark-overlay"></div>
              </div>

              <div className="home-about-content-inner">
                <img src={weman}  alt="Womens fit" />
                <span>
                  <a href="/female">Womens Outfit</a>
                  <FontAwesomeIcon icon={faArrowRight} className="icon" />
                </span>
                <div className="dark-overlay"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-sec">
          <div className="about-left">
            <div className="top">
              <span>ExclusiveBabyDivaFl is an</span>
              <span>EXPLOSION OF <span>CREATIVITY</span></span>
            </div>
            <div className="bottom">
              <Parallax className="parallax-img gold-bg" style={{ overflow: 'auto' }} blur={2} bgImage={gold} strength={100}></Parallax>
              <Parallax className="parallax-img" bgImage={mens}  strength={300} bgClassName="custom-bg-class obj-1" contentClassName="custom-content-class"></Parallax>
              <Parallax className="parallax-img" bgImage={womens} strength={-100} bgClassName="custom-bg-class obj-2" contentClassName="custom-content-class"></Parallax>
              <Parallax className="parallax-img" bgImage={woman} strength={-100} bgClassName="custom-bg-class obj-3" contentClassName="custom-content-class"></Parallax>

              {/* <Parallax className="parallax-img" bgImage={mens} strength={-300} bgClassName="custom-bg-class" contentClassName="custom-content-class"
                renderLayer={(percentage) => (
                  <div
                    style={{
                      position: 'absolute',
                      background: `rgba(255, 255, 255, ${percentage * 0.5})`,
                      left: '50%',
                      top: '50%',
                      width: percentage * 300,
                      height: percentage * 300,
                      borderRadius: '50%',
                      zIndex: '1',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                )}>
              </Parallax> */}
            </div>
          </div>
          <div className="about-right" >
          <div className="done">

          <div className="quote_quotation-wrapper">
          <div className="text-size-quotation outline-stroke-gold">{quote}</div></div>
            <span className='ani-text'>Our mission, though elegantly simple, carries profound significance: we are dedicated to creating a lasting impact in the lives of individuals who choose to embrace our brand. This commitment is realized through the meticulous craftsmanship of our Afrocentric, sophisticated pieces, designed to empower and inspire each wearer.</span>
          <div className="quote_quotation-wrapper quotation-right"><div className="text-size-quotation outline-stroke-gold">{quote}</div></div>

          
          </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutSection;
