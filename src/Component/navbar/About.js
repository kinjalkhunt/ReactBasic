import React from 'react'
import { useParams } from 'react-router-dom';

function About() {
  const {name} = useParams(); // Get 'name' from URL
  return (
    <div>
      <h1>Hello i am about</h1>
      <div>
        <p>lllllllladfa nnnnnnnnn  mmmmmmmmmm  oooooooooo pppppppppppp  qqqqqqqqqqqqqqqq</p>
        <p>lllllllladfa nnnnnnnnn  mmmmmmmmmm  oooooooooo pppppppppppp  qqqqqqqqqqqqqqqq</p>
        <p>lllllllladfa nnnnnnnnn  mmmmmmmmmm  oooooooooo pppppppppppp  qqqqqqqqqqqqqqqq</p>
        <p>lllllllladfa nnnnnnnnn  mmmmmmmmmm  oooooooooo pppppppppppp  qqqqqqqqqqqqqqqq</p>
        <p>lllllllladfa nnnnnnnnn  mmmmmmmmmm  oooooooooo pppppppppppp  qqqqqqqqqqqqqqqq</p>
        <p>lllllllladfa nnnnnnnnn  mmmmmmmmmm  oooooooooo pppppppppppp  qqqqqqqqqqqqqqqq</p>
        <p>lllllllladfa nnnnnnnnn  mmmmmmmmmm  oooooooooo pppppppppppp  qqqqqqqqqqqqqqqq</p>

      </div>
     

     
      <div>
        <h1>User Page</h1>
        <p>Hello, {name}!</p>
      </div>
  
    </div>
  )
}

export default About
// import React from "react";
// import { useParams } from "react-router-dom";

// function User() {
//   const { name } = useParams(); // Get 'name' from URL

//   return (
//     <div>
//       <h1>User Page</h1>
//       <p>Hello, {name}!</p>
//     </div>
//   );
// }

// export default User;
