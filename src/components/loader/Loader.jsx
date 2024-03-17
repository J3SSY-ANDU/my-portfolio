import React, { useEffect, useState } from 'react';
import { Box, Grow, LinearProgress, Typography } from '@mui/material';
import './loader.css';

const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + 20;
                return newProgress >= 100 ? 100 : newProgress;
            });
        }, 140);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Grow in={true} timeout={{ enter: 1000, exit: 1000}} style={{ transformOrigin: 'center'}}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'} className='app__loader'>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={'4rem'} width={'50%'} className='app__loader-container'>
                    {/* <Box display={'flex'} justifyContent={'center'} gap={'0.3rem'}>
                        <Typography style={{fontSize: '16px', fontFamily: 'Yeseva One', letterSpacing: '0.1em'}}>Welcome to My Portfolio!</Typography>
                    </Box> */}
                    <LinearProgress variant='determinate' value={progress} />
                </Box>
            </Box>
        </Grow>
    );
};

export default Loader;