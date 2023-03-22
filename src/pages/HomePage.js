import React from 'react';
import BrowseRoom from '../components/BrowseRoom';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import JustArrived from '../components/JustArrived';
import Sitemap from '../components/Sitemap';
import useModalDOM from '../helpers/hooks/useModalDOM';
import useScrollToTop from '../helpers/hooks/useScrollToTop';

const HomePage = () => {
    useModalDOM();
    useScrollToTop();

    return (
        <>
            <Header theme="black" position="absolute" />
            <Hero />
            <BrowseRoom />
            <JustArrived />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    );
};

export default HomePage;
