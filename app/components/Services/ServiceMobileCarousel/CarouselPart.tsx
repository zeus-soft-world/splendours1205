'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import styles from './Carousel.module.css';
import { Box, Typography } from '@mui/material';

type CarouselProps = {
  items: { imageUrl: string; alt: string, name1: string, name2: string, content: string }[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<CarouselProps> = ({ items, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <button
        className={`${styles.emblaButton} ${styles.emblaButtonPrev}`}
        style={{ color: '#FFFFFF' }}
        onClick={scrollPrev}
        aria-label="Previous"
      >
        ❮ P R E V
      </button>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {items.map((item, index) => (
            <div className={styles.emblaSlide} key={index}>
              <Box className={styles.imageName}>
                <Typography
                  variant="h3"
                  color="#FFFFFF"
                  sx={{
                    fontWeight: 400,
                    textAlign: 'start',
                    fontFamily: 'Chronicle Display',
                    fontSize: '30px'
                  }}
                >
                  {item.name1}
                </Typography>
                <Typography
                  variant="h3"
                  color="#FFFFFF"
                  sx={{
                    fontWeight: 400,
                    textAlign: 'start',
                    fontFamily: 'Chronicle Display',
                    fontSize: '30px'
                  }}
                >
                  {item.name2}
                </Typography>
              </Box>

              <Typography
                variant="h3"
                color="#FFFFFF"
                className={styles.imageContent}
                sx={{
                  fontWeight: 300,
                  textAlign: 'start',
                  fontFamily: 'var(--font-montserrat)',
                  lineHeight: 1.2,
                  fontSize: '13px'
                }}
              >
                {item.content}
              </Typography>
              <img
                className={styles.emblaSlideImg}
                src={item.imageUrl}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${styles.emblaButton} ${styles.emblaButtonNext}`}
        style={{ color: '#FFFFFF' }}
        onClick={scrollNext}
        aria-label="Next"
      >
        N E X T ❯
      </button>
    </div>
  );
};

export default Carousel;
