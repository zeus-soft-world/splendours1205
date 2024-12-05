// components/FooterMobile.tsx
"use client"; // This line makes this file a client component in Next.js

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import FullCustomGreenDivider from "../components/Divider/FullCustomGreenDivider";

const FooterMobile = () => {
    return (
        <Box
            className="relative flex flex-col w-full rounded-t-[20px] space-y-8"
            sx={{
                backgroundImage: 'url(images/Footer/background-mobile.jpg)', // Add your image path here
                backgroundSize: 'cover', // Ensures the background image covers the entire area
                backgroundPosition: 'center', // Centers the background image
                backgroundRepeat: 'no-repeat', // Prevents repeating the background image
            }}
        >
            <Box className="flex w-full justify-center mt-6 mb-6">
                <Image
                    src="/images/Footer/footer-logo-mobile.svg"
                    alt="Logo"
                    width={182}
                    height={166}
                />
            </Box>
            <Box className="flex flex-col w-full justify-center space-y-5">
                <Box className="flex w-full justify-center">
                    <Typography
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 400,
                            alignContent: 'flex-start',
                            fontFamily: 'Chronicle Display',
                            fontStyle: 'italic',
                            fontSize: '50px'
                        }}
                    >
                        LINKS
                    </Typography>
                </Box>
                <Box className="flex flex-col w-full space-y-3">
                    <Box className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 300,
                            }}
                        >HOME</Typography>
                    </Box>
                    <Box className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 300,
                            }}
                        >WALLING</Typography>
                    </Box>
                    <Box className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 300,
                            }}
                        >PAVING</Typography>
                    </Box>
                    <Box className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 300,
                            }}
                        >BLOG</Typography>
                    </Box>
                </Box>


            </Box>

            <Box className="flex flex-col w-full justify-center space-y-5">
                <Box className="flex w-full justify-center">
                    <Typography
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 400,
                            alignContent: 'flex-start',
                            fontFamily: 'Chronicle Display',
                            fontStyle: 'italic',
                            fontSize: '50px'
                        }}
                    >
                        INFO
                    </Typography>
                </Box>
                <Box className="flex flex-col w-full space-y-3">
                    <Box className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 300,
                            }}
                        >ABOUT</Typography>
                    </Box>
                    <Box className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 300,
                            }}
                        >GALLERY</Typography>
                    </Box>
                    <Box className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 300,
                            }}
                        >CONTACT</Typography>
                    </Box>
                    <Box className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 300,
                            }}
                        >CONSULTATION</Typography>
                    </Box>
                </Box>


            </Box>

            <Box className="flex w-full justify-center px-12">
                <Box className="flex flex-col w-2/3 space-y-3">
                    <Box className="flex justify-between">
                        <Box className="flex w-1/3 justify-start">
                            <Image
                                src="/images/FooterIcon/facebook.svg"
                                alt="Plus"
                                width={47}
                                height={47}
                            />
                        </Box>
                        <Box className="flex w-1/3 justify-center">
                            <Image
                                src="/images/FooterIcon/twitter.svg"
                                alt="Plus"
                                width={47}
                                height={47}
                            />
                        </Box>
                        <Box className="flex w-1/3 justify-end">
                            <Image
                                src="/images/FooterIcon/upwork.svg"
                                alt="Plus"
                                width={47}
                                height={47}
                            />
                        </Box>
                    </Box>
                    <Box className="flex justify-between">
                        <Box className="flex w-1/3 justify-start">
                            <Image
                                src="/images/FooterIcon/linkedin.svg"
                                alt="Plus"
                                width={47}
                                height={47}
                            />
                        </Box>
                        <Box className="flex w-1/3 justify-center">
                            <Image
                                src="/images/FooterIcon/youtube.svg"
                                alt="Plus"
                                width={47}
                                height={47}
                            />
                        </Box>
                        <Box className="flex w-1/3 justify-end">
                            <Image
                                src="/images/FooterIcon/instagram.svg"
                                alt="Plus"
                                width={47}
                                height={47}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <FullCustomGreenDivider />

            <Box className="flex w-full flex-col itmes-center py-5 space-y-5">
                <Box className="flex w-full justify-center">
                    <Typography
                        variant="h3"
                        color="#283C28"
                        className="text-center font-bold"
                        sx={{
                            fontWeight: 600,
                            fontFamily: 'Chronicle Display',
                            fontSize: '20px'
                        }}
                    >
                        SPLENDOUR IN STONE 2024
                    </Typography>
                </Box>
                <Box className="flex w-full justify-center">
                    <Typography
                        variant="h3"
                        className="text-center font-thin"
                        color="#283C28"
                        sx={{
                            fontWeight: 300,
                            fontFamily: 'Chronicle Display',
                            fontSize: '20px'
                        }}
                    >
                        © ALL RIGHTS RESERVED
                    </Typography>
                </Box>

            </Box>
        </Box>
    );
};

export default FooterMobile;
