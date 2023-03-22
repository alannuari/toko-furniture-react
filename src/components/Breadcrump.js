import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrump = ({ list }) => {
    return (
        <section className="bg-gray-100 py-8 px-4">
            <div className="container mx-auto">
                <ul className="breadcrumb">
                    {list?.map?.((item, idx) => (
                        <li key={idx}>
                            <Link to={item.url}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Breadcrump;
