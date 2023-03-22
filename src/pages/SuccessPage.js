import React from 'react';
import Breadcrump from '../components/Breadcrump';
import Congratulation from '../components/Congratulation';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sitemap from '../components/Sitemap';
import useScrollToTop from '../helpers/hooks/useScrollToTop';

const SuccessPage = () => {
    useScrollToTop();
    return (
        <>
            <Header theme="white" />
            <Breadcrump
                list={[
                    { url: '/', name: 'Home' },
                    { url: '', name: 'Success Checkout' },
                ]}
            />
            <Congratulation />
            <Sitemap />
            <Footer />
        </>
    );
};

export default SuccessPage;
