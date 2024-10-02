import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import logo from "../../assets/user.png";

const AboutUs = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="hero bg-base-200 min-h-screen mb-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {
                    user ?
                    <img
                    src={user?.photoURL}
                    className="max-w-sm rounded-lg shadow-2xl" />
                    :
                    <img
                    src={logo}
                    className="max-w-sm rounded-lg shadow-2xl" />
                }
                <div>
                    <h1 className="text-5xl font-bold">Tourist Management</h1>
                    <h6 className="text-2xl font-normal">What People Say
                        About Us</h6>
                    <p className="py-6">
                        Absolutely thrilled with my experience using TR-TRAVEL! <br /> From start to finish, the platform offered seamless navigation, <br /> comprehensive information, and stunning visuals that truly brought <br /> each destination to life. Planning my trip was a breeze,<br /> thanks to the user-friendly interface and plethora of resources available.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;