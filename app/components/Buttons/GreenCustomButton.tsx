import { Button, SxProps, Theme } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface GreenCustomButtonProps {
    label: string;
    iconSrc: string;
    styles?: SxProps<Theme>; // MUI-compatible styles
    borderColor: string;
    iconColor?: string; // Optional prop for the icon color
}

const GreenCustomButton: React.FC<GreenCustomButtonProps> = ({ label, iconSrc, styles, borderColor, iconColor = '#DCC5BD' }) => {
    return (
        <Button
            variant="outlined"
            endIcon={
                <Image
                    src={iconSrc}
                    alt="Button Icon"
                    width={31.67}
                    height={31.67}
                    style={{ color: iconColor }}
                />
            }
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: {
                    xs: '175px',    // Adjusted for extra small screens
                    sm: '10rem',   // Small screens
                    md: '12rem',   // Medium screens
                    lg: '14rem',   // Large screens
                },
                height: {
                    xs: '48px',  // Adjusted height for extra small screens
                    sm: '2.5rem',  // Small screens
                    md: '3rem',    // Medium screens
                    lg: '3.5rem',  // Large screens
                },
                borderRadius: '1.5rem',
                color: borderColor,
                fontSize: {
                    xs: '1rem',
                    sm: '1rem',
                    md: '1.125rem',
                    lg: '1.25rem',
                },
                fontWeight: 400,
                fontFamily: 'Hanken Grotesk',
                backgroundColor: '#283C28',
                borderColor: borderColor,
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: 'white',
                    color: 'blue.500',
                    borderColor: 'white',
                },
                ...styles, // Apply additional styles if passed
            }}
        >
            <span style={{ color: borderColor }}>{label}</span>
        </Button>
    );
};

export default GreenCustomButton;
