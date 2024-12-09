import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";

// sample data for projects with various categories
const data = [
  {
    href: "https://drive.google.com/file/d/1B1olZqC0T3-LFEvFeuIrwlTd0WImqIk2/view?usp=drive_link",
    category: "Реквизиты",
    img: "",
    title: "Реквизиты",
  },
  {
    href: "https://drive.google.com/file/d/11OSN-hLcmdnKVMYjT0-RS1WwMWgFVF74/view?usp=drive_link",
    category: "Документы",
    img: "",
    title: "Лицензия 02.21 0058.L",
  },
  {
    href: "https://drive.google.com/file/d/1b-TLEzSO3lWN0M2EY66QRWyEhbzf0Ssm/view?usp=drive_link",
    category: "Документы",
    img: "",
    title: "Микрокредиттерді беру қағидалары",
  },
  {
    href: "https://drive.google.com/file/d/1JM7IJGIkxr20iv_EOSRnKzDOjFyQtHKm/view?usp=drive_link'",
    category: "Документы",
    img: "",
    title: "Правила предоставления микрокредитов",
  },
  {
    href: "https://drive.google.com/file/d/19R-qM1QLSCCrb_vBMfiq8yjTedpTGhqG/view?usp=drive_link",
    category: "Документы",
    img: "",
    title: "Финансовая отчетность за 2023 год",
  },
  {
    href: "https://drive.google.com/file/d/1u8lw8v1xwItWIWCAry4Lu8CxfF0d3VOt/view?usp=drive_link",
    category: "Документы",
    img: "",
    title: "Финансовая отчетность за 2022 год",
  },
  {
    href: "https://drive.google.com/file/d/1emDJccR-KpaAVRJP-dpa7etCuqubWKwm/view?usp=drive_link",
    category: "Документы",
    img: "",
    title: "Типовая форма Залогового билета",
  },
  {
    href: "https://drive.google.com/file/d/1S5f7VttFVH_8SU2aLKeUYGBrm1JB5VWq/view?usp=drive_link",
    category: "Документы",
    img: "",
    title: "Политика конфиденциальности",
  },
  {
    href: "https://drive.google.com/file/d/1wuagXTTmcWlPmH08rbxiVpqcmC8DyBd6/view?usp=drive_link",
    category: "Документы",
    img: "",
    title: "Договор присоеденения",
  },
];

const Work = () => {
  // extract unique categpries from the data
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  // create tab data with "all" category and unique categories from data
  const tabData = [
    { category: "все" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  // state to manage the currently selected tab
  const [tabValue, setTabValue] = useState("все");
  // number of items to show initially
  const [visibleItems, setVIsibleItems] = useState(6);

  // filter work items based on the selected tab
  const filterWork =
    tabValue === "все"
      ? data.filter((item) => item.category !== "все")
      : data.filter((item) => item.category === tabValue);

  // handle loading more items
  const loadMoreItems = () => {
    // adjust the number to control how many items are loaded at a time
    setVIsibleItems((prev) => prev + 2);
  };

  return (
    <section className="pt-24 min-h-[400px]" id="work">
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
            <AnimatedText
              text="Реквизиты и Документы"
              textStyles="h2 mb-[30px] xl:mb-0 text-center"
            />
            {/* render tab triggers */}
            <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
              {tabData.map((item, index) => {
                return (
                  <TabsTrigger
                    value={item.category}
                    key={index}
                    className="capitalize w-[120px]"
                    onClick={() => setTabValue(item.category)}
                  >
                    {item.category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* render content for the selected tab */}
          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* load more button */}
            {visibleItems < filterWork.length && (
              <div className="flex justify-center mt-12">
                <button onClick={loadMoreItems} className="btn btn-accent">
                  Показать
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
