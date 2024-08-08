import React from "react";
import { useTheme } from "../ThemeContext";
import "../styles/Home.css";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`home ${theme}`}>
      <h1>Welcome to My Portfolio</h1>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;
