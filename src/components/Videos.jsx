import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import video from '../assets/images/mil.mp4';

const Video = () => {
  const videoRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial position centered
    gsap.set(text1Ref.current, { opacity: 0, scale: 3, x: '50%', y: '50%', transformOrigin: 'center center' });

    // Animation to fade in from center and move to final position
    tl.to(text1Ref.current, { opacity: 1, scale: 1, x: '0%', y: '0%', duration: 2, ease: 'power2.out' })
      .fromTo(text2Ref.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power2.out' }, "-=1.5");
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay muted loop className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1 ref={text1Ref} className="text text1">We are fashion</h1>
        <h2 ref={text2Ref} className="text text2">Embrace elegance with us.</h2>
      </div>
      <div className="dark-overlay" style={{height: '50%', zIndex: 0}}></div>
    </div>
  );
};

export default Video;
