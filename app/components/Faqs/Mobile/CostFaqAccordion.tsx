"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Box, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Image from 'next/image';
import FullCustomBrownDivider from '../../Divider/FullCustomBrownDivider';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    '&:not(:last-child)': {
        borderBottom: 'none',
    },
    '&::before': {
        display: 'none',
    },
    padding: 0, // Set padding to 0 for Accordion
}));


interface CustomAccordionSummaryProps extends AccordionSummaryProps {
    expanded?: boolean; // Add your custom expanded prop
}

const AccordionSummary = styled((props: CustomAccordionSummaryProps) => {
    const { expanded, ...rest } = props;
    return (
        <MuiAccordionSummary
            expandIcon={
                expanded ? (
                    <IndeterminateCheckBoxIcon sx={{ fontSize: '30px', color: '#DCC5BD' }} />
                ) : (
                    <AddBoxIcon sx={{ fontSize: '30px', color: '#DCC5BD' }} />
                )
            }
            {...rest}
        />
    );
})(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Added justify-content: space-between
    padding: 0, // Remove padding
    '& .MuiAccordionSummary-expandIconWrapper': {
        position: 'relative',
        right: 0,
    },
    '& .MuiAccordionSummary-content': {
        margin: 0, // Remove margin
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    backgroundColor: '#283C28',
    color: 'white',
    padding: 0, // Remove padding
}));

export default function CostFaqAccordion() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div className='px-3'> {/* Root component padding and margin set to 0 */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    expanded={expanded === 'panel1'}
                    style={{
                        borderBottom: '2px solid #DCC5BD',
                        backgroundColor: '#283C28',
                        color: 'white',
                    }}
                >
                    <Box className="w-3/5">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 300,
                                flexWrap: 'wrap',
                                fontFamily: 'Chronicle Display',
                                fontSize: '20px'
                            }}
                        >
                            HOW MUCH DOES NATURAL STONE COST?
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className="flex w-full flex-col justify-between py-5 gap-y-5">
                        <Box className="flex flex-col w-full justify-around">
                            <Typography
                                variant="h3"
                                color="white"
                                sx={{
                                    fontWeight: 300,
                                    textAlign: 'start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '13px'
                                }}
                            >
                                We offer a curated selection of high-quality natural stone cladding, walling, and paving options, including granite, limestone, travertine, sandstone, and bluestone. Explore our website or visit our showroom to discover the full range.
                            </Typography>
                        </Box>
                        <Box className="flex w-full justify-between">
                            <Image
                                src="/images/Faqs/StoneFaqProducts/product1.png"
                                alt="Stone1"
                                width={90}
                                height={90}
                            />
                            <Image
                                src="/images/Faqs/StoneFaqProducts/product2.png"
                                alt="Stone1"
                                width={90}
                                height={90}
                            />
                            <Image
                                src="/images/Faqs/StoneFaqProducts/product3.png"
                                alt="Stone1"
                                width={90}
                                height={90}
                            />
                            <Image
                                src="/images/Faqs/StoneFaqProducts/product4.png"
                                alt="Stone1"
                                width={90}
                                height={90}
                            />
                        </Box>
                    </Box>
                    <FullCustomBrownDivider />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
