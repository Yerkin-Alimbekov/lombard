"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

const journey = [
  // experience
  {
    type: "experience",
    company: "",
    logoUrl: "/assets/journey/experience/sliddev.png",
    position: "Сумма кредита",
    duration: "",
    description:
      "от 200 тысяч тенге до 29,5 миллионов тенге",
  },
  {
    type: "experience",
    company: "",
    logoUrl: "/assets/journey/experience/sliddev.png",
    position: "Ставка вознаграждения",
    duration: "",
    description:
      "3,15% в месяц. Годовая ставка не превышает 37,8%",
  },
  {
    type: "experience",
    company: "",
    logoUrl: "/assets/journey/experience/sliddev.png",
    position: 'Рассмотрение с любой кредитной историей',
    duration: "",
    description:
      "",
  },
  {
    type: "experience",
    company: "",
    logoUrl: "/assets/journey/experience/sliddev.png",
    position: "Без скрытых комиссии и платежей",
    duration: "",
    duration: "",
    description:
      "",
  },

  // education
  {
    type: "education",
    institution: "",
    logoUrl: "/assets/journey/experience/sliddev.png",
    qualification: "Основные требования (документы)",
    duration: "",
    description:
      "удостоверение личности и тех.паспорт.",
  },
  {
    type: "education",
    institution: "",
    logoUrl: "/assets/journey/experience/sliddev.png",
    qualification: "Основные требования (автомобиль)",
    duration: "",
    description:
      "Технически исправлен. Любой год выпуска. Без юридических проблем. На учёте в любом регионе Республики Казахстан.",
  },
  {
    type: "education",
    institution: "",
    logoUrl: "/assets/journey/experience/sliddev.png",
    qualification: "Основные требования (владелец)",
    duration: "",
    description:
      "Вы - законный владец автомобиля или имеете нотариально заверенную доверенность на право им распоряжаться и Вам 18 лет.",
  },

  // skills
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">Условия</TabsTrigger>
          <TabsTrigger value="education">Требования</TabsTrigger>
          <TabsTrigger value="skills">Калькулятор</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "experience")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "education")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "skill")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;
