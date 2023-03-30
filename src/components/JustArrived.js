import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../mockupApi';
import useAsync from '../helpers/hooks/useAsync';
import JustArrivedSkeleton from './JustArrivedSkeleton';
import CardItem from './CardItem';

const JustArrived = () => {
    const { data, run, isLoading } = useAsync();

    useEffect(() => {
        run(getProducts());
    }, [run]);
    return (
        <section className="flex flex-col py-16">
            <div className="container mx-auto mb-4">
                <div className="flex justify-center text-center mb-4">
                    <h3 className="text-2xl capitalize font-semibold">
                        Just Arrived <br className="" />
                        this summer for you
                    </h3>
                </div>
            </div>
            <div className="overflow-x-auto px-4 just-arrived">
                {isLoading ? (
                    <div className="flex -mx-4 flex-row relative">
                        <JustArrivedSkeleton />
                    </div>
                ) : (
                    <div className="flex -mx-4 flex-row relative">
                        {data.data.map((item) => (
                            <CardItem key={item.id} {...item} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default JustArrived;
