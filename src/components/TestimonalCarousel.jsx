import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const testimonialCollection = collection(db, 'Testimonials');
      const testimonialSnapshot = await getDocs(testimonialCollection);
      const testimonialsData = testimonialSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTestimonials(testimonialsData);
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  if (!testimonials.length) {
    return <p>Loading testimonials...</p>;
  }

  return (
    <div className="container">
    <div className="padder">

    <div className="testimonial-carousel">
      <div className="testimonial">
      <div className='cont-left'>

        <img
          src={testimonials[current].imageUrl}
          alt={testimonials[current].name}
          className="testimonial-image"
        />
      </div>
      <div className="cont-right">

        <h2>{testimonials[current].name}</h2>
        <h4>{testimonials[current].title}</h4>
        <p>{testimonials[current].testimonial}</p>
      </div>
      </div>
      <button className="prev-btn" onClick={prevTestimonial}>
        &#10094;
      </button>
      <button className="next-btn" onClick={nextTestimonial}>
        &#10095;
      </button>
    </div>
    </div>
    </div>
  );
};

export default TestimonialCarousel;
