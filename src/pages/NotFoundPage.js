import React from 'react';
import ErrorMessage from '../components/ErrorMessage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sitemap from '../components/Sitemap';
import useScrollToTop from '../helpers/hooks/useScrollToTop';

const NotFoundPage = () => {
    useScrollToTop();
    return (
        <>
            <Header theme="white" />
            <ErrorMessage title="Page Not Found" body="Sorry, but the page you were trying to view does not exist." />
            <Sitemap />
            <Footer />
        </>
    );
};

export default NotFoundPage;
