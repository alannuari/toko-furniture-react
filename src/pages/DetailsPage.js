import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../mockupApi';
import Breadcrump from '../components/Breadcrump';
import ErrorMessage from '../components/ErrorMessage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';
import ProductDetailsSkeleton from '../components/ProductDetailsSkeleton';
import Sitemap from '../components/Sitemap';
import Suggestion from '../components/Suggestion';
import SuggestionSkeleton from '../components/SuggestionSkeleton';
import useAsync from '../helpers/hooks/useAsync';
import useScrollToTop from '../helpers/hooks/useScrollToTop';

const DetailsPage = () => {
    const { idc, idp } = useParams();
    const { data, run, isLoading } = useAsync();

    useEffect(() => {
        run(getProductDetails(idp));
    }, [run, idp]);

    useScrollToTop();
    return (
        <>
            <Header theme="white" />
            <Breadcrump
                list={[
                    { url: '/', name: 'Home' },
                    { url: `/categories/${idc}`, name: 'Office Room' },
                    { url: `/categories/${idc}/products/${idp}`, name: 'Details' },
                ]}
            />
            {isLoading ? (
                <>
                    <ProductDetailsSkeleton />
                    <SuggestionSkeleton />
                </>
            ) : !data ? (
                <ErrorMessage title="Product Not Found" body={`Sorry, product with ID ${idp} is not found`} />
            ) : (
                <>
                    <ProductDetails data={data} />
                    <Suggestion data={data?.relatedProducts} />
                </>
            )}
            <Sitemap />
            <Footer />
        </>
    );
};

export default DetailsPage;
