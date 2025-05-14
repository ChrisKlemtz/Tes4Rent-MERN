import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newUser = { name, email, phone };
    localStorage.setItem("user", JSON.stringify(newUser));

    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-black px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-100 w-full max-w-md p-10 rounded-2xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded-lg bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 mb-4 rounded-lg bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-6 rounded-lg bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-3 rounded-full hover:bg-gray-800 transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-black font-medium underline hover:text-gray-800 transition"
          >
            Log in here
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Register;
