// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleOnSubmit = (e) => {
//         e.preventDefault(); // Prevent form default submission
//         if (email && password) {
//             // Store login state in localStorage
//             localStorage.setItem('isLoggedIn', 'true');
//             navigate('/'); // Redirect to home page after login
//         }
//     }

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-8 rounded-xl shadow-lg w-96">
//                 <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
//                 <form className='mt-4' onSubmit={handleOnSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-gray-600 text-sm font-bold mb-2" >
//                             Email
//                         </label>
//                         <input
//                             type='email'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your email"
//                             required
//                         >
//                         </input>
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-600 text-sm font-bold mb-2" >
//                             Password
//                         </label>
//                         <input
//                             type='password'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your email"
//                             required
//                         >
//                         </input>
//                     </div>
//                     <button 
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
//                     >
//                        Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Normal Login Handler
    const handleOnSubmit = async (e) => {
        e.preventDefault(); // Prevent form default submission
        if (email && password) {
            try {
                const response = await fetch("http://localhost:8000/v1/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem("token", data.token);
                    navigate("/");
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error("Login Error:", error);
                alert("Something went wrong");
            }
        }
    };

    // Google Login Handler
    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8000/v1/auth/google";
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                <form className="mt-4" onSubmit={handleOnSubmit}>
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
                        Submit
                    </button>
                </form>

                {/* Google Login Button */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                    Continue with Google
                </button>
            </div>
        </div>
    );
}

export default Login;
