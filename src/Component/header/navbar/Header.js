// Header.js
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token
        setIsLoggedIn(false);
        navigate("/login"); // Redirect to login
    };

    return (
        <header className="p-4 bg-gray-800 text-white flex justify-between">
            <div className="flex space-x-4">
                <Link to="/" className="px-4 py-2 bg-gray-700 rounded">Home</Link>
                <Link to="/about" className="px-4 py-2 bg-gray-700 rounded">About</Link>
                <Link to="/blog" className="px-4 py-2 bg-gray-700 rounded">Blog</Link>
            </div>
            
            <div>
                {isLoggedIn ? (
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-500 rounded"
                    >
                        Logout
                    </button>
                ) : (
                    <Link to="/login" className="px-4 py-2 bg-blue-500 rounded">
                        Login
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
