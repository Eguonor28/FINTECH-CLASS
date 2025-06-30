import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    //Login API Call
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="p-6 max-w-7xl  mx-auto">
      <Navbar />
      <div className="flex md:flex-row flex-col gap-8 max-w-7xl justify-between items-center  mx-auto mt-26">
        <div className="md:h-full flex flex-col justify-center">
          <h3 className="text-3xl font-medium text-black">
            Enter your details here to Login
          </h3>
          <p className="text-xs text-gray mt-2 mb-6">
            Enter your details to log in
          </p>

          <form className="flex flex-col space-y-2" onSubmit={handleLogin}>
            <input
              className="border p-3 w-full rounded"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="email@email.com"
              type="text"
            />
            <input
              className="border p-3 w-full rounded"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Password"
              type="password"
            />

            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

            <button
              type="submit"
              className="bg-indigo-400 text-white p-3 rounded"
            >
              Login
            </button>

            <p className="text-[13px] text-slate-800 mt-3">
              Don't have an account?{" "}
              <Link className="font-medium text-primary underline" to="/signup">
                SignUp
              </Link>
            </p>
          </form>
        </div>

        <div className="">
          <img
            className="w-full md:w-130 h-150 object-cover rounded shadow-lg"
            src="/img1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
