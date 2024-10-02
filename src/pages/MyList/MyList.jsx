import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import { useState } from "react";
import Swal from "sweetalert2";


const MyList = () => {
    const tourisms = useLoaderData();
    const [users, setUsers] = useState(tourisms);
    // const { _id, photo, seasonality, touristSpot, travelTime, countryName, totalVisitorPerYear, location, email, shortDescription, userName, averageCost } = tourism;
    const hanleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://tourist-management-server-five.vercel.app/tourism/${id}`, {
                    method: 'DELETE'
                }).then(res => res.json()).then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Tourist spot place has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Spots Name & Address</th>
                            <th className="md:px-20">Description</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            tourisms.map(tourism => <tr key={tourism._id}>
                                <th>{tourism.userName}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={tourism.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{tourism.touristSpot}</div>
                                            <div className="text-sm opacity-50">{tourism.location}, {tourism.countryName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {/* Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                    {tourism.shortDescription}
                                </td>
                                <td>
                                    <Link to={`/updatedTouristSpot/${tourism._id}`}>
                                        <button className="btn btn-primary btn-xs">Update</button>
                                    </Link>
                                </td>
                                <th>
                                    <button onClick={() => hanleDelete(tourism._id)} className="btn btn-accent btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyList;