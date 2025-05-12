import { useEffect, useState } from "react";
import BookingService from "../services/BookingService";

const useBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    setLoading(true);
    const data = await BookingService.getBookings();
    setBookings(data);
    setLoading(false);
  };

  const addBooking = async (booking) => {
    const newBooking = await BookingService.addBooking(booking);
    setBookings((prev) => [...prev, newBooking]);
  };

  const deleteBooking = async (id) => {
    await BookingService.deleteBooking(id);
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return {
    bookings,
    loading,
    addBooking,
    deleteBooking,
    refetch: fetchBookings,
  };
};

export default useBooking;