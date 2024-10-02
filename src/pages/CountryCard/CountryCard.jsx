import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";


const CountryCard = () => {
    const tourisms = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <div role="tablist" className="tabs tabs-lifted mb-6 w-full">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Bangladesh" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                   
                {
                            tourisms.map(tourism => (
                                <div>
                                    {
                                        tourism.countryName === "Bangladesh" ? (<div className="card bg-base-100 w-full shadow-xl mb-4">
                                            <figure>
                                                <img
                                                    src={tourism.photo}
                                                    alt="Shoes" />
                                            </figure>
                                            <div className="card-body">
                                                <div className="flex items-center justify-between gap-4 md:mx-96">
                                                    <h2 className="card-title">{tourism.touristSpot}</h2>
                                                    <p className="text-red-700 font-bold">{tourism.location}</p>
                                                </div>
                                                <div className="flex items-center justify-between gap-4 md:mx-96 pb-4">
                                                    <h2 className="card-title">{tourism.countryName}</h2>
                                                    <p className="text-blue-700 font-bold">{tourism.seasonality}</p>
                                                </div>
                                                <div className="card-actions justify-end">
                                                    <Link to={`/viewDetails/${tourism._id}`} className="btn btn-primary w-full">
                                                        <button>View Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>) : ''
                                    }
                                </div>
                            ))
                        }
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Vietnum"
                    defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {
                            tourisms.map(tourism => (
                                <div>
                                    {
                                        tourism.countryName === "Vietnum" ? (<div className="card bg-base-100 w-full shadow-xl mb-4">
                                            <figure>
                                                <img
                                                    src={tourism.photo}
                                                    alt="Shoes" />
                                            </figure>
                                            <div className="card-body">
                                                <div className="flex items-center justify-between gap-4 md:mx-96">
                                                    <h2 className="card-title">{tourism.touristSpot}</h2>
                                                    <p className="text-red-700 font-bold">{tourism.location}</p>
                                                </div>
                                                <div className="flex items-center justify-between gap-4 md:mx-96 pb-4">
                                                    <h2 className="card-title">{tourism.countryName}</h2>
                                                    <p className="text-blue-700 font-bold">{tourism.seasonality}</p>
                                                </div>
                                                <div className="card-actions justify-end">
                                                    <Link to={`/viewDetails/${tourism._id}`} className="btn btn-primary w-full">
                                                        <button>View Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>) : ''
                                    }
                                </div>
                            ))
                        }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Thailand" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {
                            tourisms.map(tourism => (
                                <div>
                                    {
                                        tourism.countryName === "Thailand" ? (<div className="card bg-base-100 w-full shadow-xl mb-4">
                                            <figure>
                                                <img
                                                    src={tourism.photo}
                                                    alt="Shoes" />
                                            </figure>
                                            <div className="card-body">
                                                <div className="flex items-center justify-between gap-4 md:mx-96">
                                                    <h2 className="card-title">{tourism.touristSpot}</h2>
                                                    <p className="text-red-700 font-bold">{tourism.location}</p>
                                                </div>
                                                <div className="flex items-center justify-between gap-4 md:mx-96 pb-4">
                                                    <h2 className="card-title">{tourism.countryName}</h2>
                                                    <p className="text-blue-700 font-bold">{tourism.seasonality}</p>
                                                </div>
                                                <div className="card-actions justify-end">
                                                    <Link to={`/viewDetails/${tourism._id}`} className="btn btn-primary w-full">
                                                        <button>View Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>) : ''
                                    }
                                </div>
                            ))
                        }
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Indonesia" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {
                            tourisms.map(tourism => (
                                <div>
                                    {
                                        tourism.countryName === "Indonesia" ? (<div className="card bg-base-100 w-full shadow-xl mb-4">
                                            <figure>
                                                <img
                                                    src={tourism.photo}
                                                    alt="Shoes" />
                                            </figure>
                                            <div className="card-body">
                                                <div className="flex items-center justify-between gap-4 md:mx-96">
                                                    <h2 className="card-title">{tourism.touristSpot}</h2>
                                                    <p className="text-red-700 font-bold">{tourism.location}</p>
                                                </div>
                                                <div className="flex items-center justify-between gap-4 md:mx-96 pb-4">
                                                    <h2 className="card-title">{tourism.countryName}</h2>
                                                    <p className="text-blue-700 font-bold">{tourism.seasonality}</p>
                                                </div>
                                                <div className="card-actions justify-end">
                                                    <Link to={`/viewDetails/${tourism._id}`} className="btn btn-primary w-full">
                                                        <button>View Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>) : ''
                                    }
                                </div>
                            ))
                        }
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Malaysia" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {
                            tourisms.map(tourism => (
                                <div>
                                    {
                                        tourism.countryName === "Malaysia" ? (<div className="card bg-base-100 w-full shadow-xl mb-4">
                                            <figure>
                                                <img
                                                    src={tourism.photo}
                                                    alt="Shoes" />
                                            </figure>
                                            <div className="card-body">
                                                <div className="flex items-center justify-between gap-4 md:mx-96">
                                                    <h2 className="card-title">{tourism.touristSpot}</h2>
                                                    <p className="text-red-700 font-bold">{tourism.location}</p>
                                                </div>
                                                <div className="flex items-center justify-between gap-4 md:mx-96 pb-4">
                                                    <h2 className="card-title">{tourism.countryName}</h2>
                                                    <p className="text-blue-700 font-bold">{tourism.seasonality}</p>
                                                </div>
                                                <div className="card-actions justify-end">
                                                    <Link to={`/viewDetails/${tourism._id}`} className="btn btn-primary w-full">
                                                        <button>View Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>) : ''
                                    }
                                </div>
                            ))
                        }
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Cambodia" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {
                            tourisms.map(tourism => (
                                <div>
                                    {
                                        tourism.countryName === "Cambodia" ? (<div className="card bg-base-100 w-full shadow-xl mb-4">
                                            <figure>
                                                <img
                                                    src={tourism.photo}
                                                    alt="Shoes" />
                                            </figure>
                                            <div className="card-body">
                                                <div className="flex items-center justify-between gap-4 md:mx-96">
                                                    <h2 className="card-title">{tourism.touristSpot}</h2>
                                                    <p className="text-red-700 font-bold">{tourism.location}</p>
                                                </div>
                                                <div className="flex items-center justify-between gap-4 md:mx-96 pb-4">
                                                    <h2 className="card-title">{tourism.countryName}</h2>
                                                    <p className="text-blue-700 font-bold">{tourism.seasonality}</p>
                                                </div>
                                                <div className="card-actions justify-end">
                                                    <Link to={`/viewDetails/${tourism._id}`} className="btn btn-primary w-full">
                                                        <button>View Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>) : ''
                                    }
                                </div>
                            ))
                        }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CountryCard;