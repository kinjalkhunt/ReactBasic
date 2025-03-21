
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function AuthSuccess() {
//     const navigate = useNavigate();

//     useEffect(() => {
//         const urlParams = new URLSearchParams(window.location.search);
//         const token = urlParams.get("token");

//         console.log("Extracted Token from URL:", token);

//         if (token) {
//             localStorage.setItem("token", token);
//             setTimeout(() => {
//                 navigate("/", { replace: true }); // Ensure redirection after storing
//             }, 500);
//         } else {
//             alert("Login failed");
//             navigate("/login", { replace: true });
//         }

//     }, [navigate]);

//     return <div>Redirecting...</div>;
// }

// export default AuthSuccess;
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthSuccess() {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");

        if (token) {
            localStorage.setItem("token", token);
            setTimeout(() => navigate("/", { replace: true }), 500);
        } else {
            alert("Login failed");
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div className="flex items-center justify-center h-screen">
            <p className="text-lg font-bold">Authenticating...</p>
        </div>
    );
}

export default AuthSuccess;
