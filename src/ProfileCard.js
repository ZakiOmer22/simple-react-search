import React from "react";
import { useTheme } from "./ThemeContext";

const ProfileCard = () => {
  const { theme } = useTheme();

  const styles = {
    background: theme === "dark" ? "#333" : "#eee",
    color: theme === "dark" ? "#fff" : "#000",
    borderRadius: 10,
    padding: 20,
    textAlign: "center",
    marginTop: 20,
  };

  return (
    <div style={styles}>
      <h2>User Name</h2>
      <p>Developer | Designer | Instructor</p>
    </div>
  );
};

export default ProfileCard;
