
"use client"
// app/about/page.tsx

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Box, Typography } from '@mui/material';

import StoneTypesFaqAccordion from "../components/Faqs/StoneTypesFaqAccordion";
import ConsultationFaqAccordion from '../components/Faqs/ConsultationFaqAccordion';
import CostFaqAccordion from '../components/Faqs/CostFaqAccordion';
import ServiceFaqAccordion from '../components/Faqs/ServiceFaqAccordion';
import StoneCareFaqAccordion from '../components/Faqs/StoneCareFaqAccordion';
import StoneBenefitsFaqAccordion from '../components/Faqs/StoneBenefitsFaqAccordion';
import ShowRoomFaqAccordion from '../components/Faqs/ShowRoomFaqAccordion';

import StoneTypesFaqAccordionMobile from '../components/Faqs/Mobile/StoneTypesFaqAccordion';
import ConsultationFaqAccordionMobile from '../components/Faqs/Mobile/ConsultationFaqAccordion';
import CostFaqAccordionMobile from '../components/Faqs/Mobile/CostFaqAccordion';
import ServiceFaqAccordionMobile from '../components/Faqs/Mobile/ServiceFaqAccordion';
import StoneCareFaqAccordionMobile from '../components/Faqs/Mobile/StoneCareFaqAccordion';
import StoneBenefitsFaqAccordionMobile from '../components/Faqs/Mobile/StoneBenefitsFaqAccordion';
import ShowRoomFaqAccordionMobile from '../components/Faqs/Mobile/ShowRoomFaqAccordion';

import FooterMobile from '../components/FooterMobile';


const FaqPage = () => {

    // Mobile view (max-width 768px)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Box className="space-y-12">

            <Box className="flex items-center w-full px-3" sx={{ height: '15vh' }}>
                <Header />
            </Box>

            <Box className="space-y-12">

                {isMobile ? <Box className="flex w-full flex-col justify-center items-center gap-y-4">
                    <Box className="flex w-full justify-center">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 300,
                                textAlign: 'center',
                                fontFamily: 'Chronicle Display',
                                fontSize: '60px'
                            }}
                        >
                            AT SPLENDOUR IN STONE,
                        </Typography>
                    </Box>
                    <Box className="flex w-full justify-center" >
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 300,
                                letterSpacing: '1.5',
                                textAlign: 'center',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '15px'
                            }}
                        >
                            we appreciate our clients’ need for the correct information to make informed decisions about your stone design project. Here are some answers to frequent questions asked:
                        </Typography>
                    </Box>
                </Box> : <Box className="flex w-full justify-between px-12">
                    <Box className="flex w-2/3 items-center">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 600,
                                lineHeight: '0.8',
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                fontSize: {
                                    xs: "25px",
                                    sm: "45px",  // Small screens
                                    md: "65px",  // Medium screens
                                    lg: "100px"
                                }
                            }}
                        >
                            AT SPLENDOUR IN STONE,
                        </Typography>
                    </Box>
                    <Box className="flex w-1/4 items-center">
                        <Typography
                            variant="h3"
                            color="#ffffff"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "8px",
                                    sm: "10px",  // Small screens
                                    md: "12px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >
                            we appreciate our clients’ need for the correct information to make informed decisions about your stone design project. Here are some answers to frequent questions asked:
                        </Typography>
                    </Box>
                </Box>}


                {isMobile ? <StoneTypesFaqAccordionMobile /> : <StoneTypesFaqAccordion />
                }
                {isMobile ? <ConsultationFaqAccordionMobile /> : <ConsultationFaqAccordion />
                }
                {isMobile ? <CostFaqAccordionMobile /> : <CostFaqAccordion />
                }
                {isMobile ? <ServiceFaqAccordionMobile /> : <ServiceFaqAccordion />
                }
                {isMobile ? <StoneCareFaqAccordionMobile /> : <StoneCareFaqAccordion />
                }
                {isMobile ? <StoneBenefitsFaqAccordionMobile /> : <StoneBenefitsFaqAccordion />
                }
                {isMobile ? <ShowRoomFaqAccordionMobile /> : <ShowRoomFaqAccordion />
                }
                {/* 

                <CustomDivider />

                <Box className="flex w-full justify-between">
                    <Box className="flex w-1/2 items-center">
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                fontSize: {
                                    xs: "20px",
                                    sm: "30px",  // Small screens
                                    md: "45px",  // Medium screens
                                    lg: "60px"
                                }
                            }}
                        >
                            I HAVE A QUESTION NOT ANSWERED HERE. HOW CAN I REACH YOU?
                        </Typography>
                    </Box>
                    <Box className="flex w-1/3 items-center">
                        <Typography
                            variant="h3"
                            color="#ffffff"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "8px",
                                    sm: "10px",  // Small screens
                                    md: "12px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >
                            No problem! Our team is always ready to assist you. Contact us by phone at (03) 9873 4941, email us at info@splendourinstone.com, or visit our Contact Us page for details. We're happy to answer any questions you may have.
                        </Typography>
                    </Box>
                </Box>

                <FullCustomDivider />

                <Box className="flex justify-between w-full gap-6">
                    <Box className="flex w-1/3">
                        <Image
                            src="/images/Faqs/image1.png"
                            alt="Image1"
                            width={552}
                            height={480}
                        />
                    </Box>
                    <Box className="flex w-2/3">
                        <Image
                            src="/images/Faqs/image2.png"
                            alt="image2"
                            width={1136}
                            height={480}
                        />
                    </Box>
                </Box> */}
            </Box>
            {isMobile ? <FooterMobile /> : <Footer />}
        </Box>
    );
};

export default FaqPage;
