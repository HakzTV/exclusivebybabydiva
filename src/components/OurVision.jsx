import { motion } from 'framer-motion';
import scissors from '../assets/images/scissors.svg';
import thread from '../assets/images/thread.png';
import machine from '../assets/images/machine.png';

const VisionComponent = () => {
  return (
    
    <section className="vision-section">
      <motion.div 
        className="vision-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="vision-title">Our Vision</h2>
        <p className="vision-text">
        To expand EBfl beyond the shores of Africa, becoming a renowned global fashion brand. Our vision encompasses not only the creation of exquisite fashion but also the provision of employment opportunities for thinkers and innovators. We aim to be a hub for training, nurturing talent, and building top-notch fashion expertise.
        </p>
      </motion.div>

      <div className="vision-images">
        {/* <motion.div
          className="vision-image vision-image-1"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="vision-image vision-image-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="vision-image vision-image-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        /> */}
      </div>
      <div className="scissors">
        <img src={thread} alt="" className="thread" />
        <img src={machine} alt="" className="machine" />
      <img src={scissors} alt="" />
      </div>
    </section>
  );
};

export default VisionComponent;
