import React from 'react'
import logo from "../assets/logo.svg";
import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";

const Footer = () => {
  return (
    <footer className="container flex  flex-wrap justify-between items-center py-4 w-full lg:w-4/5 mx-5 md:m-auto">
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
      <div>
        <div className="flex flex-wrap items-center xl:ml-20 list-none gap-4">
            <li><a href='#'>Реквизиты</a></li>
            <li><a href='#'>Политика конфиденциальности</a></li>
          <div className="flex items-center"><p className="">
            Быстрая связь:
          </p>
          <a href='#'><img src={telegram} className="mx-1 lg:mx-4 cursor-pointer" /></a>
          <a href='#'><img src={whatsapp} className="cursor-pointer"/></a></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer