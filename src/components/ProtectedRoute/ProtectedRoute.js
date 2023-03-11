import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    return children;
  }
  return <Navigate to="/" />;
  
};

export default ProtectedRoute;

