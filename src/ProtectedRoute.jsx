import { Navigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("adminAuth"); // Check auth status

  return isAuthenticated ? element : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
