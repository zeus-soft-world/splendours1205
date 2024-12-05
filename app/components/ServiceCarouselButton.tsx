// components/DateCarouselButton.tsx
"use client"; // This line makes this file a client component in Next.js

import { Box, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';

interface ServiceCarouselButtonProps {
    service: string,
}


const ServiceCarouselButton: React.FC<ServiceCarouselButtonProps> = ({ service }) => {
    const isMobile = useMediaQuery('(max-width: 768px)'); // Media query for mobile
    return (
        <Box className="flex flex-col rounded-lg aspect-[7/1] justify-center py-0 items-center" sx={{
            border: '1px solid #283C28', minWidth: isMobile ? '45%' : '30%', backgroundColor: 'transparent', // Default background
            transition: 'all 0.3s ease', // Smooth transition for hover effects
            '&:hover': {
                backgroundColor: '#283C28', // Inverted background color
                borderColor: '#DBC6BC', // Inverted border color
                '& h3': {
                    color: '#DBC6BC', // Inverted text color
                },
            },
        }}>
            <Typography
                className="flex w-1/2 xs:h-[50px] lg:h-1/2 justify-center items-center font-semibold"
                variant="h3"
                color="#283C28"
                sx={{
                    fontWeight: 400,
                    fontFamily: 'var(--font-chronicle-display)',
                    fontSize: '30px',
                    fontStyle: 'normal'
                }}
            >
                {service}
            </Typography>
        </Box>
    );
};

export default ServiceCarouselButton;
