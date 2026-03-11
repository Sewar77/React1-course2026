import { useState, useEffect } from "react";
function Theme() {
  const [theme, setTheme] =
    useState(localStorage.getItem("theme")) ||
    localStorage.setItem("theme", "light");

  //rerender components ==> use effect
  useEffect(() => {
    localStorage.getItem("theme");

    document.body.style.backgroundColor = theme === "light" ? "#fff" : "Navy";

    document.body.style.color = theme === "light" ? "Navy" : "LavenderBlush";
  }, [theme]);

  const handleSwtchMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <button onClick={handleSwtchMode}>Mode</button>
    </>
  );
}

export default Theme;
