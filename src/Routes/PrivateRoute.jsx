import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (user) {
    return children;
  }

  if (loading) {
    return <h1 className="text-5xl">Loading...</h1>;
  }

  return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;
