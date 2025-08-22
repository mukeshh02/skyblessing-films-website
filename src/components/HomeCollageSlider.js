import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './HomeCollageSlider.css';

const images = [
  process.env.PUBLIC_URL + '/Img/POST/1 (1).jpg',
  process.env.PUBLIC_URL + '/Img/POST/2 (1).jpg',
  process.env.PUBLIC_URL + '/Img/POST/3 (1).jpg',
  process.env.PUBLIC_URL + '/Img/POST/4.jpg',
  process.env.PUBLIC_URL + '/Img/POST/5.jpg',
  process.env.PUBLIC_URL + '/Img/POST/6.jpg',
  process.env.PUBLIC_URL + '/Img/POST/7.jpg',
  process.env.PUBLIC_URL + '/Img/POST/8.jpg'
];

const HomeCollageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image, index) => {
    setSelectedImage({ image, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="collage-slider" id="galleries-collage">
      <div className="collage-grid">
        {/* Large featured image */}
        <motion.div 
          className="grid-item large"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={() => openModal(images[0], 0)}
        >
          <img src={images[0]} alt="Wedding photography" />
          <div className="image-overlay">
            <span className="view-icon">👁</span>
          </div>
        </motion.div>

        {/* Medium images */}
        <div className="grid-column">
          <motion.div 
            className="grid-item medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => openModal(images[1], 1)}
          >
            <img src={images[1]} alt="Wedding photography" />
            <div className="image-overlay">
              <span className="view-icon">👁</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid-item medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => openModal(images[2], 2)}
          >
            <img src={images[2]} alt="Wedding photography" />
            <div className="image-overlay">
              <span className="view-icon">👁</span>
            </div>
          </motion.div>
        </div>

        {/* Small images grid */}
        <div className="small-grid">
          {images.slice(3, 7).map((image, index) => (
            <motion.div 
              key={index + 3}
              className="grid-item small"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              onClick={() => openModal(image, index + 3)}
            >
              <img src={image} alt="Wedding photography" />
              <div className="image-overlay">
                <span className="view-icon">👁</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tall image */}
        <motion.div 
          className="grid-item tall"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => openModal(images[7], 7)}
        >
          <img src={images[7]} alt="Wedding photography" />
          <div className="image-overlay">
            <span className="view-icon">👁</span>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div 
          className="image-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage.image} alt="Wedding photography" />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HomeCollageSlider;


