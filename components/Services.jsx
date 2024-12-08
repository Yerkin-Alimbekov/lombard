import Image from "next/image";

const services = [
  {
    icon: "assets/services/icon-1.svg",
    title: "Свяжитесь с нами",
    description: "мы ответим на все вопросы",
  },
  {
    icon: "assets/services/icon-2.svg",
    title: "Пройдите оценку авто",
    description: "за 15 минут",
  },
  {
    icon: "assets/services/icon-3.svg",
    title: "Минимум документов",
    description: "уд. личности и тех. паспорт",
  },
  {
    icon: "assets/services/icon-4.svg",
    title: "Получите одобрение",
    description: "мы ценим ваше время",
  },
];

const Services = () => {
  return (
    <section className="relative z-40">
      <div className="container mx-auto">
        <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
          {services.map((service, index) => {
            return (
              <li
                key={index}
                className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg"
              >
                <Image
                  src={service.icon}
                  width={48}
                  height={48}
                  alt=""
                  className="mb-4"
                />
                <h3 className="text-[20px] text-primary font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-[15px]">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
