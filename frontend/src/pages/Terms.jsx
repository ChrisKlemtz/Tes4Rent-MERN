import { motion } from "framer-motion";

const Terms = () => {
  return (
    <motion.div
      className="min-h-screen bg-white text-black px-6 py-16 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-bold mb-10 text-center">
        Terms & Conditions
      </h1>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <section>
          <h2 className="font-semibold text-xl mb-2">1. Rental Eligibility</h2>
          <p>
            You must be at least 25 years old and hold a valid driver’s license
            for a minimum of 2 years. International customers must provide
            documentation in English or German.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">2. Booking & Payment</h2>
          <p>
            Full payment is required at the time of booking. We accept all major
            credit cards. A refundable security deposit will be held during the
            rental period.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">3. Vehicle Use</h2>
          <p>
            The vehicle must be returned in the same condition. Smoking and pets
            are strictly prohibited. Mileage limits and charging policies may
            apply.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">4. Insurance</h2>
          <p>
            All rentals include basic liability insurance. Additional coverage
            options are available at checkout.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">5. Cancellation Policy</h2>
          <p>
            Free cancellation up to 48 hours before pick-up. After that, a
            partial refund may apply.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">6. Contact</h2>
          <p>
            For questions or disputes, contact us at
            <a
              href="mailto:support@tesla4rent.com"
              className="text-black font-semibold underline ml-1"
            >
              support@tesla4rent.com
            </a>
            .
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default Terms;
