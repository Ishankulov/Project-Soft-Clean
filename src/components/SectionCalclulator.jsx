import React from "react";
import aparat from "../assets/380 1.png";
import cleaner from "../assets/img-2.png";
import gloves from "../assets/Перчатки 1.png";
import check from "../assets/Check 1 1.png";

const SectionCalclulator = () => {
  return (
    <>
      <div className="container flex justify-around items-center py-4 w-full lg:w-4/5 relative m-auto">
        <div>
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
              <h5>Оплата по результату<br/> после уборки</h5>
              <img src={check} className="md:-mb-5 right-0" />
            </div>
          </div>
          <div className="flex items-center list-none justify-around text-center rounded-full my-10 shadow-3xl">
              <li className="hover:bg-blue hover:text-white rounded-full py-3 px-4 lg:py-7 lg:px-9"><a href="">Услуги</a></li>
              <li className="hover:bg-blue hover:text-white rounded-full py-3 px-4 lg:py-7 lg:px-9"><a href="">Рассчитать стоимость</a></li>
              <li className="hover:bg-blue hover:text-white rounded-full py-3 px-4 lg:py-7 lg:px-9"><a href="">Почему мы</a></li>
              <li className="hover:bg-blue hover:text-white rounded-full py-3 px-4 lg:py-7 lg:px-9"><a href="">Как мы делаем уборку</a></li>
              <li className="hover:bg-blue hover:text-white rounded-full py-3 px-4 lg:py-7 lg:px-9"><a href="">Отзывы</a></li>
              <li className="hover:bg-blue hover:text-white rounded-full py-3 px-4 lg:py-7 lg:px-9"><a href="">Акции</a></li>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionCalclulator;
