const express = require("express");
const {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} = require("../controllers/carController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/", getAllCars);
router.get("/:id", getCarById);
router.post("/", authMiddleware, adminMiddleware, createCar);
router.put("/:id", authMiddleware, adminMiddleware, updateCar);
router.delete("/:id", authMiddleware, adminMiddleware, deleteCar);

module.exports = router;
