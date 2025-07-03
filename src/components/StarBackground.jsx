import { useState, useEffect } from "react";

export const StarBackground = () => {
  const [stars,   setStars]   = useState([]);
  const [meteors, setMeteors] = useState([]);

  /* ───────────────────────────  HELPERS  ─────────────────────────── */

  function generateStars() {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10_000
    );

    const newStars = Array.from({ length: numberOfStars }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
    }));

    setStars(newStars);
  }

  function generateMeteors() {
    const numberOfMeteors = 4;

    const newMeteors = Array.from({ length: numberOfMeteors }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      delay: Math.random() * 15,
      animationDuration: Math.random() * 3 + 3,
    }));

    setMeteors(newMeteors);
  }

  /* ───────────────────────────  EFFECTS  ─────────────────────────── */

  useEffect(() => {
    // 1  Initial render
    generateStars();
    generateMeteors();

    // 2  Handle viewport resize
    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    // 3  Clean‑up on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ───────────────────────────  RENDER  ─────────────────────────── */

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute bg-white rounded-full animate-pulse-subtle"
          style={{
            width:  `${star.size}px`,
            height: `${star.size}px`,
            top:    `${star.y}%`,
            left:   `${star.x}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="absolute rounded-full bg-gradient-to-r from-white via-white to-transparent animate-meteor"
          style={{
            width:  `${meteor.size * 25}px`,   // trail length
            height: `${meteor.size}px`,        // thickness
            top:    `${meteor.y}%`,
            left:   `${meteor.x}%`,
            animationDelay:    `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
