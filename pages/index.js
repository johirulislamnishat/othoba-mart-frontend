import { useEffect, useState } from "react";
import HomeHeader from "../components/home/header";
import HomeContent from "../components/home/HomeContent/HomeContent";
import HomeLayout from "../components/layouts/homeLayout";
import Notify from "/components/notify/Notify";
export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);
  return (
    <>
      <div>
        <form action="#">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkTheme}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
        </form>
      </div>
      <HomeLayout title="Othoba Mart | Best Online E-commerce Shopping">
        <Notify />
        <HomeHeader />
        <HomeContent />
      </HomeLayout>
    </>
  );
}
