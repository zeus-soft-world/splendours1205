// components/Footer.tsx
"use client"; // This line makes this file a client component in Next.js

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import FullCustomGreenDivider from '../components/Divider/FullCustomGreenDivider'

const Footer = () => {
    return (
        <Box
            className="relative flex flex-col w-full px-16 rounded-t-[35px]"
            sx={{
                backgroundImage: 'url(images/FooterIcon/background.jpg)', // Add your image path here
                backgroundSize: 'cover', // Ensures the background image covers the entire area
                backgroundPosition: 'center', // Centers the background image
                backgroundRepeat: 'no-repeat', // Prevents repeating the background image
            }}
        >
            <Box className="flex w-full justify-between py-12">
                <Box className="flex w-1/4">
                    <Box>
                        <Image
                            src="/images/FooterIcon/footer-logo.svg"
                            alt="Logo"
                            width={140}
                            height={140}
                        />
                    </Box>
                </Box>
                <Box className="w-1/6">
                </Box>
                <Box className="flex flex-col w-1/4 justify-center gap-3">
                    <Box className="flex w-1/2">
                        <Typography
                            variant="h3"
                            color="#283C28"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: {
                                    xs: "12px",
                                    sm: "25px",  // Small screens
                                    md: "30px",  // Medium screens
                                    lg: "40px"
                                }
                            }}
                        >
                            LINKS
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Box className="flex w-1/2">
                            <ul className="space-y-3" style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#283C28' }}>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="#283C28"
                                        className="font-semibold"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >HOME</Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="#283C28"
                                        className="font-semibold"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        WALLING
                                    </Typography>
                                </li>
                            </ul>
                        </Box>
                        <Box className="flex w-1/2">

                            <ul className="space-y-3" style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#283C28' }}>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="#283C28"
                                        className="font-semibold"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        PAVING
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="#283C28"
                                        className="font-semibold"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        BLOG
                                    </Typography>
                                </li>
                            </ul>
                        </Box>
                    </Box>


                </Box>
                <Box className="flex flex-col w-1/4 justify-center gap-3">
                    <Box className="flex w-1/2">
                        <Typography
                            variant="h3"
                            color="#283C28"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: {
                                    xs: "12px",
                                    sm: "25px",  // Small screens
                                    md: "30px",  // Medium screens
                                    lg: "40px"
                                }
                            }}
                        >
                            INFO
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Box className="flex w-1/2">

                            <ul className="space-y-3" style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#283C28' }}>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="#283C28"
                                        className="font-semibold"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >HOME</Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="#283C28"
                                        className="font-semibold"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        WALLING
                                    </Typography>
                                </li>
                            </ul>
                        </Box>
                        <Box className="flex w-1/2">

                            <ul className="space-y-3" style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#283C28' }}>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="#283C28"
                                        className="font-semibold"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        PAVING
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="#283C28"
                                        className="font-semibold"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: '8px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '15px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        BLOG
                                    </Typography>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <FullCustomGreenDivider />

            <Box className="flex w-full justify-between pt-10 pb-16">
                <Box className="flex w-1/5 justify-between">
                    <Box className="flex w-1/6">
                        <Image
                            src="/images/FooterIcon/facebook.svg"
                            alt="Plus"
                            width={30}
                            height={30}
                        />
                    </Box>
                    <Box className="flex w-1/6">
                        <Image
                            src="/images/FooterIcon/twitter.svg"
                            alt="Plus"
                            width={30}
                            height={30}
                        />
                    </Box>
                    <Box className="flex w-1/6">
                        <Image
                            src="/images/FooterIcon/linkedin.svg"
                            alt="Plus"
                            width={30}
                            height={30}
                        />
                    </Box>
                    <Box className="flex w-1/6">
                        <Image
                            src="/images/FooterIcon/youtube.svg"
                            alt="Plus"
                            width={30}
                            height={30}
                        />
                    </Box>
                    <Box className="flex w-1/6">
                        <Image
                            src="/images/FooterIcon/instagram.svg"
                            alt="Plus"
                            width={30}
                            height={30}
                        />
                    </Box>
                    <Box className="flex w-1/6">
                        <Image
                            src="/images/FooterIcon/upwork.svg"
                            alt="Plus"
                            width={30}
                            height={30}
                        />
                    </Box>
                </Box>
                <Box className="flex">
                    <Typography
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 600,
                            alignContent: 'flex-start',
                            justifyContent: 'flex-end',
                            fontFamily: 'Chronicle Display',
                            fontSize: {
                                xs: "8px",
                                sm: "14px",  // Small screens
                                md: "18px",  // Medium screens
                                lg: "20px"
                            }
                        }}
                    >
                        SPLENDOUR IN STONE 2024 © <span className="font-light">ALL RIGHTS RESERVED</span>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
