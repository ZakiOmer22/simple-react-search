import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import ProfileCard from "./ProfileCard";

import React from "react";

function App() {
  return (
      <ThemeProvider>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.4s ease-in-out",
        }}
      >
        <h1>🌗 Theme Toggle App</h1>
        <ThemeToggle />
        <ProfileCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
