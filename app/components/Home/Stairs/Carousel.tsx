import React, { useState } from 'react';
import { Box, Typography} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';


interface ImageCarouselProps {
    images: { src: string }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };


    return (
        <Box className="w-full flex flex-col aspect-[1/1] min-w-1 bg-[#DBC6BC] rounded-[20px] p-8" style={{ marginTop: '270px' }}>
            {/* // <div className="relative w-full max-w-4xl mx-auto"> */}
            {/* Image Display */}
            <div className="relative h-48 sm:h-80 md:h-96">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={image.src}
                            alt="images"
                            className="object-cover w-full mt-[-200px]"
                        />
                    </div>
                ))}
            </div>
            <Box className="flex flex-col w-full space-y-3">
                <Box className="flex items-center justify-between w-full">
                    {/* <CarouselPart data={PARTDATA} /> */}
                    <Box>
                        <Image
                            src="/images/Home/Interactive_part/card1.jpg"
                            alt="Plus"
                            width={75}
                            height={85}
                        />
                    </Box>

                    <Box className='flex flex-col w-2/3 h-[100px] justify-around'>
                        <Typography
                            variant="h3"
                            color="#283C28"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                fontSize: '30px'
                            }}
                        >
                            CHARLOTTE
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#17181C"
                            sx={{
                                width: '90%',
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px'
                            }}
                        >
                            Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink.
                        </Typography>
                    </Box>

                </Box>
                <Box className="flex justify-between w-full">
                    <Typography color="#283C28" sx={{
                        fontWeight: 500,
                        alignContent: 'flex-start',
                        fontFamily: 'var(--font-montserrat)',
                        fontSize: '15px'
                    }}>Category: Stairs</Typography>
                    <Typography color="#283C28" sx={{
                        fontWeight: 500,
                        alignContent: 'flex-start',
                        fontFamily: 'var(--font-montserrat)',
                        fontSize: '15px'
                    }}>Tag:  Exclusive</Typography>
                </Box>
                <Box className="flex justify-between w-full">
                    <Box onClick={handlePrev}>
                        <ArrowBackIosNewIcon /> P R E V
                    </Box>
                    <Typography
                        className="text-center"
                        variant="h3"
                        color="#283C28"
                        sx={{
                            lineHeight: 0.8,
                            fontWeight: 500,
                            fontFamily: 'Chronicle Display',
                            fontSize: '30PX'
                        }}
                    >
                        STAIRS
                    </Typography>
                    <Box onClick={handleNext}>
                        N E X T
                        <ArrowForwardIosIcon />
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default ImageCarousel;
