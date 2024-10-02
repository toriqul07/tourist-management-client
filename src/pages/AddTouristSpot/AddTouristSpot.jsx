import { useContext } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'

const AddTouristSpot = () => {
    const {user}=useContext(AuthContext);
    const handleAddTourism = event=>{
        event.preventDefault();

        const form = event.target;
        const photo=form.photo.value;
        const seasonality=form.seasonality.value;
        const touristSpot=form.touristSpot.value;
        const travelTime=form.travelTime.value;
        const countryName=form.countryName.value;
        const totalVisitorPerYear=form.totalVisitorPerYear.value;
        const location=form.location.value;
        const email=form.email.value;
        const shortDescription=form.shortDescription.value;
        const userName=form.userName.value;
        const averageCost=form.averageCost.value;
        // console.log(photo,seasonality,touristSpot,travelTime,travelTime,countryName,totalVisitorPerYear,location,email,shortDescription,userName,averageCost)
        const newTourism={photo,seasonality,touristSpot,travelTime,travelTime,countryName,totalVisitorPerYear,location,email,shortDescription,userName,averageCost};
        fetch('https://tourist-management-server-five.vercel.app/tourism',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newTourism)
        }).then(res=>res.json()).then(data=>{
            console.log(data);
            if(data.insertedId)
            {
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist Spot Added Sucessfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl font-extrabold text-center mb-10">Added a new Tourism Spot</h2>
                <form onSubmit={handleAddTourism}>
                    {/* Image and seasonality row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Tourist spot name and Travel Time row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tourist spot Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="touristSpot" placeholder="Tourist Spot Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="travelTime" placeholder="Travel Time" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form country name and Total visitor per year row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Country name</span>
                            </label>
                            <select className="select select-bordered" name="countryName">
                                <option>Bangladesh</option>
                                <option>Thailand</option>
                                <option>Vietnum</option>
                                <option>Malaysia</option>
                                <option>Indonesia</option>
                                <option>Cambodia</option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Total Visitor Per Year</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="totalVisitorPerYear" placeholder="Total Visitor per Year" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Location and email url row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                {
                                    user? 
                                    <input type="text" name="email" placeholder="Email" defaultValue={user.email} className="input input-bordered w-full" /> :
                                    <input type="text" name="email" placeholder="Email"  className="input input-bordered w-full" />
                                }
                            </label>
                        </div>
                    </div>
                    {/* form Short description and User name url row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group">
                                {
                                    user? 
                                    <input type="text" name="userName" placeholder="User Name" defaultValue={user.displayName} className="input input-bordered w-full" /> :
                                    <input type="text" name="userName" placeholder="User Name"  className="input input-bordered w-full" />
                                }
                            </label>
                        </div>
                    </div>
                    {/* form Location and email url row */}
                    <div className="mb-8">
                    <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="averageCost" placeholder="Average Cost" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add a Turism" className="btn btn-accent w-full" />

                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddTouristSpot;