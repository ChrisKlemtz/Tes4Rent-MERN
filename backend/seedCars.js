const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Car = require("./models/Car");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const cars = [
  {
    model: "Model S",
    range: 652,
    pricePerDay: 139,
    image: "/images/model-s.jpg",
  },
  {
    model: "Model 3",
    range: 491,
    pricePerDay: 109,
    image: "/images/model-3.jpg",
  },
  {
    model: "Model X",
    range: 580,
    pricePerDay: 159,
    image: "/images/model-x.jpg",
  },
  {
    model: "Model Y",
    range: 533,
    pricePerDay: 119,
    image: "/images/model-y.jpg",
  },
  {
    model: "Model S Plaid",
    range: 637,
    pricePerDay: 189,
    image: "/images/model-s-plaid.jpg",
  },
  {
    model: "Model 3 Performance",
    range: 507,
    pricePerDay: 129,
    image: "/images/model-3-performance.jpg",
  },
  {
    model: "Model X Plaid",
    range: 547,
    pricePerDay: 179,
    image: "/images/model-x-plaid.jpg",
  },
  {
    model: "Model Y Long Range",
    range: 565,
    pricePerDay: 129,
    image: "/images/model-y-long-range.jpg",
  },
  {
    model: "Cybertruck",
    range: 800,
    pricePerDay: 199,
    image: "/images/cybertruck.jpg",
  },
  {
    model: "Roadster",
    range: 1000,
    pricePerDay: 299,
    image: "/images/roadster.jpg",
  },
];

const seedCars = async () => {
  try {
    await Car.deleteMany();
    await Car.insertMany(cars);
    console.log("🚗 Cars seeded!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding cars:", err);
    process.exit(1);
  }
};

seedCars();
