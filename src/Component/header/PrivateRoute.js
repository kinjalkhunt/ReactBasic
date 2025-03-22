import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("token"); // Check token in local storage
    console.log(">>>>>>>>>>>>",isLoggedIn);
    

    return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
