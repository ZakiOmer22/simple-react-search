import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, dispatch } = useTheme();

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE" })}
      style={{
        padding: "10px 20px",
        borderRadius: 8,
        border: "none",
        cursor: "pointer",
        background: theme === "light" ? "#222" : "#f0f0f0",
        color: theme === "light" ? "#fff" : "#222",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
