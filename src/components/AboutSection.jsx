import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Parallax } from 'react-parallax';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import goldLeft from '../assets/images/gold-sparkless-left.png';
import goldRight from '../assets/images/gold-sparkless-right.png';
import gold from '../assets/images/gold.png';
import mens from '../assets/images/mens.jpeg';
import womens from '../assets/images/womens.jpg';
import woman from '../assets/images/pole.jpeg';

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

  const year = new Date().getFullYear();

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
                  <span>{year}</span> is your time to be elegant with exclusive baby diva
                </p>
              </div>
              <div className="bottom-content">
                <p>
                  A world-renowned wearable art experience, where an annual design competition culminates in a
                  spectacular show combining theatre, art, fashion, music & performance.
                </p>
              </div>
            </div>
            <div className="home-about-content">
              <div className="top-content">
                <p>26 JULY - 13 AUGUST</p>
                <p>ACCRA, GHANA</p>
                <p>TSB ARENA WELLINGTON</p>
              </div>
              <div className="bottom-content">
                <a href="/" className="btn-line">
                  tickets on sale
                </a>
              </div>
            </div>
            <div className="home-about-content-double">
              <div className="home-about-content-inner">
                <img src={mens} alt="Mens fit" />
                <span>
                  <a href="/">Mens Outfit</a>
                  <FontAwesomeIcon icon={faArrowRight} className="icon" />
                </span>
                <div className="dark-overlay"></div>
              </div>

              <div className="home-about-content-inner">
                <img src={womens} alt="Womens fit" />
                <span>
                  <a href="/">Womens Outfit</a>
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
              <span>Wow is an</span>
              <span>EXPLOSION OF <span>CREATIVITY</span></span>
            </div>
            <div className="bottom">
              <Parallax className="parallax-img gold-bg" style={{ overflow: 'auto' }} blur={2} bgImage={gold} strength={100}></Parallax>
              <Parallax className="parallax-img" bgImage={mens} strength={300} bgClassName="custom-bg-class" contentClassName="custom-content-class"></Parallax>
              <Parallax className="parallax-img" bgImage={womens} strength={-100} bgClassName="custom-bg-class" contentClassName="custom-content-class"></Parallax>
              <Parallax className="parallax-img" bgImage={woman} strength={-100} bgClassName="custom-bg-class" contentClassName="custom-content-class"></Parallax>

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
          <div className="about-right">
          <div className="done">

          <div className="quote_quotation-wrapper">
          <div className="text-size-quotation outline-stroke-gold">{quote}</div></div>
            <span className='ani-text'>To take art off the wall and out of static display. To adorn the body in wildly wonderful ways. To celebrate creativity in a lavish and unique on-stage spectacular that will inspire us all.</span>
          <div className="quote_quotation-wrapper quotation-right"><div className="text-size-quotation outline-stroke-gold">{quote}</div></div>

          
          </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutSection;
