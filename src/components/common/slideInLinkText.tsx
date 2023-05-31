import React from 'react';
import { animated, useSpring } from '@react-spring/web';

const SlideInLinkText = ({ isVisible, children, xIndex }) => {
    const styles = useSpring({
        opacity: isVisible ? 1 : 0,
        x: isVisible ? xIndex : -24,
    });

    return (
        <animated.div className={'cursor-default'} style={styles}>
            {children}
        </animated.div>
    );
};

export default SlideInLinkText;
