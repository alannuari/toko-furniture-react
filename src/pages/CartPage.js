import React from 'react';
import Breadcrump from '../components/Breadcrump';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ShippingDetails from '../components/ShippingDetails';
import ShoppingCart from '../components/ShoppingCart';
import Sitemap from '../components/Sitemap';
import useScrollToTop from '../helpers/hooks/useScrollToTop';

const CartPage = () => {
    useScrollToTop();
    return (
        <>
            <Header theme="white" />
            <Breadcrump
                list={[
                    { url: '/', name: 'Home' },
                    { url: '/cart', name: 'Cart' },
                ]}
            />
            <section className="md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex -mx-4 flex-wrap">
                        <ShoppingCart />
                        <ShippingDetails />
                    </div>
                </div>
            </section>
            <Sitemap />
            <Footer />
        </>
    );
};

export default CartPage;
