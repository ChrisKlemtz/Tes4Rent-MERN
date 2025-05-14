import { motion } from "framer-motion";
import { Car, BatteryCharging, CalendarCheck2 } from "lucide-react";

const About = () => {
  return (
    <motion.div
      className="min-h-screen bg-white text-black px-6 py-16 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-5xl font-bold mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        About Tesla4Rent
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-10">
        <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow-md text-center"
          whileHover={{ scale: 1.05 }}
        >
          <Car className="w-12 h-12 mx-auto text-black mb-4" />
          <h2 className="text-xl font-semibold mb-2">Premium Tesla Fleet</h2>
          <p className="text-gray-700">
            Drive the latest Tesla models – S, 3, X, Y – equipped with autopilot
            and futuristic tech.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow-md text-center"
          whileHover={{ scale: 1.05 }}
        >
          <BatteryCharging className="w-12 h-12 mx-auto text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">100% Electric</h2>
          <p className="text-gray-700">
            Zero-emission rentals for eco-conscious drivers. Clean, quiet,
            sustainable.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow-md text-center"
          whileHover={{ scale: 1.05 }}
        >
          <CalendarCheck2 className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Easy Booking</h2>
          <p className="text-gray-700">
            Reserve your Tesla online in seconds with our user-friendly
            dashboard.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 text-center text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
        <p className="mb-6">
          Tesla4Rent combines cutting-edge technology with a passion for
          sustainability. Whether you're exploring the city or embarking on a
          European road trip, we offer a seamless rental experience powered by
          innovation.
        </p>
        <p>Join the movement. Drive the future.</p>
      </div>
    </motion.div>
  );
};

export default About;
