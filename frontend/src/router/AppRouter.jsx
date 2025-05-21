import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cars from "../pages/Cars";
import CarDetails from "../pages/CarDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import AdminRoute from "../components/layout/AdminRoute";
import MainLayout from "../components/layout/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Terms from "../pages/Terms";
import BookingForm from "../pages/BookingForm"; // ✅ dodane

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="terms" element={<Terms />} />
        <Route path="cars" element={<Cars />} />
        <Route path="cars/:id" element={<CarDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Protected user routes */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="book"
          element={
            <ProtectedRoute>
              <BookingForm />
            </ProtectedRoute>
          }
        />

        {/* Admin route */}
        <Route
          path="admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
