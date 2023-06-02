import React from "react";
import girl from "../assets/Девушка 2.png";
import buble from "../assets/bubles 2.png";
import underLine from "../assets/underLine.png";

const Slider = () => {
  return (
    <>
      <div className="container-xl w-full bg-hero-pattern relative">
        <div className="flex justify-around w-full ml-auto overflow-hidden">
          <div className="flex relative md:absolute lg:left-40 xl:left-80 z-10 flex-col text-gray-dark py-20">
            <div className="">
              <h1 className="text-2xl font-bold">
                Бережная уборка квартир и домов <br /> в СПБ по фиксированной
                стоимости <br /> от 80₽/м²{" "}
                <div className="text-lg">с гарантий качества по договору</div>
              </h1>
              <p className="text-lg py-8">
                Выберите вид уборки, получите точный расчёт <br /> стоимости и
                скидку 10% на первый заказ
              </p>
            </div>
            <div>
              <a
                href="#"
                className="px-2 py-5 bg-blue rounded-full text-white mr-2"
              >
                Рассчитать стоимость
              </a>
              <a
                href="#"
                className="px-2 py-5 bg-yellow rounded-full text-white"
              >
                Выбрать вид уборки
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            <img src={girl} className="object-cover lg:ml-[400px]" />
            <img
              src={buble}
              className=" object-cover absolute bottom-5 left-40 lg:left-[700px] w-1/6"
            />
            <div className="bg-white rounded-xl absolute top-1/2 right-[18%] text-sm">
              <p className="py-4 px-6">
                Убрано <span className="text-blue">более</span> <br />{" "}
                <span className="text-blue">535</span> объектов
              </p>
            </div>
          </div>
        </div>
        <img src={underLine} className="w-full absolute bottom-0" />
      </div>
    </>
  );
};

export default Slider;
