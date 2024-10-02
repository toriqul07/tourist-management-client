import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { FcHome } from "react-icons/fc";

const ViewDetails = () => {
    const tourism = useLoaderData();
    const { _id, photo, seasonality, touristSpot, travelTime, countryName, totalVisitorPerYear, location, email, shortDescription, userName, averageCost } = tourism;
    return (
        <div>
            <Navbar></Navbar>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-4 mt-4">
                <figure>
                    <img
                        src={photo}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h1 className="card-title">TouristSpot : {touristSpot}</h1>
                    <h4 className="font-bold text-xl">Seasonality:{seasonality}</h4>
                    <h4 className="font-bold text-xl">TravelTime:{travelTime}</h4>
                    <h4 className="font-bold text-xl">TotalVisitorPerYear:{totalVisitorPerYear}</h4>
                    <h4 className="font-bold text-xl">AverageCost:{averageCost}</h4>
                    <h4 className="font-bold text-xl">Location:{location}</h4>
                    <h4><span className="font-bold text-xl">ShortDescription:</span>{shortDescription}</h4>
                    <h4 className="font-bold text-xl">CountryName:{countryName}</h4>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Home</button> */}
                        <Link to="/" className="text-3xl">
                          <FcHome></FcHome>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ViewDetails;