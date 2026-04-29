import React from 'react';
import { motion } from 'framer-motion';

const AnimeCard = ({ imageSrc, title, subtitle, style, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      className={`absolute glass rounded-3xl p-4 flex flex-col items-center justify-center ${style}`}
    >
      <div className="w-full h-full rounded-2xl overflow-hidden mb-3">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
      <p className="text-sm text-gray-600 font-medium">{subtitle}</p>
    </motion.div>
  );
};

export default AnimeCard;
