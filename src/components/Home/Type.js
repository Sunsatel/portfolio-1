import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN stack",
          "MEVN stack",
          "React",
          "Gatsby",
          "Next.js",
          "Vue",
          "Nuxt",
          "JavaScript",
          "TypeScript",
          "Laravel/Vue"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
