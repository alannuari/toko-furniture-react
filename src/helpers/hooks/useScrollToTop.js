import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
    const { pathname } = useLocation();
    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [pathname]);
};

export default useScrollToTop;
