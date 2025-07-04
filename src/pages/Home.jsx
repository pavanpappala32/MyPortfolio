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
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";

const Home = () => (
  <div className="min-h-screen">
    <ThemeToggle />
    Home

    <StarBackground/>

    <Navbar/>

    <main>
      <HeroSection/>
     
      <AboutSection/>
      

      <SkillsSection/>

    </main>
  </div>
);

export default Home;

