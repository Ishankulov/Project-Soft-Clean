import React from "react";
import aparat from "../assets/380 1.png";
import cleaner from "../assets/img-2.png";
import gloves from "../assets/Перчатки 1.png";
import check from "../assets/Check 1 1.png";
import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";
import phone from "../assets/ТелефонВруке.png";
import book from "../assets/Книжка3 2.png";
import cupon from "../assets/Купон.png";

const SectionCalclulator = () => {
  return (
    <>
      <div className="container-xl lg:container flex justify-around items-center pt-20 pb-40 w-full lg:w-4/5 relative m-auto">
        <div className="mx-5">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="flex items-center w-full bg-blue pl-6 rounded-[30px] overflow-hidden text-white">
              <h5>Немецкое и Американское оборудование</h5>
              <img src={aparat} className="" />
            </div>
            <div className="flex items-center justify-between w-full bg-yellow pl-6 rounded-[30px] overflow-hidden text-white">
              <h5>Гипоаллергенные безопасные моющие</h5>
              <img src={cleaner} className="" />
            </div>
            <div className="flex items-center justify-between w-full bg-blue pl-6 rounded-[30px] overflow-hidden text-white">
              <h5>Соблюдаем санитарные нормы</h5>
              <img src={gloves} className="" />
            </div>
            <div className="flex items-center justify-between w-full bg-yellow pl-6 rounded-[30px] overflow-hidden text-white">
              <h5>
                Оплата по результату
                <br /> после уборки
              </h5>
              <img src={check} className="md:-mb-5 right-0" />
            </div>
          </div>
          <div className="flex items-center list-none justify-around text-center rounded-full my-10 shadow-3xl">
            <li className="hover:bg-blue hover:text-white rounded-full py-3 px-4 lg:py-7 lg:px-9">
              <a href="">Услуги</a>
            </li>
            <li className="hover:bg-blue hover:text-white rounded-full py-3 px-4 lg:py-7 lg:px-9">
              <a href="">Рассчитать стоимость</a>
            </li>
            <li className="hover:bg-blue hover:text-white rounded-full py-3 px-4 lg:py-7 lg:px-9">
              <a href="">Почему мы</a>
            </li>
            <li className="hover:bg-blue hover:text-white rounded-full py-3 px-4 lg:py-7 lg:px-9">
              <a href="">Как мы делаем уборку</a>
            </li>
            <li className="hover:bg-blue hover:text-white rounded-full py-3 px-4 lg:py-7 lg:px-9">
              <a href="">Отзывы</a>
            </li>
            <li className="hover:bg-blue hover:text-white rounded-full py-3 px-4 lg:py-7 lg:px-9">
              <a href="">Акции</a>
            </li>
          </div>
          <div className="text-center">
            <h1 className="text-gray-dark text-3xl font-bold">
              Калькулятор стоимости уборки с точностью до 98%
            </h1>
            <p className="text-gray text-xl my-5">
              Это бесплатно и ни к чему не обязывает!
            </p>
          </div>
          <div className="flex items-center text-center bg-kuhnya bg-no-repeat bg-cover bg-blue rounded-3xl">
            <div className="xl:ml-10">
              <h1 className="text-white text-xl md:text-2xl font-bold pt-5">
                Отлично! Ваши ответы получены, менеджер уже приступает к расчёту
              </h1>
              <p className="text-white text-lg py-4">
                Где вам удобнее получить расчёт?
              </p>
              <div className="flex items-center justify-center gap-10 py-4">
                <a href="#" className="rounded-3xl bg-white py-5 px-20">
                  <img src={telegram} />
                </a>
                <a href="#" className="rounded-3xl bg-white py-5 px-20">
                  <img src={whatsapp} />
                </a>
              </div>
              <input
                type="tel"
                placeholder="Введите ваш телефон"
                className="px-[110px] py-5 rounded-full"
              />
              <button className="px-[100px] py-5 my-4 rounded-full bg-yellow text-white">
                Получить расчёт и бонусы
              </button>
            </div>
            <div className="relative hidden md:block  w-4/5 pt-10">
              <img src={phone} className="m-auto object-contain"/>
              <div className="flex items-center absolute bottom-20  left-0 2xl:left-[200px] rounded-[30px] bg-white text-left overflow-hidden px-4 py-2">
                <div className="px-5">
                  <h1 className="text-blue">Ваши бонусы:</h1>
                  <li>Скидка 10% на первый заказ</li>
                  <li>Книга «Магическая уборка»</li>
                </div>
                <div className="flex items-center">
                  <img src={book} />
                  <img src={cupon} className="-mb-20 -mr-5  hidden lg:block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionCalclulator;
