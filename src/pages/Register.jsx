import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { registerWithEmailAndPassword } from "../firebase";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        text: error.message.includes("already in use")
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
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
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
