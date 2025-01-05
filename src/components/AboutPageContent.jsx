import { useEffect } from 'react';

import { Parallax } from 'react-parallax';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gold from '../assets/images/gold.png';
import mens from '../assets/images/mens.jpeg';
import founder from '../assets/images/team-mil.png'

import woman from '../assets/images/2.jpg';


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
    <div className="aboutWrapper" >
    <div className="container">
    <div className="introduction-container">
      <h2 className="introduction-title">
        {Array.from("Introduction").map((letter, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
          </span>
        ))}
      </h2>
      <p className="introduction-content">
        Welcome to the journey of our brand! We are excited to share the story, the vision, and the passion behind our creations. Every piece is crafted with love, dedication, and a drive to bring unique fashion to life. Stay with us as we dive into the heart of what makes our brand special.
      </p>
    </div>
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
        <p className='text'>Mildred Alexandra Menkiti, a seasoned Marketing and Business Development Executive, has etched an impressive career in the management consulting industry. With over a decade of professional experience, she possesses a diverse skill set, spanning from project management to event coordination. Her remarkable journey has seen her contribute her expertise to renowned organizations, including MTN, Charter House, Trust Consulting, and presently, eSolutions Consulting, where she collaborates with esteemed industry leaders as a Business Analyst and Project Manager with passion for building a lasting business relationship.
<br />
In addition to her academic achievements, including a Bachelor of Science (B.Sc.) degree in Mass Communication from Anambra State University of Science & Technology, Uli, Mildred holds a Certificate in Marketing/Marketing Management, General, from the esteemed Ghana Institute of Management and Public Administration (GIMPA).
<br />
Beyond her impressive professional qualifications, what truly sets Mildred apart are her exceptional personal qualities. Known for her soft-hearted nature, she exudes a warmth that resonates with those she interacts with. Yet, beneath her gentle exterior lies an unwavering commitment to fairness and integrity, which she consistently upholds in both her professional and personal dealings.
<br />
When Mildred sets her sights on a goal, her determination knows no bounds, and she dedicates herself wholeheartedly to achieving success. As a proud Nigerian, she embraces her heritage and culture with fervour, actively promoting and celebrating Nigerian identity and values.
<br />
Affectionately known as "BabyDiva", Mildred brings a unique blend of kindness, sweetness, and a jovial spirit to those around her. Her infectious and sometimes goofy sense of humour never fails to bring laughter and joy to her friends and family.
<br />
At the core of her life is a deep-rooted appreciation for family values. Raised in a loving family of eight, consisting of herself, four sisters, one brother, and her parents, Mildred treasures the bonds that connect her with her loved ones.
<br />
Away from the professional arena, BabyDiva's heart beats for nature, and she thrives on the adventure of travel. She also finds joy in playing tennis and swimming. Proudly single and a staunch adherent of the Catholic faith, she embodies the rich heritage and culture of her Nigerian roots.
<br />
These values, combined with her professional prowess, makes her the Mildred Xandra Menkiti we’ve come to know and love.
</p>
        </div>
        </div>
        <div className="right w-60">
        <div className="image-overlay_wrapper is-left-side is-large hide-tablet"></div>
        <div className="image-overlay_wrapper is-top-side"></div>
        <div 
        className="image-overlay_wrapper is-bottom-side"></div>
          <div 
        className="image-overlay_wrapper is-right-side"></div>
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
        <div className="done" >

        <h2>The Mission</h2>
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
}
 
export default AboutContent;