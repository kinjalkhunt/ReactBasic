// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux";
// import { signIn, signOut } from "./slice/AuthSlice";

// export const Auth = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const dispatch = useDispatch();
//     const auth = useSelector((state) => state.auth)
//     console.log("Auth State:", auth);

//     const handleSignIn = () => {
//         dispatch(signIn({ email, password }))
//     }

//     const handleSignOut = () => {
//         dispatch(signOut())
//     } 

//     return (
//         <div>
//             <h1>Sign In Page</h1>
//             {!auth ? (
//                 <div onSubmit={handleSignIn} className="flex flex-col gap-4">
//                     <input
//                         type="text"
//                         placeholder="Enter your Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="border border-gray-300 p-2 rounded-md">
//                     </input>
//                     <input
//                         type="password"
//                         placeholder="Enter your Password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                         className="border border-gray-300 p-2 rounded-md">
//                     </input>
//                     <button type="submit" className="border border-gray-300 p-2 rounded-md">Sign In</button>

//                 </div>
//             ) : (
//                 <div className="text-center">
//                     <p className="text-green-600 font-semibold mt-4">
//                         Logged in as: <strong>{auth.email}</strong>
//                     </p>
//                     <button onClick={handleSignOut} className="border border-gray-300 p-2 rounded-md mt-4">
//                         SignOut
//                     </button>
//                 </div>
//             )}


//         </div>
//     )
// }


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "./slice/AuthSlice";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.user);
    
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          dispatch(signIn(JSON.parse(storedUser)));
        }
      }, [dispatch]);
      
    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(signIn({ email, password }));
        localStorage.setItem("user", JSON.stringify({email, password}));

    };

    const handleSignOut = () => {
        dispatch(signOut());
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-xl font-bold mb-4">Sign In Page</h1>

            {!auth ? (
                <form onSubmit={handleSignIn} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md"
                    />
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md"
                    />
                    <button
                        type="submit"
                        className="border border-gray-300 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                    >
                        Sign In
                    </button>
                </form>
            ) : (
                <div className="text-center">
                    <p className="text-green-600 font-semibold mt-4">
                        Logged in as: <strong>{auth.email}</strong>
                    </p>
                    <button
                        onClick={handleSignOut}
                        className="mt-4 border border-gray-300 p-2 rounded-md bg-red-500 text-white hover:bg-red-600"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};
