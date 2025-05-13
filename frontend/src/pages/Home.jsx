import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import CTASection from "../components/common/CTASection";
import StatsSection from "../components/common/StatsSection";
import EnergyLine from "../components/common/EnergyLine";
import {
  FaBolt,
  FaLeaf,
  FaMobileAlt,
  FaStar,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaCar,
  FaClock,
  FaChargingStation,
  FaCheckCircle,
  FaPhoneAlt, // ← DODAJ TO
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="text-white bg-black scroll-smooth">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
      />

      {/* Hero with Video */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/tesla-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">Experience Tesla</h1>
          <p className="text-xl mb-8">
            Luxury. Performance. Sustainability. Rent a Tesla today and drive
            the future.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#fleet">
              <button className="bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition">
                Explore Fleet
              </button>
            </a>
            <a href="#contact">
              <button className="border-2 border-white text-white py-3 px-6 rounded-full font-semibold hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-20 px-6 text-center bg-black">
        <h2 className="text-3xl font-bold mb-10">Our Fleet</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              model: "Model S",
              image:
                "https://tesla-cdn.thron.com/delivery/public/image/tesla/5e3cf179-09da-4104-bca0-02ba9b9b29e0/bvlatuR/std/2880x1800/Model-S-Exterior-Hero",
              specs: ["652 km range", "3.2s 0-100 km/h", "5 seats"],
              price: "399 zł/day",
            },
            {
              model: "Model 3",
              image:
                "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf79998-97e5-4966-88d0-d181fbd6247f/bvlatuR/std/2880x1800/Model-3-Exterior-Hero",
              specs: ["491 km range", "5.6s 0-100 km/h", "5 seats"],
              price: "299 zł/day",
            },
            {
              model: "Model X",
              image:
                "https://tesla-cdn.thron.com/delivery/public/image/tesla/65490e8b-7fd0-42b7-b3bb-e20509d1b2a4/bvlatuR/std/2880x1800/Model-X-Hero",
              specs: ["580 km range", "2.6s 0-100 km/h", "6 seats"],
              price: "499 zł/day",
            },
            {
              model: "Model Y",
              image:
                "https://tesla-cdn.thron.com/delivery/public/image/tesla/e6ba6f9e-b660-4381-bf4e-2e63fdc6eeb8/bvlatuR/std/2880x1800/Model-Y-Exterior-Hero",
              specs: ["533 km range", "5.0s 0-100 km/h", "5 seats"],
              price: "329 zł/day",
            },
          ].map((car, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg overflow-hidden shadow-lg transition hover:scale-105"
            >
              <img
                src={car.image}
                alt={car.model}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{car.model}</h3>
                {car.specs.map((spec, i) => (
                  <p key={i} className="text-sm text-gray-600">
                    {spec}
                  </p>
                ))}
                <p className="font-bold mt-2">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Tesla4Rent */}
      <section id="why" className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Tesla4Rent?</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left text-white">
          {[
            { icon: <FaBolt />, text: "Fully Electric Fleet" },
            { icon: <FaChargingStation />, text: "Free Charging Included" },
            { icon: <FaClock />, text: "5-Minute Online Booking" },
            { icon: <FaCar />, text: "Modern, Maintained Teslas" },
            { icon: <FaCheckCircle />, text: "Full Insurance Coverage" },
            { icon: <FaLeaf />, text: "Zero Emissions" },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-3xl">{item.icon}</div>
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-black text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Anna",
              text: "Fantastic service and the car was a dream!",
              image: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Marek",
              text: "Tesla for the weekend? Best decision ever.",
              image: "https://randomuser.me/api/portraits/men/34.jpg",
            },
            {
              name: "Sophie",
              text: "Seamless booking and delivery. Loved it!",
              image: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              name: "Liam",
              text: "Super clean, techy and fun. Highly recommend!",
              image: "https://randomuser.me/api/portraits/men/23.jpg",
            },
            {
              name: "Olivia",
              text: "Perfect for our wedding day. Thank you!",
              image: "https://randomuser.me/api/portraits/women/30.jpg",
            },
            {
              name: "Jakub",
              text: "Great experience, great car, great price.",
              image: "https://randomuser.me/api/portraits/men/60.jpg",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow text-left flex items-start gap-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-yellow-500">★★★★★</div>
                <p className="mt-1 text-sm">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact + Location */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto text-left text-gray-300">
          <div className="space-y-4">
            <p>
              <FaPhoneAlt className="inline-block mr-2 text-white" /> +48 600
              000 000
            </p>
            <p>
              <FaPhoneAlt className="inline-block mr-2 text-white" />{" "}
              support@tesla4rent.pl
            </p>
            <p>Mon–Fri: 8:00 – 18:00</p>
            <p>
              <FaMapMarkerAlt className="inline-block mr-2 text-white" />{" "}
              Szczecin & Surroundings
            </p>
            <p>Delivery available to your location</p>
          </div>
          <iframe
            className="w-full h-64 rounded-lg shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.95219821065!2d14.55281131589177!3d53.428543179997314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700c6b6e3dd6633%3A0x6a16342f99c12c85!2sSzczecin!5e0!3m2!1sen!2spl!4v1686330931496!5m2!1sen!2spl"
            allowFullScreen
            loading="lazy"
            title="Szczecin Map"
          ></iframe>
        </div>
      </section>

      {/* EnergyLine */}
      <EnergyLine />

      {/* StatsSection */}
      <StatsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;
