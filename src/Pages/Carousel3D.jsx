import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMdArrowForward, IoMdArrowBack } from 'react-icons/io';
import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';

const Carousel3D = () => {
    const [activeImage, setActiveImage] = useState(0);
    const swiperRef = useRef(null); // Référence à Swiper
  
    const handleSlideChange = (swiper) => {
      setActiveImage(swiper.realIndex);
    };
  
    const handleNextSlide = () => {
        if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
          const swiperInstance = swiperRef.current.swiper;
          if (activeImage === images.length - 1) {
            // Si on est sur la dernière image, retourner au début du carrousel
            swiperInstance.slideTo(0);
          } else {
            swiperInstance.slideNext(); // Slide suivante
          }
        }
      };
      
      const handlePrevSlide = () => {
        if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
          swiperRef.current.swiper.slidePrev(); // Slide précédente
        }
      };
  const images = [
    '../images/SENGHOR.jpg',
    '../images/Lat-dior.jpg',
    '../images/large.jpg',
    // Ajoutez autant d'images que nécessaire
  ];

  useEffect(() => {
    document.body.style.backgroundImage = `url(${images[activeImage]})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    return () => {
      document.body.style.backgroundImage = ''; // Réinitialise le fond lorsque le composant est démonté
    };
  }, [activeImage, images]);

  return (
    <div className="w-96 h-96 max-w-2xl mx-auto mt-8 border-4 border-slate-100 flex overflow-x-auto transition-all duration-100 relative">
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
      }}
      className="w-full"
      onSlideChange={handleSlideChange}
      initialSlide={activeImage}
      ref={swiperRef}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex-none w-full h-full relative overflow-hidden">
            <img src={image} alt={`Image ${index}`} className="w-full h-full" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <button
      onClick={handlePrevSlide}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 hover:opacity-25 transition-all ease-in-out duration-300 bg-white p-2 rounded-full text-gray-700"
    >
      <IoMdArrowBack size={30} />
    </button>
    <button
      onClick={handleNextSlide}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 hover:opacity-25 transition-all ease-in-out duration-300 bg-white p-2 rounded-full text-gray-700"
    >
      <IoMdArrowForward size={30} />
    </button>
  </div>
  );
};

export default Carousel3D;
