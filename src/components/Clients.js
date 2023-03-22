import React from 'react';
import Img1 from '../assets/icons/logo-adobe.svg';
import Img2 from '../assets/icons/logo-ikea.svg';
import Img3 from '../assets/icons/logo-hermanmiller.svg';
import Img4 from '../assets/icons/logo-miele.svg';

const Clients = () => {
    return (
        <section className="container mx-auto">
            <div className="flex justify-center flex-wrap">
                <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
                    <img src={Img1} alt="" className="mx-auto" />
                </div>
                <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
                    <img src={Img2} alt="" className="mx-auto" />
                </div>
                <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
                    <img src={Img3} alt="" className="mx-auto" />
                </div>
                <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
                    <img src={Img4} alt="" className="mx-auto" />
                </div>
            </div>
        </section>
    );
};

export default Clients;
