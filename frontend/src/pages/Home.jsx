import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-4"
      >
        Rent a Tesla. Drive the Future.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-lg md:text-xl text-center mb-8 max-w-2xl"
      >
        Tesla4Rent makes driving an electric car easy and exciting. Choose your
        model, book online, and experience the future of mobility.
      </motion.p>

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          to="/cars"
          className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-300 transition"
        >
          Browse Cars
        </Link>
      </motion.div>

      <div className="mt-12" data-aos="fade-up">
        <img
          src="/images/hero-tesla.jpg"
          alt="Tesla Hero"
          className="max-w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
