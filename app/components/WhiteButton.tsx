// Import necessary dependencies
import React from 'react';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';

// Define the component's props with TypeScript types
interface CustomButtonProps {
    label: string;
    iconSrc: string;
    onClick?: () => void;
}

const WhiteCustomButton: React.FC<CustomButtonProps> = ({ label, iconSrc, onClick }) => {
    const isMobile = useMediaQuery('(max-width: 768px)'); // Define mobile breakpoint
    return (
        <Button
            className="font-semibold"
            variant="outlined"
            endIcon={
                <div
                    style={{
                        width: isMobile ? "20px" : "25px",
                        height: isMobile ? "20px" : "25px",
                        backgroundImage: `url(${iconSrc})`,
                        backgroundSize: "cover",
                        filter: "brightness(0) saturate(100%) invert(28%) sepia(14%) saturate(589%) hue-rotate(100deg) brightness(93%) contrast(81%)",
                    }}
                />
            }
            onClick={onClick}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: isMobile ? '170px' : '200px',
                height: isMobile ? '45px' : '46px',
                borderRadius: '1.5rem',
                color: '#283C28',
                fontSize: {
                    xs: '12px',                 // Extra small screens
                    sm: '13px',                 // Small screens
                    md: '14px',                // Medium screens
                    lg: '13px',                // Large screens
                },
                fontWeight: 400,
                fontFamily: 'var(--font-montserrat)',
                fontSynthesisWeight: 600,
                backgroundColor: '#DBC6BC',    // Default background color
                borderColor: 'transparent',   // Border color
                textTransform: 'none',
                px: isMobile ? '20px' : '25px', // Increase horizontal padding
                '&:hover': {
                    backgroundColor: '#283C28', // Hover background color
                    color: '#DBC6BC',          // Hover font color
                    borderColor: '#283C28',    // Hover border matches hover background
                },
            }}
        >
            {label}
        </Button>



    );
};

export default WhiteCustomButton;
