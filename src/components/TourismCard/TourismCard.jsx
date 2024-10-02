import { Link } from "react-router-dom";



const TourismCard = ({ tourism }) => {
    const { _id, photo, seasonality, touristSpot, travelTime, countryName, totalVisitorPerYear, location, email, shortDescription, userName, averageCost } = tourism;
    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="card-title">{touristSpot}</h2>
                    <p className="text-red-700 font-bold">{location}</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <h2 className="card-title">{countryName}</h2>
                    <p className="text-blue-700 font-bold">{seasonality}</p>
                </div>
                <div className="card-actions justify-end">
                        <Link to={`/viewDetails/${_id}`} className="btn btn-primary w-full">
                        <button>View Details</button>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default TourismCard;