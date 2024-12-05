// Import necessary dependencies
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Header from './Home/Header';
import WhiteCustomButton from './WhiteButton';
import { useMediaQuery } from '@mui/material';

const Home = () => {
    const isMobile = useMediaQuery('(max-width: 768px)'); // Define mobile breakpoint
    return (
        <Box
            className="flex"
            sx={{
                width: '100%',
                backgroundImage: `url(${isMobile ? '/images/Home/background-mobile.png' : '/images/Home/background.jpg'})`, // Use ternary operator for conditional background
                backgroundSize: '100% 100%',
                backgroundPosition: '100% 100%',
                display: 'flex',
                flexDirection: 'column',
                height: isMobile ? '100vh' : '100vh', // Adjust height for mobile
            }}
        >
            <Box className="flex items-center w-full" sx={{paddingX:isMobile?2:8, height: isMobile?'15vh':'20vh' }}>
                <Header />
            </Box>

            <Box className="relative flex items-center w-full" sx={{ height: isMobile ? '60vh' : '72vh' }}>
                <Box className="flex w-4/5">

                </Box>
                <Box className="flex justify-between w-1/5 h-5/6">

                    {isMobile ? <Box></Box> : (<Box className="flex items-end w-1/2" >
                        <Image
                            src="/images/Home/text_circle.png"
                            alt="Logo"
                            width={90}
                            height={90}
                        />
                    </Box>)}

                    <Box className="absolute mt-56 mr-40">
                        <Image
                            src="/images/Home/zoom.svg"
                            alt="Logo"
                            width={24}
                            height={24}
                        />
                    </Box>
                    <Box className="flex w-1/4">
                        <Image
                            src="/images/Home/right_text.png"
                            alt="Logo"
                            width={18}
                            height={300}
                        />
                    </Box>
                </Box>
            </Box>

            {isMobile ? (<Box className="flex flex-col w-full" sx={{paddingX:'10px', height: '30vh' }}>

                <Box className="flex items-center justify-center w-2/3 pl-5">
                    <Typography
                        variant="h3"
                        color="#FFFFFF"
                        sx={{
                            fontWeight: 400,
                            alignContent: 'flex-start',
                            fontFamily: 'Chronicle Display',
                            fontSize: {
                                lg: "50px"
                            }
                        }}
                    >
                        STONE BY SPLENDOUR IN STONE
                    </Typography>
                </Box>
                <Box className="flex items-center justify-around w-full ">
                    <Box className="w-0 sm:w-1/12 md:w-1/12 lg:w-1/12"></Box>
                    <WhiteCustomButton label={'Enquire now!'} iconSrc={'images/Vector.svg'} />
                    <WhiteCustomButton label={'Contact Us'} iconSrc={'images/Vector.svg'} />
                </Box>

            </Box>) : (<Box className="flex flex-col w-full mb-6 sm:flex-row md:flex-row lg:flex-row" sx={{ height: '8vh' }}>
                <Box className="flex items-center justify-around w-full sm:w-1/3 md:w-1/3">
                    <Box className="w-0 sm:w-1/12 md:w-1/12 lg:w-1/12"></Box>
                    <WhiteCustomButton label={'Enquire now!'} iconSrc={'images/Vector.svg'} />
                    <WhiteCustomButton label={'Contact Us'} iconSrc={'images/Vector.svg'} />
                </Box>
                <Box className="flex items-center justify-center w-2/3">
                    <Typography
                        variant="h3"
                        color="#FFFFFF"
                        sx={{
                            fontWeight: 400,
                            alignContent: 'flex-start',
                            fontFamily: 'Chronicle Display',
                            fontSize: {
                                lg: "60px"
                            }
                        }}
                    >
                        STONE BY SPLENDOUR IN STONE
                    </Typography>
                </Box>
            </Box>)}
        </Box>
    );
};

export default Home;
