'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

type CarouselProps = {
  items: { imageUrl: string; alt: string }[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<CarouselProps> = ({ items, options }) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item, index) => (
            <div className="embla__slide_jouney" key={index}>
              <img
                className="embla__slide__img"
                src={item.imageUrl}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
