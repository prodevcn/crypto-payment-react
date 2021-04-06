import React, {useState, useEffect} from 'react';
import {animateScroll} from 'react-scroll';

import {MdExpandLess} from 'react-icon/md';

const PrevFooter = ({theme}) => {
    const [scroll, setScroll] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        setTop(100);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    const handleScroll = () => {
        setScroll(window.screenY);
    }
    return ();
};

export default PrevFooter;