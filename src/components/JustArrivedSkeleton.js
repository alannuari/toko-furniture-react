import React from 'react';

const JustArrivedSkeleton = () => {
    return Array(6)
        .fill()
        .map((_, idx) => {
            return (
                <div className="px-4 relative card group" key={idx}>
                    <div className="rounded-xl bg-gray-300 overflow-hidden card-shadow relative animate-pulse" style={{ width: 287, height: 386 }}></div>
                    <div className="w-24 h-3 bg-gray-300 mt-3 rounded-full animate-pulse"></div>
                    <div className="w-36 h-3 bg-gray-300 mt-2 rounded-full animate-pulse"></div>
                </div>
            );
        });
};

export default JustArrivedSkeleton;
