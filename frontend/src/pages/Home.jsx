import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import CTASection from "../components/common/CTASection";
import StatsSection from "../components/common/StatsSection";
import EnergyLine from "../components/common/EnergyLine";
import {
  FaBolt,
  FaLeaf,
  FaMapMarkerAlt,
  FaCar,
  FaClock,
  FaChargingStation,
  FaCheckCircle,
  FaPhoneAlt,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const testimonials = [
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
];

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

      {/* Hero */}
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
              image: "/images/model-s.jpg",
              specs: ["652 km range", "3.2s 0-100 km/h", "5 seats"],
              price: "399 zł/day",
            },
            {
              model: "Model 3",
              image: "/images/model-3.jpg",
              specs: ["491 km range", "5.6s 0-100 km/h", "5 seats"],
              price: "299 zł/day",
            },
            {
              model: "Model X",
              image: "/images/model-x.jpg",
              specs: ["580 km range", "2.6s 0-100 km/h", "6 seats"],
              price: "499 zł/day",
            },
            {
              model: "Model Y",
              image: "/images/model-y.jpg",
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
      <section id="why" className="py-20 px-6 bg-white text-center text-black">
        <h2 className="text-3xl font-bold mb-10">Why Tesla4Rent?</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left pt-10">
          {[
            { icon: <FaBolt />, text: "Fully Electric Fleet" },
            { icon: <FaChargingStation />, text: "Free Charging Included" },
            { icon: <FaClock />, text: "5-Minute Online Booking" },
            { icon: <FaCar />, text: "Modern, Maintained Teslas" },
            { icon: <FaCheckCircle />, text: "Full Insurance Coverage" },
            { icon: <FaLeaf />, text: "Zero Emissions" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl text-black">{item.icon}</div>
              <p className="text-lg font-medium text-gray-800">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        className="py-20 px-6 bg-gray-100 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-black mb-10">
          What Our Clients Say
        </h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          className="max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <div className="font-semibold text-black">
                  {testimonial.name}
                </div>
                <div className="text-yellow-500 text-sm mb-2">★★★★★</div>
                <p className="text-sm text-gray-600">{testimonial.text}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-6 bg-white text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-black mb-10">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto text-left">
          {/* Contact Info */}
          <motion.div
            className="bg-gray-100 rounded-xl p-8 shadow-xl text-black space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg">
              <FaPhoneAlt className="inline-block mr-2 text-black" />
              +49 600 000 000
            </p>
            <p className="text-lg">
              <FaPhoneAlt className="inline-block mr-2 text-black" />
              support@tesla4rent.pl
            </p>
            <p className="text-gray-600">Mon–Fri: 8:00 – 18:00</p>
            <p className="text-lg">
              <FaMapMarkerAlt className="inline-block mr-2 text-black" />
              Berlin & Surroundings
            </p>
            <p className="text-gray-600">Delivery available to your location</p>
          </motion.div>

          {/* Map */}
          <motion.div
            className="overflow-hidden rounded-xl shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <iframe
              className="w-full h-64 md:h-full rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.9828451004384!2d13.38885931578784!3d52.517036979811735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c79f0b6c03%3A0x42b4a7f97cd8b838!2sBerlin!5e0!3m2!1sen!2sde!4v1686330931496!5m2!1sen!2sde"
              allowFullScreen
              loading="lazy"
              title="Berlin Map"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>

      <StatsSection />
      <EnergyLine />
      <CTASection />
    </div>
  );
};

export default Home;
