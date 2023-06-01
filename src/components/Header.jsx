import React from "react";
// import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";

const Header = () => {
  // const [theme, setTheme] = useState(null);

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  // const handleThemeSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };
  return (
    <header className="container flex justify-around items-center py-4 w-full lg:w-4/5 m-auto">
      <div className="flex flex-row">
        <img src={logo} />
        <span className="ml-2 mt-1">
          <h6 className="text-blue">Soft Clean</h6>
          <p className="text-[10px] text-gray">
            Бережная уборка
            <br /> помещений СПБ
          </p>
        </span>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center xl:ml-20">
          <div>
            <h6 className="text-gray-dark font-bold">8-800-700-60-50</h6>
            <p className="relative text-[12px] text-gray ml-4 before:absolute before:top-1 before:left-[-10px] before:w-2 before:h-2 before:rounded-full before:bg-light-green">
              Пн-Вс: 9:00 - 21:00
            </p>
          </div>
          <p className="text-gray-dark text-right text-sm ml-2 lg:ml-12">
            Быстрая связь с нами <br />в мессенджерах:
          </p>
          <img src={telegram} className="mx-1 lg:mx-4" />
          <img src={whatsapp} />
        </div>
      </div>
      <div>
        <button className="text-sm text-gray px-6 py-3 rounded-full border-2 border-blue">
          Заказать консультацию
        </button>
        {/* <button
          type="button"
          onClick={handleThemeSwitch}
          className="text-sm text-gray p-2 rounded-full border-2 border-blue"
        >
          {theme === "dark" ? "moon" : "light"}
        </button> */}
      </div>
    </header>
  );
};

export default Header;
