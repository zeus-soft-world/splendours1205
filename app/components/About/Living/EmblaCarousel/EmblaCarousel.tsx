import React, { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { LazyLoadImage } from './EmblaCarouselLazyLoadImage'

import data from "./EmblaData.json";

interface Resource {
  imageUrl?: string;
  name?: string;  // Add name property
  subname?: string
}

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRed, emblaApi] = useEmblaCarousel(options)
  const [slidesInView, setSlidesInView] = useState<number[]>([])

  const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    setSlidesInView((slidesInView) => {
      if (slidesInView.length === emblaApi.slideNodes().length) {
        emblaApi.off('slidesInView', updateSlidesInView)
      }
      const inView = emblaApi
        .slidesInView()
        .filter((index) => !slidesInView.includes(index))
      return slidesInView.concat(inView)
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    updateSlidesInView(emblaApi)
    emblaApi.on('slidesInView', updateSlidesInView)
    emblaApi.on('reInit', updateSlidesInView)
  }, [emblaApi, updateSlidesInView])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRed}>
        <div className="embla__container">
          {data.resources.filter((resource: Resource) => resource.imageUrl).map((resource: Resource, index: number) => (
            <LazyLoadImage
              key={index}
              index={index}
              imgSrc={resource.imageUrl!}
              name={resource.name || "Unnamed"}  // Pass name or fallback to "Unnamed"
              subname={resource.subname || "Unnamed"}
              inView={slidesInView.indexOf(index) > -1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
