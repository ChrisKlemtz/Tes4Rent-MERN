import React from "react";
import { Link } from "react-router-dom";
import CTASection from "../components/common/CTASection";
import Footer from "../components/common/Footer";
import Button from "../components/common/Button";

const Home = () => {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-black text-white text-center py-20 px-6">
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/6a3b74c4-6b5c-432e-8dd8-070a8b813123/bvlatuR/std/2880x1800/_25-Hero-D"
          alt="Tesla Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            Drive the Future – Rent a Tesla Today
          </h1>
          <Link to="/cars">
            <Button>Browse Cars</Button>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Tesla4Rent?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "100% Electric Cars",
            "Zero Emissions",
            "5-Minute Booking",
            "Modern Tesla Fleet",
            "Easy Online Reservation",
            "Instant Pickup",
          ].map((benefit, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-sm">
              <span className="text-2xl font-semibold">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Featured Teslas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              model: "Model 3",
              image:
                "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf79998-97e5-4966-88d0-d181fbd6247f/bvlatuR/std/2880x1800/Model-3-Exterior-Hero",
              price: 299,
            },
            {
              model: "Model Y",
              image:
                "https://tesla-cdn.thron.com/delivery/public/image/tesla/e6ba6f9e-b660-4381-bf4e-2e63fdc6eeb8/bvlatuR/std/2880x1800/Model-Y-Exterior-Hero",
              price: 329,
            },
            {
              model: "Model S",
              image:
                "https://tesla-cdn.thron.com/delivery/public/image/tesla/5e3cf179-09da-4104-bca0-02ba9b9b29e0/bvlatuR/std/2880x1800/Model-S-Exterior-Hero",
              price: 399,
            },
          ].map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold">{car.model}</h3>
                <p className="text-gray-700 mb-2">{car.price} zł / day</p>
                <Link to="/cars">
                  <Button className="mt-2">View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {["Choose your Tesla", "Select Dates", "Book Online", "Drive!"].map(
            (step, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-sm w-full md:w-1/4"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {index + 1}
                </div>
                <p className="text-lg font-medium">{step}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Kasia",
              text: "Smooth booking and amazing ride!",
            },
            {
              name: "Tomasz",
              text: "Szybko, prosto i mega Tesla. Polecam!",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow text-left"
            >
              <div className="text-xl font-semibold">{testimonial.name}</div>
              <div className="text-yellow-500">★★★★★</div>
              <p className="mt-2 text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
