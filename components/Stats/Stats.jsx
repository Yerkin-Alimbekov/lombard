import StatsItem from "./StatsItem";

const statsData = [
  {
    endCountNum: 14,
    endCountText: "+",
    text: "лет на рынке",
  },
  {
    endCountNum: 2500,
    endCountText: "+",
    text: "клиентов",
  },
  {
    endCountNum: 97,
    endCountText: "%",
    text: "одобрении",
  },
];

const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {statsData.map((item, index) => {
        return (
          <StatsItem
            endCountNum={item.endCountNum}
            endCountText={item.endCountText}
            text={item.text}
            key={index}
          />
        );
      })}
    </section>
  );
};

export default Stats;
