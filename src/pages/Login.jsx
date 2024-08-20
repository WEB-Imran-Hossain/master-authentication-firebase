import { useState } from "react";
import { loginWithEmailAndPassword } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle submit button
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await loginWithEmailAndPassword(email, password);
      console.log(response);
      navigate("/home"); // Change this to your desired route after login
    } catch (error) {
      console.log(error);
    }
  };

   // Handle google button
   const handleSocialLogin = async () => {
    const user = await signInWithGoogle()
    console.log(user);
    navigate("/home");
    
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Sign In to Your Account
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
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
            Sign In
          </button>
          {/* google login */}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleSocialLogin}
          >
            Login with Google
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Register
          </NavLink>
        </p>
        {/* user reset */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Forgot Password?{" "}
          <NavLink
            to="/reset"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Reset your Password
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
