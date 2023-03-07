import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  let location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

export default ProtectedRoute;
