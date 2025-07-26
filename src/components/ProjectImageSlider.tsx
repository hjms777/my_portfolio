'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectImageSliderProps {
  imageUrls: string[];
  title: string;
}

export default function ProjectImageSlider({ imageUrls, title }: ProjectImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  if (!imageUrls || imageUrls.length === 0) {
    return (
      <div className="w-full h-64 sm:h-96 relative bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <p className="text-gray-500">No image available</p>
      </div>
    );
  }

  return (
    <div {...handlers} className="w-full h-80 sm:h-[35rem] relative overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentImageIndex}
          className="w-full h-full absolute"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
          transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
        >
          <Image
            src={imageUrls[currentImageIndex]}
            alt={title}
            fill
            style={{ objectFit: 'contain' }} // cover 사용시 비율이 딱 맞게 보여지지만 이미지 잘림
            priority={currentImageIndex === 0}
            draggable="false"
          />
        </motion.div>
      </AnimatePresence>
      {imageUrls.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-10"
            aria-label="Previous Image"
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-10"
            aria-label="Next Image"
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
}
