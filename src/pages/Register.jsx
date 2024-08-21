import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { registerWithEmailAndPassword } from "../firebase";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Password validation function
  const handlePassword = (event) => {
    let new_pass = event.target.value;
    setPassword(new_pass);

    const lowerCase = /[a-z]/g;
    const upperCase = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/g; // Regex for special characters

    if (!new_pass.match(lowerCase)) {
      setErrorMessage("Password should contain lowercase letters!");
    } else if (!new_pass.match(upperCase)) {
      setErrorMessage("Password should contain uppercase letters!");
    } else if (!new_pass.match(numbers)) {
      setErrorMessage("Password should contain numbers!");
    } else if (!new_pass.match(specialChar)) {
      setErrorMessage("Password should contain special characters!");
    } else if (new_pass.length < 8) {
      setErrorMessage("Password length should be at least 8 characters.");
    } else {
      setErrorMessage("");
    }
  };

  // Handle submit button
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await registerWithEmailAndPassword(email, password);
      console.log(user);

      //registration sucessfully
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Registration Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);

      //already register
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Registration Faild!",
        text: error.message.includes("This email is already registered")
          ? "An error occurred. Please try again."
          : "This email is already registered.",
        showConfirmButton: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Create an Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePassword}
              required
              placeholder="Password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errorMessage && (
              <div className="text-red-500 text-sm mt-1">{errorMessage}</div>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
