import { animated, useSpring } from "@react-spring/web";

const InfoComponent = () => {
  const data = [
    {
      id: 1,
      img: "assets/features/desktop/responsive.svg",
      title: "100% Responsive",
      text: `No matter which the device you’re on, our site is fully responsive and
        stories look beautiful on any screen.`,
    },
    {
      id: 2,
      img: "assets/features/desktop/no-limit.svg",
      title: "No Photo Upload Limit",
      text: `Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.`,
    },
    {
      id: 3,
      img: "assets/features/desktop/embed.svg",
      title: "Available to Embed",
      text: `Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. `,
    },
  ];

  const animatedPage = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      mass: 5,
      friction: 120,
      tension: 100,
    },
  });

  return (
    <animated.div
      style={{ ...animatedPage }}
      className="flex flex-col lg:flex-row justify-center items-center gap-[45px] my-[110px]"
    >
      {data.map((d) => {
        return (
          <div
            key={d.id}
            className="w-[350px] h-[236px] justify-center items-center flex flex-col gap-[20px] text-center"
          >
            <img src={d.img} className="w-[72px] h-[72px] mb-[50px]" />
            <h1 className="text-[18px] font-semibold">{d.title}</h1>
            <p className="text-black/60 text-[15px]">{d.text}</p>
          </div>
        );
      })}
    </animated.div>
  );
};

export default InfoComponent;
