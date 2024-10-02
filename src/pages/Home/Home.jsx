
import { Link, useLoaderData } from "react-router-dom";
import AboutUs from "../../components/AboutUs/AboutUs";
import Slider from "../../components/slider/Slider";
import SubsribeInfor from "../../components/subsribeInfor/SubsribeInfor";
import TouristSpotSomething from "../../components/TouristSpotSomething/TouristSpotSomething";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import TourismCard from "../../components/TourismCard/TourismCard";
import { useState } from "react";



const Home = () => {
    const tourisms=useLoaderData();
    const [dataLength,setDataLength]=useState(12);
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <TouristSpotSomething></TouristSpotSomething>
             {/* All card here */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    // estateCardData.map(estate=><EstateCard key={estate.id}
                    //     estateCardData={estate}></EstateCard>)
                    // tourisms.slice(0,dataLength).map(tourism => <TourismCard
                    // key={tourism._id}
                    // tourism={tourism}
                    // ></TourismCard>)
                    tourisms.slice(0,dataLength).map(tourism => <TourismCard
                    key={tourism._id}
                    tourism={tourism}
                    ></TourismCard>)
                }
            </div>
            <div className="text-center mt-4 mb-4">
                <Link to='/allTouristSpot'><button className="btn btn-primary">Show All</button></Link>
            </div>
            <AboutUs></AboutUs>
            <SubsribeInfor></SubsribeInfor>
            <Footer></Footer>
        </div>
    );
};

export default Home;