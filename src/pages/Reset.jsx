import { useState } from "react"; // Import useState to manage the email input state
import { sendPasswordReset } from "../firebase"; // Import function to handle sending password reset emails
import { NavLink } from "react-router-dom"; // Import NavLink for navigation

const Reset = () => {
  const [email, setEmail] = useState(""); // useState hook to manage the email input field

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
            onClick={() => sendPasswordReset(email)} // Call the sendPasswordReset function with the entered email
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
