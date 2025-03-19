import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthSuccess() {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");

        if (token) {
            localStorage.setItem("token", token);
            navigate("/"); // Redirect to home page
        } else {
            alert("Login failed");
            navigate("/login");
        }
    }, [navigate]);

    return <div>Redirecting...</div>;
}

export default AuthSuccess;
