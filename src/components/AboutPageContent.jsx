import { useEffect } from 'react';

import { Parallax } from 'react-parallax';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gold from '../assets/images/gold.png';
import mens from '../assets/images/mens.jpeg';
import founder from '../assets/images/Founder.jpeg'

import woman from '../assets/images/pole.jpeg';


gsap.registerPlugin(ScrollTrigger);


const AboutContent = () => {

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
    <div className="aboutWrapper" style={{height: '150vh'}}>
    <div className="container">
    <div className='basic-about-sec '>
        <div className="left w-40">
        <div className="title">
        <span className='heading-style-h4'>
       Our Founder
        </span>
<span className='heading-style-h2 text-weight-bold text-colour-blue text-color-gold'>
MILDRED ALEXANDRA MENKITI
</span>
        </div>
        <div className="body">
            
        <span className='inline'></span>
        <p className='text'>Every night of the show season is a spectacular visual feast. If you want to see the show before anyone else or are budget conscious, come to our Preview. If you love the glitz and glamour of an opening night join us for our Awards Night and see the winners announced in a live ceremony after the show.</p>
        </div>
        </div>
        <div className="right w-60">
        <div className="image-overlay_wrapper is-left-side is-large hide-tablet"></div>
        <div className="image-overlay_wrapper is-top-side"></div>
        <div 
        className="image-overlay_wrapper is-bottom-side"></div>
            <img src={founder} alt="" className='img-side' />
        </div>
        </div>
    <div className="about-sec sub" >
        <div className="about-left"  style={{marginTop: '50px'}}>
         
          <div className="bottom">
            <Parallax className="parallax-img gold-bg about-img rene" style={{ overflow: 'auto'}} blur={2} bgImage={gold} strength={100}></Parallax>
            <Parallax className="parallax-img" bgImage={mens} strength={300} bgClassName="custom-bg-class" stylecontentClassName="custom-content-class"></Parallax>
            {/* <Parallax className="parallax-img" bgImage={womens} strength={-100} bgClassName="custom-bg-class" contentClassName="custom-content-class"></Parallax> */}
            <Parallax className="parallax-img" bgImage={woman} strength={-100} bgClassName="custom-bg-class" contentClassName="custom-content-class"></Parallax>

    
          </div>
        </div>
        <div className="about-right"  style={{marginTop: '0'}}>
        <div className="done" style={{top: '200px'}}>

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
}
 
export default AboutContent;