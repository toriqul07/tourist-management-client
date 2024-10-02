import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import TourismCard from '../../components/TourismCard/TourismCard';
import { useLoaderData } from 'react-router-dom';

const AllTouristSpot = () => {
    const tourisms = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <div
                className="hero min-h-screen mb-4 h-96"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/Jkg4C5m/Edit2-770x440.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Our All Tourism Place</h1>
                        <p className="mb-5">
                            A tourism website is your digital passport to unforgettable experiences. Immerse yourself in vibrant cultures, explore breathtaking landscapes, and discover hidden gems with our curated guides and insider tips.
                        </p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>




            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    // estateCardData.map(estate=><EstateCard key={estate.id}
                    //     estateCardData={estate}></EstateCard>)
                    tourisms.map(tourism => <TourismCard
                        key={tourism._id}
                        tourism={tourism}
                    ></TourismCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllTouristSpot;