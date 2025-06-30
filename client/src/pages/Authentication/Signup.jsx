import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/UserContext";
import uploadImage from "../../utils/uploadImage";

const Signup = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!fullName) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    try {
      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImageUrl,
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
    <div className="p-6 max-w-7xl mx-auto">
      <Navbar />
      <div className="flex md:flex-row flex-col gap-8 max-w-7xl justify-between items-center mx-auto mt-26">
        <div className="md:h-full flex flex-col justify-center">
          <h3 className="text-3xl font-medium text-black">
            Enter your details here to Sign Up
          </h3>
          <p className="text-xs text-gray mt-2 mb-6">
            Enter your details to create an account
          </p>

          <form onSubmit={handleSignUp} className="flex flex-col space-y-2">
            <input
              className="border p-3 w-full rounded"
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              placeholder="Full Name"
              type="text"
            />
            <input
              className="border p-3 w-full rounded"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              placeholder="Email Address"
              type="text"
            />
            <input
              className="border p-3 w-full rounded"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              placeholder="Password"
              type="password"
            />

            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

            <button
              type="submit"
              className="bg-indigo-400 text-white p-3 rounded"
            >
              Sign Up
            </button>

            <p className="text-[13px] text-slate-800 mt-3">
              Already have an account?{" "}
              <Link className="font-medium text-primary underline" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>

        <div className="">
          <img
            className="w-full md:w-130 h-150 object-cover rounded shadow-lg"
            src="/img1.jpg"
            alt="Sign up illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
