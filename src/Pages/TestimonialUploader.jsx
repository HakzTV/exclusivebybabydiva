import { useState } from 'react';
import { storage, db } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import Navbar from '../components/Navbar';
import WhatsAppChat from '../components/WhatsappChat';

const TestimonialUploader = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !title || !testimonial || !image) {
      alert('Please fill in all fields and upload an image.');
      return;
    }

    setLoading(true);

    try {
      const storageRef = ref(storage, `testimonials/${image.name}`);
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);

      // Add the testimonial to Firestore
      await addDoc(collection(db, 'Testimonials'), {
        name,
        title,
        testimonial,
        imageUrl,
      });

      alert('Testimonial uploaded successfully!');
      setName('');
      setTitle('');
      setTestimonial('');
      setImage(null);
    } catch (error) {
      console.error('Error uploading testimonial:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">

    <Navbar />
    <div className="testimonial-uploader">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Testimonial:
          <textarea
            value={testimonial}
            onChange={(e) => setTestimonial(e.target.value)}
            required
          />
        </label>
        <label>
          Image:
          <input type="file" onChange={handleImageChange} required />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Testimonial'}
        </button>
      </form>
    </div>
    <WhatsAppChat /> 

    </div>
  );
};

export default TestimonialUploader;
