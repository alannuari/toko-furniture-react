import React from 'react';

const SuggestionSkeleton = () => {
    return (
        <section className="bg-gray-100 px-4 py-16">
            <div className="container mx-auto">
                <div className="flex flex-start mb-4">
                    <h3 className="text-2xl capitalize font-semibold">
                        Complete your room <br className="" />
                        with what we designed
                    </h3>
                </div>
                <div className="flex overflow-x-auto mb-4 -mx-3 suggestion">
                    {Array(4)
                        .fill()
                        .map((_, index) => {
                            return (
                                <div className="px-3 flex-none" style={{ width: 320 }} key={index}>
                                    <div className="rounded-xl p-4 pb-8 relative bg-white">
                                        <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                                            <div className="bg-gray-300 animate-pulse rounded-lg h-full overflow-hidden" style={{ width: 287, height: 150 }}></div>
                                        </div>
                                        <div className="w-56 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                                        <div className="w-40 h-4 mt-3 bg-gray-300 animate-pulse rounded-full"></div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
};

export default SuggestionSkeleton;
