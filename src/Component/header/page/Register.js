import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if (name && email && password) {
            try {
                const response = await fetch("http://localhost:8000/v1/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, password }),
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem("token", data.token); // Store token
                    navigate("/"); // Redirect to home page
                } else {
                    alert(data.message); // Show backend error message
                }
            } catch (error) {
                console.error("Registration Error:", error);
                alert("Something went wrong");
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
                <form className="mt-4" onSubmit={handleOnSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Register
                    </button>
                </form>

                <div className="pt-4 text-center">
                    <h1 className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <span
                            className="text-blue-500 underline cursor-pointer hover:text-blue-600"
                            onClick={() => navigate("/login")}
                        >
                            Login Here
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Register;
