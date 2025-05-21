const express = require("express");
const {
  createBooking,
  getMyBookings,
  getAllBookings,
  deleteBooking,
} = require("../controllers/bookingController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createBooking);
router.get("/user", authMiddleware, getMyBookings);
router.get("/", authMiddleware, adminMiddleware, getAllBookings);
router.delete("/:id", authMiddleware, deleteBooking);

module.exports = router;
