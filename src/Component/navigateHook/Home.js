// import React from 'react'

// function Home() {
//   return (
//     <div>
//         <h1>Hello i am Home</h1>
//         <div>
//         <p>cbasdjkfbajkdBAKLJCDbhasklhjdsafbjahcfAKJFH kjhadkjha kjhASKDL k jkldasjdjAKSDJ KLaksdjkASD</p>
//         <p>cbasdjkfbajkdBAKLJCDbhasklhjdsafbjahcfAKJFH kjhadkjha kjhASKDL k jkldasjdjAKSDJ KLaksdjkASD</p>
//         <p>cbasdjkfbajkdBAKLJCDbhasklhjdsafbjahcfAKJFH kjhadkjha kjhASKDL k jkldasjdjAKSDJ KLaksdjkASD</p>
//         <p>cbasdjkfbajkdBAKLJCDbhasklhjdsafbjahcfAKJFH kjhadkjha kjhASKDL k jkldasjdjAKSDJ KLaksdjkASD</p><p>cbasdjkfbajkdBAKLJCDbhasklhjdsafbjahcfAKJFH kjhadkjha kjhASKDL k jkldasjdjAKSDJ KLaksdjkASD</p><p>cbasdjkfbajkdBAKLJCDbhasklhjdsafbjahcfAKJFH kjhadkjha kjhASKDL k jkldasjdjAKSDJ KLaksdjkASD</p><p>cbasdjkfbajkdBAKLJCDbhasklhjdsafbjahcfAKJFH kjhadkjha kjhASKDL k jkldasjdjAKSDJ KLaksdjkASD</p>
    
//     </div>
      
//     </div>
//   )
// }

// export default Home
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Click on a user:</p>
      <ul>
        {/* navigation type is useNavigate, link to, link  */}
        <li><Link to="/user/John">John</Link></li>
        {/* <li><Link to="/user/Alice">Alice</Link></li> */}
      </ul>
    </div>
  );
}

export default Home;
