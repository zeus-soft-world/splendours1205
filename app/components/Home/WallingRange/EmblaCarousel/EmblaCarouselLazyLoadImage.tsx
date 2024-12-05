import React, { useState, useCallback } from 'react'
import { Box, Typography } from '@mui/material'

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`

type PropType = {
    imgSrc: string
    inView: boolean
    index: number
    name: string;  // New prop for the name
}

export const LazyLoadImage: React.FC<PropType> = (props) => {
    const { imgSrc, inView, name } = props
    const [hasLoaded, setHasLoaded] = useState(false)

    const setLoaded = useCallback(() => {
        if (inView) setHasLoaded(true)
    }, [inView, setHasLoaded])

    return (
        <div className="embla__slide">
            <div
                className={'embla__lazy-load'.concat(
                    hasLoaded ? ' embla__lazy-load--has-loaded' : ''
                )}
            >
                {!hasLoaded && <span className="embla__lazy-load__spinner" />}
                <Box
                    className="flex w-full px-5"
                    data-src={imgSrc}
                    onLoad={setLoaded}
                    sx={{
                        width: '100%',
                        // height: '100%', // Adjust to match the image height
                        aspectRatio: '2 / 3', // Aspect ratio of 3:1 (width to height)
                        backgroundImage: `url(${inView ? imgSrc : PLACEHOLDER_SRC})`,
                        backgroundSize: 'cover', // Ensure the image covers the entire box
                        backgroundPosition: 'center', // Center the image
                        borderRadius: '25px',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box className="flex flex-col w-1/3 h-full">
                        <Box className="flex w-full h-1/2"></Box>
                        <Box className="flex flex-col justify-around w-full h-1/2">
                            <Box>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h4"
                                    color="#DBC6BC"
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        fontSize: '40px',
                                        fontStyle:'italic',
                                        fontWeight: 600,
                                        textAlign: 'start',
                                    }}
                                >
                                    {name}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    )
}
