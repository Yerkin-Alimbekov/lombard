import Image from "next/image";
import { motion } from "framer-motion";
// components
import AnimatedText from "./AnimatedText";
import Link from "next/link";


const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* image + shapes */}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              {/* shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/* image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#ffff] min-h-[190px] flex items-end justify-center">
                <Image
                  src="/assets/hero/deva.png"
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt=""
                />
              </div>
              {/* rotating shape */}
              <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">

              </div>
            </div>
          </div>
          {/* text */}
          <div className="text-center xl:text-left w-full xl:w-[60%] mx-auto xl:mx-0 flex flex-col gap-6">
            <div>
              <AnimatedText text="Автоломбард Прогресс" textStyles="h2 mb-2" />
              <p className="text-lg">Кредиты под залог авто</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
              Специализируется на предоставлении финансовых услуг населению, малому и среднему бизнесу.
              Мы предлагаем простые и понятные условия и требования. 
              Наша бизнес-этика основывается на доступности и скорости.
              По вопросам инвестиций в облигации ТОО Ломбард Прогресс, размещенные на  
              <Link href={"https://kase.kz/ru/issuers/MFLP/"} smooth>
               <span className="text-accent font-bold"> Казахстанской фондовой бирже (KASE), </span>
              </Link>
               свяжитесь с менеджером и 
              <Link href={"https://wa.me/+77014191890"} smooth>
               <span className="text-accent font-bold"> оставьте заявку.</span>
              </Link>
            </p>
            {/* info items */}
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center">
              {/* item 1 */}
              {/* item 2 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Адрес</div>
                <p>050000 (A10X2H7), г. Алматы, Ауэзовский р-н, Толе би, 302, 39</p>
              </div>
              {/* item 3 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Телефон</div>
                <p>+7(775)0073395</p>
              </div>
              {/* item 4 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Email</div>
                <p>progressautolombard@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
