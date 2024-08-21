import { useState } from "react"; // Import useState to manage the email input state
import { sendPasswordReset } from "../firebase"; // Import function to handle sending password reset emails
import { NavLink, useNavigate } from "react-router-dom"; // Import NavLink for navigation
import Swal from "sweetalert2"; // Import SweetAlert2 for notifications

const Reset = () => {
  const [email, setEmail] = useState(""); // useState hook to manage the email input field
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate

  // Function to handle password reset email
  const handlePasswordReset = () => {
    sendPasswordReset(email)
      .then(() => {
        // SweetAlert2 notification
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Please check your email",
          showConfirmButton: true,
        }).then(() => {
          // Add a delay before navigating to the login page
          setTimeout(() => {
            navigate("/login"); // Navigate to the login page after the delay
          }, 6000); // 3000ms delay (3 seconds)
        });
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
        // SweetAlert2 error notification
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Error",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Reset Your Password {/* Title of the reset page */}
        </h1>
        <div className="flex flex-col space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update the email state when the input changes
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email address" // Placeholder text in the email input field
          />
          <button
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handlePasswordReset} // Call the handlePasswordReset function when clicked
          >
            Send Password Reset Email{" "}
            {/* Button to trigger password reset email */}
          </button>
        </div>
        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Register {/* Link to the registration page */}
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Reset;