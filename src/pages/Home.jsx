import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      // SweetAlert2 for welcoming user
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: `Welcome, ${user.email}!`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [user]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // SweetAlert2 for successful logout
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Logout Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
        console.log("Signed Out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (loading) return <p> User info loading....</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">
          Welcome, {user.email}
        </h1>
        <button
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={handleLogout}
        >
          Logout
        </button>
        <div className="mt-4">
          <NavLink to="/profile" className="text-blue-600 hover:text-blue-500">
            Go to Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
