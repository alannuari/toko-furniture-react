import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrump from '../components/Breadcrump';
import CardItem from '../components/CardItem';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sitemap from '../components/Sitemap';
import useAsync from '../helpers/hooks/useAsync';
import useScrollToTop from '../helpers/hooks/useScrollToTop';
import { getProductsByCategory } from '../mockupApi';

const CategoryPage = () => {
    const { idc } = useParams();
    const { data, run, isLoading } = useAsync();

    useEffect(() => {
        run(getProductsByCategory(idc));
    }, [run, idc]);

    useScrollToTop();

    return (
        <>
            <Header theme="white" />
            <Breadcrump
                list={[
                    { url: '/', name: 'Home' },
                    { url: '/categories/1', name: 'Office Room' },
                ]}
            />
            <section className="md:py-16">
                <div className="container mx-auto px-4">
                    {isLoading ? (
                        'loading'
                    ) : (
                        <div className="flex -mx-4 flex-wrap justify-center">
                            {data.map((item) => (
                                <CardItem key={item.id} {...item} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <Sitemap />
            <Footer />
        </>
    );
};

export default CategoryPage;
