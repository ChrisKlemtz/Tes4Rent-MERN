import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user || user.email !== "admin@tesla.com") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminRoute;
