import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function ScrollAnimation({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView, mainControls]);
    
    return (
        <div ref={ref}>
            <motion.div
            variants={{
                hidden: { opacity: 0, y: 100},
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25}}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default ScrollAnimation;