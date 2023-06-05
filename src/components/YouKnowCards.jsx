import React from "react";
import kassa from "../assets/Касса.png";
import check from "../assets/Чек.png";
import upline from "../assets/ВерхнийШейп.png";
import skovorodka from "../assets/skovoroda 1.png";
import comet from "../assets/Комет 1.png";
import venik from "../assets/Веник 1.png";
import kroshka from "../assets/shokoladnaya-kroshka-80 (1) 2.png";
import clock from "../assets/Часы 1.png";
import atention from "../assets/Внимание 1.png";

const YouKnowCards = () => {
  return (
    <div className="bg-[#F2F9FF] relative">
      <img src={upline} className="w-full absolute -top-4 md:-top-10" />
      <div className="container-2xl lg:container relative m-auto pt-20">
        <div className="text-center">
          <button
            href="#"
            className="bg-yellow text-white px-12 py-4 rounded-full"
          >
            А вы знали?
          </button>
          <h1 className="text-3xl font-bold text-gray-dark py-5">
            70% клининговых компаний в СПБ, зачастую подвергают своих клиентов
            рискам и дискомфорту.
          </h1>
          <p className="text-gray text-xl py-5">
            И вот некоторые факты, с которыми вы можете столкнуться, обращаясь в
            другие компании:
          </p>
        </div>
        <div className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 py-5 lg:py-10 gap-5 lg:gap-10 mx-5">
          <div className="col-span-3 md:col-span-1 bg-white rounded-[30px] overflow-hidden">
            <div className="flex justify-between items-center relative">
              <img src={kassa} className="" />
              <img src={check} className="" />
              <img src={check} className="absolute right-0 -top-8 w-24" />
            </div>
            <div className="p-8 text-gray-dark">
              <h1 className="text-lg font-bold py-4">Чёрная касса</h1>
              <p>
                Клининговые компании завлекают клиентов обманчиво низкой
                стоимостью. Менеджеры умалчивают стоимость доп. работ, а на
                объекте, когда клиенту сложно отказать, насчитывают стоимость
                выше заявленной.
              </p>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 bg-white rounded-[30px] overflow-hidden">
            <div className="flex justify-between items-center relative">
              <img src={skovorodka} className="" />
              <img src={comet} className="absolute right-0 top-8" />
            </div>
            <div className="p-8 text-gray-dark">
              <h1 className="text-lg font-bold py-4">Чёрная касса</h1>
              <p>
                Клининговые компании завлекают клиентов обманчиво низкой
                стоимостью. Менеджеры умалчивают стоимость доп. работ, а на
                объекте, когда клиенту сложно отказать, насчитывают стоимость
                выше заявленной.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row xl:flex-col col-span-3 xl:col-span-1 bg-white rounded-[30px] overflow-hidden">
            <div className="flex justify-between items-center relative">
              <img src={venik} className="" />
              <img src={kroshka} className="xl:absolute bottom-0 right-20" />
            </div>
            <div className="p-8 text-gray-dark">
              <h1 className="text-lg font-bold py-4">Чёрная касса</h1>
              <p>
                Клининговые компании завлекают клиентов обманчиво низкой
                стоимостью. Менеджеры умалчивают стоимость доп. работ, а на
                объекте, когда клиенту сложно отказать, насчитывают стоимость
                выше заявленной.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 mx-5">
          <div className="flex flex-row bg-white rounded-[30px] overflow-hidden row-span-1 lg:col-span-2">
            <div className="flex flex-col justify-between items-center w-1/2">
              <img src={atention} className="" />
              <img src={clock} className="" />
            </div>
            <div className="p-8 text-gray-dark">
              <h1 className="text-lg font-bold py-4">Чёрная касса</h1>
              <p>
                Клининговые компании завлекают клиентов обманчиво низкой
                стоимостью. Менеджеры умалчивают стоимость доп. работ, а на
                объекте, когда клиенту сложно отказать, насчитывают стоимость
                выше заявленной.
              </p>
            </div>
          </div>
          <div className="bg-blue rounded-[30px] overflow-hidden">
            <div className="p-8 text-white">
              <h1 className="text-lg font-bold py-4">
                Друзья, Будьте внимательны!
              </h1>
              <p>
                При выборе клинговой компании и заказе уборки, внимательно
                читайте договор на оказание услуг
              </p>
              <a href="#" className="underline">
                Посмотреть договор
              </a>
            </div>
          </div>
        </div>
        <div className="text-center py-24">
          <h1 className="text-3xl font-bold text-gray-dark py-5">
            Наша работа построена на профессионализме и честности
          </h1>
          <button
            href="#"
            className="bg-yellow text-white px-12 py-4 rounded-full"
          >
            Обращаясь за помощью к нам, вы можете быть <br/> спокойны за качество и
            ваш комфорт
          </button>
          <div className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 py-5 lg:py-10 gap-5 lg:gap-10 mx-5">
          <div className="bg-white rounded-[30px] overflow-hidden">
            <div className="flex justify-between items-center relative">
              <img src={kassa} className="" />
              <img src={check} className="" />
              <img src={check} className="absolute right-0 -top-8 w-24" />
            </div>
            <div className="p-8 text-gray-dark">
              <h1 className="text-lg font-bold py-4">Чёрная касса</h1>
              <p>
                Клининговые компании завлекают клиентов обманчиво низкой
                стоимостью. Менеджеры умалчивают стоимость доп. работ, а на
                объекте, когда клиенту сложно отказать, насчитывают стоимость
                выше заявленной.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-[30px] overflow-hidden">
            <div className="flex justify-between items-center relative">
              <img src={skovorodka} className="" />
              <img src={comet} className="absolute right-0 top-8" />
            </div>
            <div className="p-8 text-gray-dark">
              <h1 className="text-lg font-bold py-4">Чёрная касса</h1>
              <p>
                Клининговые компании завлекают клиентов обманчиво низкой
                стоимостью. Менеджеры умалчивают стоимость доп. работ, а на
                объекте, когда клиенту сложно отказать, насчитывают стоимость
                выше заявленной.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-[30px] overflow-hidden">
            <div className="flex justify-between items-center relative">
              <img src={venik} className="" />
              <img src={kroshka} className="xl:absolute bottom-0 right-20" />
            </div>
            <div className="p-8 text-gray-dark">
              <h1 className="text-lg font-bold py-4">Чёрная касса</h1>
              <p>
                Клининговые компании завлекают клиентов обманчиво низкой
                стоимостью. Менеджеры умалчивают стоимость доп. работ, а на
                объекте, когда клиенту сложно отказать, насчитывают стоимость
                выше заявленной.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default YouKnowCards;
