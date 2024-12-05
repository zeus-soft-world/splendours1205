"use client"

import { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import Home from "./components/Home";
import Splendours_header_level from "./components/Splendours_header_level";
import SplenderoursProductsCarousel from "./components/SplenderoursProductsCarousel";
import ShortCustomBrownDivider from "./components/Divider/ShortCustomBrownDivider";
import CustomWallCard from "./components/WallCard";
import Carousel from "./components/Carousel";
import CarouselPart from "./components/CarouselPart";
import WhiteCustomButton from "./components/WhiteButton";
import GreenCustomButton from "./components/GreenCustomButton";
import DateCarousel from "./components/DateCarousel";
import CustomTextField from "./components/CustomTextField";
import CalendarControl from "./components/CalendarControl";
import TimeCarousel from "./components/TimeCarousel";
import ServiceCarousel from "./components/ServiceCarousel";
import ProductCarousel from "./components/ProductCarousel";
import PhaseCarousel from "./components/PhaseCarousel";
import MeasurementAccordion from "./components/MeasurementAccordion";
import Footer from "./components/Footer";
import FooterMobile from "./components/FooterMobile";
import MeasurementAccordionMobile from "./components/Home/Services/MeasurementAccordion";
import TechnicalAccordion from "./components/Home/Accordion/TechnicalAccordion";
import ProductionAccordion from "./components/Home/Accordion/ProductionAccordion";
import InstallationAccordion from "./components/Home/Accordion/InstallationAccordion";
import TechnicalAccordionMobile from "./components/Home/Services/TechnicalAccordion";
import ProductionAccordionMobile from "./components/Home/Services/ProductionAccordion";
import InstallationAccordionMobile from "./components/Home/Services/InstallationAccordion";
import StairsCarousel from "./components/Home/Stairs/Carousel";
import GreenCustomMobileButton from "./components/Buttons/GreenCustomMobileButton";
import { EmblaOptionsType } from 'embla-carousel'
import WallingRangeEmblaCarousel from "./components/Home/WallingRange/EmblaCarousel/EmblaCarousel";
import PavingRangeEmblaCarousel from "./components/Home/PavingRange/EmblaCarousel/EmblaCarousel";
import './embla.css';

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const PARTDATA = [
    { image: '/images/Home/Interactive_part/card1.jpg' },
    { image: '/images/Home/Interactive_part/card2.jpg' },
    { image: '/images/Home/Interactive_part/card3.jpg' },
    { image: '/images/Home/Interactive_part/card4.jpg' }
]
const DATA = [
    { image: '/images/Home/Interactive_main/slide1.png' },
    { image: '/images/Home/Interactive_main/slide2.png' },
    { image: '/images/Home/Interactive_main/slide3.png' },
]

const images = [
    {
        src: '/images/Home/Interactive_main/slide1.png',
        alt: 'Image 1',
    },
    {
        src: '/images/Home/Interactive_main/slide2.png',
        alt: 'Image 2',
    },
    {
        src: '/images/Home/Interactive_main/slide3.png',
        alt: 'Image 3',
    },
];

const HomePage = () => {

    const isMobile = useMediaQuery('(max-width: 768px)'); // Media query for mobile
    const inputRef = useRef<HTMLInputElement | null>(null); // Create a ref for the input element
    const [resources, setResources] = useState<{ date: string; day: string }[]>([]); // State for resources
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // 1 - 12 for Jan - Dec
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Current year

    const [showFullText, setShowFullText] = useState(false); // State to toggle text display

    const handleToggle = () => {
        setShowFullText(!showFullText);
    };

    const shortText = `We offer a wide range of services that focus on the use of stone materials. Our clients can expect top-notch service that includes design, manufacturing, delivery, and assembly.`;
    const fullText = `We offer a wide range of services that focus on the use of stone materials. Our clients can expect top-notch service that includes design, manufacturing, delivery, and assembly. Our team of experts use state-of-the-art technology and equipment to ensure that every project is built to the highest quality standards. The client's experience is at the heart of our motivation. We provide support throughout the entire project. Our products are unique and adapted to the specifics of each client, and our clients can choose from a wide range of materials and colors. Also, our clients can rely on our support and advice throughout the process to ensure that their projects are successfully implemented. Our goal is to create products that will not only meet, but also exceed the expectations of our customers.`;


    // Function to get month abbreviation
    const getMonthAbbreviation = (month: number): string => {
        const monthMap = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        return monthMap[month - 1]; // Adjust for zero-based index
    };

    // Function to generate month resources based on selected year and month
    const generateResources = (year: number, month: number) => {
        const daysInMonth = new Date(year, month, 0).getDate(); // Get number of days in the month
        const newResources: { date: string; day: string }[] = [];

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month - 1, day);
            const dayName = date.toLocaleString('default', { weekday: 'short' }).toUpperCase();
            newResources.push({ date: day.toString(), day: dayName });
        }

        // Update the resources state with the new array
        // setResources(newResources);
        return newResources;
    };

    // Function to handle the click on the CalendarControl
    const handleCalendarControlClick = () => {
        if (inputRef.current) {
            inputRef.current.showPicker(); // Trigger the click event on the inputi
        }
    };

    // Handle month input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value; // e.g., "2024-05"
        const [year, month] = value.split('-').map(Number); // Split into year and month
        setSelectedYear(year);
        setSelectedMonth(month);

        const newResources = generateResources(year, month);
        setResources(newResources); // Update the resources state

    };

    // Initialize with current month and year resources
    useEffect(() => {
        const initialResources = generateResources(selectedYear, selectedMonth);
        setResources(initialResources);
    }, [selectedYear, selectedMonth]); // Dependency array only includes selectedMonth and selectedYear


    return (
        <Box>
            <Box
                sx={{
                    width: "100%", // equivalent to "w-full"
                    display: "flex", // equivalent to "flex"
                    flexDirection: "column", // equivalent to "flex-col"
                    gap: isMobile ? "2rem" : "6rem", // equivalent to "gap-y-24" (6 * 4px = 24px per unit in Tailwind)
                }}
            >
                <Home />

                <Box><Splendours_header_level /></Box>

                <Box
                    sx={{
                        px: isMobile ? 2 : 5, // equivalent to "px-20" (20 units in Tailwind = 20 * 0.25rem = 5rem)
                        "& > *:not(:last-child)": {
                            marginBottom: "6rem", // equivalent to "space-y-24" (24 units in Tailwind = 24 * 0.25rem = 6rem)
                        },
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'center' : 'space-between', alignItems: isMobile ? 'center' : 'flex-end' }}>
                        <Box sx={{ width: isMobile ? "100%" : "40%" }}>
                            <Typography
                                // className="text-center"
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    lineHeight: 0.8,
                                    fontWeight: 500,
                                    fontFamily: 'Chronicle Display',
                                    textAlign: isMobile ? 'center' : 'start',
                                    fontSize: {
                                        xs: "40px",
                                        sm: "50px",
                                        md: "65px",
                                        lg: "90px"
                                    }
                                }}
                            >
                                SPLENDOURS PROJECTS
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: isMobile ? '30px' : '0px' }}>
                            <WhiteCustomButton label={'View all'} iconSrc={'/images/vector.svg'} />
                        </Box>
                    </Box>

                    <SplenderoursProductsCarousel />
                </Box>

                <ShortCustomBrownDivider />

                {isMobile ? <Box className="flex flex-col px-10">
                    <Typography variant="body1" color="#DBC6BC" sx={{ fontFamily: "Chronicle Display", fontSize: '50px', fontWeight: 700, lineHeight: 1.1, textAlign: 'center' }}>STATE OF THE ART SHOWROOM</Typography>
                </Box> : <Box className="flex flex-col px-20">
                    <Typography variant="body1" color="white" sx={{ fontFamily: "Chronicle Display", fontSize: { xs: '20px', sm: '30px', md: '45px', lg: '75px' }, fontWeight: 700, lineHeight: 1.1, opacity: '10%' }}>SAME DAY QUOTES</Typography>
                    <Typography variant="body1" color="#DBC6BC" sx={{ fontFamily: "Chronicle Display", fontSize: { xs: '20px', sm: '30px', md: '45px', lg: '75px' }, fontWeight: 700, lineHeight: 1.1, textAlign: 'center' }}>STATE OF THE ART SHOWROOM</Typography>
                    <Typography variant="body1" color="white" sx={{ fontFamily: "Chronicle Display", fontSize: { xs: '20px', sm: '30px', md: '45px', lg: '75px' }, fontWeight: 700, lineHeight: 1.1, opacity: '10%', textAlign: "right" }}>SUPPLY & INSTALL PACKAGES</Typography>
                </Box>}

                {isMobile ? <ShortCustomBrownDivider /> : <></>}

                {isMobile ? <Box
                    id="walling-mb"
                    className="flex flex-col items-center w-full py-20 gap-y-10 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/Home/WallingRange/background-mobile.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >

                    <Box className="flex flex-col w-full items-center px-16 space-y-4">
                        <Box className="flex justify-center items-center w-3/5">
                            <Typography
                                className="font-semibold text-center"
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 700,
                                    lineHeight: 0.9,
                                    fontFamily: 'Chronicle Display',
                                    fontSize: '40px'
                                }}
                            >
                                WALLING RANGE
                            </Typography>
                        </Box>
                        <Box className="flex w-full">
                            <Typography
                                variant="h3"
                                color="#000000"
                                sx={{
                                    fontWeight: 400,
                                    textAlign: 'center',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '20px'
                                }}
                            >

                                We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                            </Typography>
                        </Box>
                        <Box className="flex justify-center w-full">
                            <GreenCustomButton label={'View all'} iconSrc={'images/vector.svg'} />
                        </Box>
                    </Box>

                    <Box className="flex w-full">
                        <WallingRangeEmblaCarousel slides={SLIDES} options={OPTIONS} />
                    </Box>
                </Box>
                    : <Box
                        id="walling"
                        className="relative flex flex-col w-full px-20 py-20 gap-y-24 rounded-[40px]"
                        sx={{
                            backgroundImage: 'url(images/Home/WallingRange/background.jpg)', // Add your image path here
                            backgroundSize: 'cover', // Ensures the background image covers the entire area
                            backgroundPosition: 'center', // Centers the background image
                            backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                        }}
                    >

                        <Box className="flex items-start justify-between w-full">
                            <Box className="flex items-center w-2/3">
                                <Typography
                                    className="font-semibold"
                                    variant="h3"
                                    color="#283C28"
                                    sx={{
                                        alignContent: 'flex-start',
                                        textAlign: 'start',
                                        fontWeight: 700,
                                        fontFamily: 'Chronicle Display',
                                        fontSize: {
                                            xs: "25px",
                                            sm: "45px",  // Small screens
                                            md: "55px",  // Medium screens
                                            lg: "100px"
                                        }
                                    }}
                                >
                                    WALLING RANGE
                                </Typography>
                            </Box>
                            <Box className="flex flex-col w-1/5 gap-y-6 mt-4">
                                <Box>
                                    <Typography
                                        variant="h3"
                                        color="#000000"
                                        sx={{
                                            fontWeight: 400,
                                            alignContent: 'flex-start',
                                            lineHeight: '1',
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: "8px",
                                                sm: "10px",  // Small screens
                                                md: "12px",  // Medium screens
                                                lg: "18px"
                                            }
                                        }}
                                    >

                                        We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                                    </Typography>
                                </Box>
                                <Box>
                                    <GreenCustomButton label={'View all'} iconSrc={'images/vector.svg'} />
                                </Box>

                            </Box>
                        </Box>

                        <Box className="flex flex-col w-full gap-y-7">
                            <Box className="flex justify-between w-full gap-7">
                                <CustomWallCard product_image_src="images/Home/WallingRange/product1.jpg" product_subname="CHARLOTTE" />
                                <CustomWallCard product_image_src="images/Home/WallingRange/product2.jpg" product_subname="JAMIESON" />
                                <CustomWallCard product_image_src="images/Home/WallingRange/product3.jpg" product_subname="BUFFALO" />
                            </Box>
                            <Box className="flex justify-between w-full gap-7">
                                <CustomWallCard product_image_src="images/Home/WallingRange/product4.jpg" product_subname="BELOKA" />
                                <CustomWallCard product_image_src="images/Home/WallingRange/product5.jpg" product_subname="SHOREHAM" />
                                <CustomWallCard product_image_src="images/Home/WallingRange/product6.jpg" product_subname="BEACHPORT" />
                            </Box>
                        </Box>
                    </Box>
                }

                {isMobile ? <ShortCustomBrownDivider /> : <></>}

                <Box className="space-y-24" sx={{ paddingX: isMobile ? 2 : 8 }}>
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'center' : 'space-between', alignItems: isMobile ? 'center' : 'flex-end', paddingX: isMobile ? 0 : 8 }}>
                        <Box sx={{ width: isMobile ? "80%" : "70%" }}>
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    lineHeight: 0.8,
                                    textAlign: isMobile ? 'center' : 'start',
                                    fontWeight: 500,
                                    fontFamily: 'Chronicle Display',
                                    fontSize: isMobile ? '50px' : '100px'
                                }}
                            >
                                3D INTERACTIVE VIEWER
                            </Typography>
                        </Box>

                        {isMobile ? <Box className="flex flex-col items-center justify-center w-full pt-3 space-y-7">
                            <Box className="flex w-2/3 justify-normal">
                                <Typography
                                    variant="h3"
                                    color="#ffffff"
                                    sx={{
                                        fontWeight: 400,
                                        textAlign: 'center',
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '15px'
                                    }}
                                >
                                    We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                                </Typography>
                            </Box>
                            <Box className="flex justify-around w-full">
                                <WhiteCustomButton label={'View all'} iconSrc={'images/vector.svg'} />
                                <WhiteCustomButton label={'Try Now!'} iconSrc={'images/vector.svg'} />
                            </Box>

                        </Box> : <Box className="flex flex-col justify-start w-1/4 gap-y-5">
                            <Box>
                                <Typography
                                    variant="h3"
                                    color="#ffffff"
                                    style={{ textAlign: 'justify' }}
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: {
                                            xs: "8px",
                                            sm: "10px",  // Small screens
                                            md: "12px",  // Medium screens
                                            lg: "18px"
                                        }
                                    }}
                                >
                                    We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                                </Typography>
                            </Box>
                            <Box>
                                <WhiteCustomButton label={'View all'} iconSrc={'images/vector.svg'} />
                            </Box>

                        </Box>}

                    </Box>

                    {isMobile ? <StairsCarousel images={images} /> : <Box className="w-full flex flex-col aspect-[3.77/1] min-w-1 bg-[#DBC6BC] rounded-[40px] p-8" style={{ marginTop: '270px' }}>
                        <Box className="flex justify-between w-1/5 gap-x-4">
                            <CarouselPart data={PARTDATA} />
                            <Box className='flex flex-col h-[100px] justify-around'>
                                <Typography
                                    variant="h3"
                                    color="#283C28"
                                    sx={{
                                        fontWeight: 400,
                                        alignContent: 'flex-start',
                                        fontFamily: 'Chronicle Display',
                                        fontSize: {
                                            xs: "10px",
                                            sm: "15px",  // Small screens
                                            md: "25px",  // Medium screens
                                            lg: "25px"
                                        }
                                    }}
                                >
                                    CHARLOTTE
                                </Typography>
                                <Typography
                                    variant="h3"
                                    color="#17181C"
                                    sx={{
                                        // width: '90%',
                                        fontWeight: 300,
                                        alignContent: 'flex-start',
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: {
                                            xs: "7px",
                                            sm: "10px",  // Small screens
                                            md: "10px",  // Medium screens
                                            lg: "10px"
                                        }
                                    }}
                                >
                                    Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink.
                                </Typography>
                            </Box>

                        </Box>
                        <Box className="flex justify-center w-full">
                            <Carousel data={DATA} />
                        </Box>
                        <Box className="flex justify-between w-full">
                            <Box>
                                <Typography color="#283C28 font-semibold" sx={{
                                    fontWeight: 500,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.2',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "10px",  // Small screens
                                        md: "12px",  // Medium screens
                                        lg: "15px"
                                    }
                                }}>Category: Stairs</Typography>
                                <Typography color="#283C28 font-semibold" sx={{
                                    fontWeight: 500,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.2',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "10px",  // Small screens
                                        md: "12px",  // Medium screens
                                        lg: "15px"
                                    }
                                }}>Tag:  Exclusive</Typography>
                            </Box>
                            <Box>
                                <GreenCustomButton label={'Try Now!'} iconSrc={'images/vector.svg'} />
                            </Box>
                        </Box>
                    </Box>}


                </Box>

                {isMobile ? <ShortCustomBrownDivider /> : <></>}

                {isMobile ? <Box
                    id="paving-mb"
                    className="flex flex-col items-center w-full py-20 gap-y-10 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/Home/PavingRange/background-mobile.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >

                    <Box className="flex flex-col w-full px-16 space-y-4">
                        <Box className="flex justify-center items-center">
                            <Typography
                                className="font-bold text-center"
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 700,
                                    lineHeight: 0.9,
                                    fontFamily: 'Chronicle Display',
                                    fontSize: '40px'
                                }}
                            >
                                PAVING RANGE
                            </Typography>
                        </Box>
                        <Box className="flex w-full">
                            <Typography
                                variant="h3"
                                color="#000000"
                                sx={{
                                    fontWeight: 400,
                                    textAlign: 'center',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '20px'
                                }}
                            >
                                We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                            </Typography>
                        </Box>
                        <Box className="flex justify-center w-full">
                            <GreenCustomButton label={'View all'} iconSrc={'images/vector.svg'} />
                        </Box>
                    </Box>

                    <Box className="flex w-full">
                        <PavingRangeEmblaCarousel slides={SLIDES} options={OPTIONS} />
                    </Box>
                </Box> : <Box
                    id="paving"
                    className="relative flex flex-col w-full px-20 py-20 gap-y-24 rounded-[40px]"
                    sx={{
                        backgroundImage: 'url(images/Home/PavingRange/background.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >

                    <Box className="flex justify-between w-full">
                        <Box className="flex flex-col justify-center w-1/4 gap-3 ">
                            <Box className="flex w-full flex-col gap-y-6 space-y-4 mt-4">
                                <Typography
                                    variant="h3"
                                    color="#000000"
                                    sx={{
                                        fontWeight: 400,
                                        alignContent: 'flex-start',
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.2',
                                        fontSize: {
                                            xs: "8px",
                                            sm: "10px",  // Small screens
                                            md: "12px",  // Medium screens
                                            lg: "20px"
                                        }
                                    }}
                                >
                                    We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                                </Typography>
                            </Box>
                            <Box className="mt-5">
                                <GreenCustomButton label={'View all'} iconSrc={'images/vector.svg'} />
                            </Box>

                        </Box>

                        <Box className="flex items-start justify-end w-2/3">
                            <Typography
                                className="font-semibold"
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    alignContent: 'flex-start',
                                    textAlign: 'start',
                                    fontWeight: 700,
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: "25px",
                                        sm: "45px",  // Small screens
                                        md: "55px",  // Medium screens
                                        lg: "100px"
                                    }
                                }}
                            >
                                PAVING RANGE
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="flex flex-col w-full gap-y-7">
                        <Box className="flex justify-between w-full gap-x-7">
                            <CustomWallCard product_image_src="images/Home/PavingRange/product1.jpg" product_subname="PORPHYRY" />
                            <CustomWallCard product_image_src="images/Home/PavingRange/product2.jpg" product_subname="QUARTZITE" />
                            <CustomWallCard product_image_src="images/Home/PavingRange/product3.jpg" product_subname="MARBLE" />
                        </Box>
                        <Box className="flex justify-between w-full gap-x-7">
                            <CustomWallCard product_image_src="images/Home/PavingRange/product4.jpg" product_subname="LIMESTONE" />
                            <CustomWallCard product_image_src="images/Home/PavingRange/product5.jpg" product_subname="GRANTE" />
                            <CustomWallCard product_image_src="images/Home/PavingRange/product6.jpg" product_subname="BLUESTONE" />
                        </Box>
                    </Box>

                </Box>}

                {isMobile ? <ShortCustomBrownDivider /> : <></>}

                {isMobile ? <Box className="px-3 space-y-6">

                    <Box className="flex flex-col w-full">
                        <Box className="w-full">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                className="text-center"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'Chronicle Display',
                                    fontSize: '60px'
                                }}
                            >
                                SERVICES
                            </Typography>
                        </Box>
                        <Box className="flex w-full">
                            <Box className="w-full sm:w-full md:w-full lg:w-4/5">
                                <Typography
                                    variant="h3"
                                    color="white"
                                    className="text-center"
                                    sx={{
                                        fontWeight: 300,
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        lineHeight: "1.5",
                                    }}
                                >
                                    {showFullText ? fullText : shortText}
                                </Typography>
                                <Box className="flex justify-center">
                                    <Button
                                        onClick={handleToggle}
                                        variant="text"
                                        className="font-bold"
                                        sx={{
                                            marginTop: '10px',
                                            fontSize: '13px',
                                            color: "#FFFFFF", // Gold color
                                            fontWeight: 500,
                                            '&:hover': {
                                                color: "#FFFFFF", // White color on hover
                                            },
                                        }}
                                    >
                                        {showFullText ? "Read Less" : "Read More"}
                                    </Button>
                                </Box>

                            </Box>
                            <Box className="w-0 lg:w-1/5">

                            </Box>

                        </Box>
                    </Box>
                    <Box className="flex flex-col w-fil space-y-12">
                        <MeasurementAccordionMobile />

                        <TechnicalAccordionMobile />

                        <ProductionAccordionMobile />

                        <InstallationAccordionMobile />
                    </Box>


                </Box> : <Box className="px-20 space-y-10">


                    <Box className="flex flex-col w-full">
                        <Box className="w-1/3">
                            <Typography
                                variant="h3"
                                className="font-semibold"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: "30px",
                                        sm: "50px",  // Small screens
                                        md: "65px",  // Medium screens
                                        lg: "100px"
                                    }
                                }}
                            >
                                SERVICES
                            </Typography>
                        </Box>
                        <Box className="flex w-full">
                            <Box className="w-full sm:w-full md:w-full lg:w-4/5">
                                <Typography
                                    variant="h3"
                                    color="white"
                                    sx={{
                                        fontWeight: 300,
                                        alignContent: 'flex-start',
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.4',
                                        fontSize: {
                                            xs: "8px",
                                            sm: "10px",  // Small screens
                                            md: "12px",  // Medium screens
                                            lg: "15px"
                                        }
                                    }}
                                >
                                    We offer a wide range of services that focus on the use of stone materials. Our clients can expect top-notch service that includes design, manufacturing, delivery and assembly. Our team of experts use state-of-the-art technology and equipment to ensure that every project is built to the highest quality standards. The client's experience is at the heart of our motivation. We provide support throughout the entire project. Our products are unique and adapted to the specifics of each client, and our clients can choose from a wide range of materials and colors. Also, our clients can rely on our support and advice throughout the process to ensure that their projects are successfully implemented. Our goal is to create products that will not only meet, but also exceed the expectations of our customers.
                                </Typography>
                            </Box>
                            <Box className="w-0 lg:w-1/5">

                            </Box>

                        </Box>
                    </Box>

                    <MeasurementAccordion />

                    <TechnicalAccordion />

                    <ProductionAccordion />

                    <InstallationAccordion />
                </Box>}

                {isMobile ? <ShortCustomBrownDivider /> : <></>}

                {isMobile ? <Box
                    className="relative flex flex-col w-full py-20 gap-y-8 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/Home/Booking/background-mobile.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >
                    <Box className="flex flex-col items-center justify-center w-full px-3 space-y-4">
                        <Box className="flex flex-col w-full">
                            <Typography
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 300,
                                    textAlign: 'center',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: '70px'
                                }}
                            >
                                BOOKING
                            </Typography>
                        </Box>
                        <Box className="flex w-full gap-x-2">
                            <Box className="flex w-1/2 justify-around px-10" sx={{ border: '1px solid #283C28', borderRadius: '20px' }}>
                                <CalendarControl onClick={handleCalendarControlClick} month={getMonthAbbreviation(selectedMonth)} year={selectedYear} />
                                <input
                                    ref={inputRef} // Attach the ref to the input
                                    type="month" // Specify the type
                                    id="id"
                                    name="name"
                                    placeholder="placeholder"
                                    className="opacity-0 bg-inherit text-inherit"
                                    onChange={handleChange} //Handle date change
                                />
                            </Box>
                            <Box className="flex w-1/2">
                                <GreenCustomButton label={'Book'} iconSrc="/images/icons/Vector-top-right.svg" />
                            </Box>
                        </Box>
                        <Box className="flex justify-between w-full">
                            <GreenCustomMobileButton iconSrc="/images/icons/VideoCall.svg" />
                            <GreenCustomMobileButton iconSrc="/images/icons/Call.svg" />
                            <GreenCustomMobileButton iconSrc="/images/icons/Email.svg" />
                        </Box>
                    </Box>

                    <Box className="flex flex-col w-full px-3 space-y-3">
                        <DateCarousel initialResources={resources} />

                        <TimeCarousel />

                        <ServiceCarousel />

                        <ProductCarousel />

                        <PhaseCarousel />
                    </Box>
                </Box> : <Box
                    className="relative flex flex-col w-full px-20 py-20 gap-y-8 rounded-[40px]"
                    sx={{
                        backgroundImage: 'url(images/Home/Booking/background.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >
                    <Box className="flex justify-between w-full gap-x-16">
                        <Box className="flex flex-col justify-around w-1/2">
                            <Typography
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: "30px",
                                        sm: "50px",  // Small screens
                                        md: "65px",  // Medium screens
                                        lg: "100px"
                                    }
                                }}
                            >
                                BOOKING
                            </Typography>

                            <CalendarControl onClick={handleCalendarControlClick} month={getMonthAbbreviation(selectedMonth)} year={selectedYear} />
                            <input
                                ref={inputRef} // Attach the ref to the input
                                type="month" // Specify the type
                                id="id"
                                name="name"
                                placeholder="placeholder"
                                className="opacity-0 bg-inherit text-inherit"
                                onChange={handleChange} //Handle date change
                            />

                        </Box>
                        <Box className="flex flex-col justify-around w-5/12">
                            <Box className="flex justify-end w-full">
                                <GreenCustomButton label={'Book'} iconSrc="/images/vector.svg" />
                            </Box>
                            <Box className="flex justify-between w-full gap-x-3">
                                <GreenCustomButton label={'Video Call'} iconSrc="/images/icons/VideoCall.svg" />
                                <GreenCustomButton label={'Call'} iconSrc="/images/icons/Call.svg" />
                                <GreenCustomButton label={'Email'} iconSrc="/images/icons/Email.svg" />
                            </Box>
                        </Box>
                    </Box>

                    <Box className="flex flex-col w-full space-y-3">
                        <DateCarousel initialResources={resources} />

                        <TimeCarousel />

                        <ServiceCarousel />

                        <ProductCarousel />

                        <PhaseCarousel />
                    </Box>
                </Box>} */

                {isMobile ? <ShortCustomBrownDivider /> : <></>}

                {isMobile ? <Box className="flex flex-col w-full px-3 space-y-6">
                    <Box className="flex flex-col w-full space-y-6">
                        <Typography
                            variant="h3"
                            color="white"
                            className="text-center"
                            sx={{
                                fontWeight: 400,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px'
                            }}
                        >
                            NEWSLETTER
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DBC6BC"
                            className="text-center"
                            sx={{
                                fontWeight: 400,
                                justifyContent: 'flex-end',
                                fontFamily: 'Chronicle Display',
                                lineHeight: 0.8,
                                fontSize: '75px'
                            }}
                        >
                            STAY TUNED
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <CustomTextField />
                    </Box>
                    <Box className="flex w-full justify-center">
                        <WhiteCustomButton label={'Send'} iconSrc={'/images/vector.svg'} />
                    </Box>
                </Box> : <Box className="flex items-end justify-between w-full px-16">
                    <Box className="flex flex-col justify-end w-1/4">
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "10px",
                                    sm: "15px",  // Small screens
                                    md: "18px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >
                            NEWSLETTER
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DBC6BC"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                justifyContent: 'flex-end',
                                fontFamily: 'Chronicle Display',
                                lineHeight: 0.8,
                                fontSize: {
                                    xs: "20px",
                                    sm: "30px",  // Small screens
                                    md: "50px",  // Medium screens
                                    lg: "90px"
                                }
                            }}
                        >
                            STAY TUNED
                        </Typography>
                    </Box>
                    <Box className="w-1/2">
                        <CustomTextField />
                    </Box>
                    <Box className="flex justify-end w-1/4">
                        <WhiteCustomButton label={'Send'} iconSrc={'/images/vector.svg'} />
                    </Box>
                </Box>}

                <ShortCustomBrownDivider />

                {isMobile ? <FooterMobile /> : <Footer />}
            </Box>


        </Box>
    );
}


export default HomePage;