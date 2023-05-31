import React from 'react';
import { animated, useSpring } from '@react-spring/web';

interface Props {
    isVisible: number;
    children: React.ReactNode;
    xIndex: number;
    elIndex: number;
}

const SlideInLinkText = ({ isVisible, children, xIndex, elIndex }: Props) => {
    const styles = useSpring({
        opacity: isVisible === elIndex ? 1 : 0,
        x: isVisible === elIndex ? xIndex : -24,
    });

    return (
        <animated.div className={'cursor-default'} style={styles}>
            {children}
        </animated.div>
    );
};

export default SlideInLinkText;
