// // Home.jsx
// import React from 'react'
// import { ThemeToggle } from '../components/ThemeToggle';

// const Home = () => {
//   return (
//     <div className="min-h-screen">

//         {/*Theme toggle*/}
//         <ThemeToggle/>

//          {/*Background */}

//           {/*Navbar*/}

//            {/*Main Content*/}

//             {/*Footer*/}
//       Home
//     </div>
//   );
// };

// export default Home; // ✅ default export

import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";

const Home = () => (
  <div className="min-h-screen">
    <ThemeToggle />
    Home

    <StarBackground/>
  </div>
);

export default Home;

