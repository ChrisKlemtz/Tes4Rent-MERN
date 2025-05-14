import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="min-h-screen bg-white text-black px-6 py-16 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-bold mb-10 text-center">Contact Us</h1>

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            We’d love to hear from you. Whether you have a question about
            features, pricing, availability or anything else — our team is ready
            to answer all your questions.
          </p>
          <ul className="text-gray-800 space-y-2">
            <li>
              <strong>Email:</strong> support@tesla4rent.com
            </li>
            <li>
              <strong>Phone:</strong> +49 123 456 789
            </li>
            <li>
              <strong>Address:</strong> Friedrichstraße 123, 10117 Berlin,
              Germany
            </li>
          </ul>
        </div>

        {/* Google Map */}
        <div>
          <iframe
            title="Tesla4Rent Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4139166317353!2d13.388859315801526!3d52.52000697981295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c84732a4ef%3A0x6b3fdd65075c2c32!2sFriedrichstra%C3%9Fe%2C%2010117%20Berlin!5e0!3m2!1sen!2sde!4v1700000000000"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl shadow-md"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
