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
import cheked from "../assets/Check 2.png";
import klipboard from "../assets/Клипборд 1.png";
import bottle from "../assets/Бутылка2 1.png";
import litleBottle from "../assets/Бутылка 1.png";
import guard from "../assets/Щит 1.png";
import devushka from "../assets/Девушка3 1.png";
import buble from "../assets/bubles 2.png";
import underLine from "../assets/НижнийШейп.png";


const YouKnowCards = () => {
  return (
    <div className="bg-[#F2F9FF] relative">
      <img src={upline} className="w-full absolute -top-4 md:-top-10" />
      <div className="container-2xl lg:container w-full lg:w-4/5 relative m-auto pt-20">
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
              <h1 className="text-lg font-bold py-4">Порча имущества</h1>
              <p>
                Неправильно подобранные клинерами моющие средства могут
                повредить поверхность мебели и бытовых приборов. Неправильная
                влажная уборка может испортить новый паркет или повредить
                проводку.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row xl:flex-col col-span-3 xl:col-span-1 bg-white rounded-[30px] overflow-hidden">
            <div className="flex justify-between items-center relative">
              <img src={venik} className="" />
              <img src={kroshka} className="xl:absolute bottom-0 right-20" />
            </div>
            <div className="p-8 text-gray-dark">
              <h1 className="text-lg font-bold py-4">Имитация деятельности</h1>
              <p>
                Клинеры часто выполняют свою работу недобросовестно. Не убирают
                труднодоступные места и экономят моющее средство. В результате
                Вы получаете некачественную уборку и испорченное настроение.
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
              <h1 className="text-lg font-bold py-4">
                Безответственность персонала
              </h1>
              <p>
                Клинеры приезжают раньше/позже назначенного времени, что
                доставляет дискомфорт хозяину. Не соблюдают инструктаж владельца
                квартиры и нарушают бытовой порядок.
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
        <div className="text-center pt-24 pb-10">
          <h1 className="text-3xl font-bold text-gray-dark py-5">
            Наша работа построена на профессионализме и честности
          </h1>
          <button
            href="#"
            className="bg-yellow text-white px-12 py-4 rounded-full"
          >
            Обращаясь за помощью к нам, вы можете быть <br /> спокойны за
            качество и ваш комфорт
          </button>
          <div className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 py-5 lg:py-10 gap-5 lg:gap-10 mx-5">
            <div className="bg-white rounded-[30px] overflow-hidden">
              <div className="flex justify-between items-center relative">
                <img src={cheked} className="z-10" />
                <img src={klipboard} className="absolute left-16" />
              </div>
              <div className="p-8 text-gray-dark text-left">
                <h1 className="text-lg font-bold py-4">
                  Честное сотрудничество
                </h1>
                <p>
                  Заранее рассчитаем стоимость услуг, и закрепляем наше
                  сотрудничество договором. Оплата исключительно по факту
                  выполнения. Вы проверяете результат и платите тогда, когда он
                  вас удовлетворяет.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[30px] overflow-hidden">
              <div className="flex justify-start items-center relative">
                <img src={bottle} className="z-10" />
                <img src={litleBottle} className="absolute left-24" />
              </div>
              <div className="p-8 text-gray-dark text-left">
                <h1 className="text-lg font-bold py-4">Бережные моющие</h1>
                <p>
                  Внимательно подходим к выбору моющих средств. Знаем какие
                  средства использовать в конкретных случаях, чтобы не повредить
                  мебель и сохранить прежний блеск поверхностей.
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-[30px] overflow-hidden">
              <div className="flex justify-center items-center relative mt-7">
                <img src={guard} className="" />
              </div>
              <div className="p-8 text-gray-dark text-left">
                <h1 className="text-lg font-bold py-4">Гарантия качества</h1>
                <p>
                  На объектах работают от 2 и более опытных клинеров.
                  Комплексная уборка делается в соответствии с нормами качества.
                  Блеск от потолка до пола!
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center grid-flow-col col-span-1 xl:col-span-3 bg-kuhnya2 bg-blue bg-cover rounded-[30px] overflow-hidden">
              <div className="flex flex-col justify-center p-8 text-gray-dark text-left">
                <h1 className="text-xl font-bold text-white my-10">
                  Оставьте заявку на консультацию <br /> и расчёт стоимости
                  БЕСПЛАТНО
                </h1>
                <div className="">
                  <input
                    placeholder="Введите ваш телефон"
                    className="bg-white rounded-full w-auto py-7 px-9  mr-4 mb-5 text-gray"
                  />
                  <button
                    type="submit"
                    className="bg-yellow rounded-full w-auto py-7 px-24 text-gray"
                  >
                    Жду звонка
                  </button>
                </div>
              </div>
              <div className="hidden xl:block relative">
                <div className="flex flex-col justify-end items-center relative bottom-0 mt-7">
                  <img src={devushka} className="z-10 xl:mt-28 2xl:mt-0" />
                  <img src={buble} className="absolute" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={underLine} className="absolute -bottom-20 -z-10"/>
    </div>
  );
};

export default YouKnowCards;
