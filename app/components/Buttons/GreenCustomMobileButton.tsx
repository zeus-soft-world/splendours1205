// Import necessary dependencies
import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';

// Define the component's props with TypeScript types
interface CustomButtonProps {
    iconSrc: string; // The icon source URL
    onClick?: () => void; // Optional click handler
}

const GreenCustomMobileButton: React.FC<CustomButtonProps> = ({ iconSrc, onClick }) => {
    return (
        <Button
            variant="outlined"
            onClick={onClick}
            sx={{
                display: 'flex',
                justifyContent: 'center', // Center content horizontally
                alignItems: 'center',    // Center content vertically
                width: '110px',           // Button width
                height: '50px',          // Button height
                borderRadius: '30px',     // Make the button circular
                backgroundColor: '#283C28', // Dark green background
                borderColor: 'transparent', // No border
                padding: 0, // Remove default padding
                '&:hover': {
                    backgroundColor: '#DBC6BC', // Light beige hover background
                    borderColor: '#DBC6BC',    // Optional border on hover
                },
            }}
        >
            <Image
                src={iconSrc}
                alt="Icon"
                width={30} // Icon size
                height={30}
                // style={{
                //     filter:
                //         'invert(9%) sepia(15%) saturate(260%) hue-rotate(40deg) brightness(100%) contrast(85%)',
                // }}
            />
        </Button>
    );
};

export default GreenCustomMobileButton;
