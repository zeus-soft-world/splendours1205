// components/CustomDivider.tsx
"use client"; // This line makes this file a client component in Next.js

// import CustomDivider from "./Divider";
import ShortCustomBrownDivider from "./Divider/ShortCustomBrownDivider";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from '@mui/material';




const Splendours_header_level = () => {
    const isMobile = useMediaQuery('(max-width: 768px)'); // Define mobile breakpoint
    return (
        <Box>
            <ShortCustomBrownDivider />
            <div className="flex justify-center">
                <Typography variant="h5" color="#DCC5BD" className="text-center" sx={{ fontFamily: "Chronicle Display", fontSize: isMobile ? "25px" : '20px', fontWeight: 700, margin: "auto", letterSpacing: isMobile ? 4 : 4 }}>SUPPLIERS OF STONE AUSTRALIA WIDE & INTERNATIONAL</Typography>
            </div>
            <ShortCustomBrownDivider />
        </Box>
    );
};

export default Splendours_header_level;
