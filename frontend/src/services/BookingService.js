// BookingService.js (mock version using localStorage)

const getBookings = () => {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  return Promise.resolve(bookings);
};

const addBooking = (booking) => {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const newBooking = { id: Date.now(), ...booking };
  bookings.push(newBooking);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  return Promise.resolve(newBooking);
};

const deleteBooking = (id) => {
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings = bookings.filter((b) => b.id !== id);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  return Promise.resolve();
};

export default {
  getBookings,
  addBooking,
  deleteBooking,
};