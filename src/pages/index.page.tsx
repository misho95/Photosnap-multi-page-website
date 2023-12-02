import { animated, useSpring } from "@react-spring/web";
import StoriesComponent from "../components/index/stories.component";
import StorieCard from "../components/stories/storie.card";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

const IndexPage = () => {
  const data = [
    {
      id: 1,
      title: "CREATE AND SHARE YOUR PHOTO STORIES.",
      text: `  Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.`,
      img: "/assets/home/desktop/create-and-share.jpg",
      type: "primary",
      side: "left",
    },
    {
      id: 2,
      title: "CREATE AND SHARE YOUR PHOTO STORIES.",
      text: `  Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.`,
      img: "/assets/home/desktop/beautiful-stories.jpg",
      type: "secondary",
      side: "right",
    },
    {
      id: 3,
      title: "CREATE AND SHARE YOUR PHOTO STORIES.",
      text: `  Photosnap is a platform for photographers and visual storytellers.
                We make it easy to share photos, tell stories and connect with
                others.`,
      img: "/assets/home/desktop/designed-for-everyone.jpg",
      type: "secondary",
      side: "left",
    },
  ];

  const data2 = [
    {
      id: 1,
      date: "April 16th 2020",
      title: "The Mountains",
      author: "John Appleseed",
      img: "/assets/stories/desktop/mountains.jpg",
    },
    {
      id: 2,
      date: "April 14th 2020",
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      img: "/assets/stories/desktop/cityscapes.jpg",
    },
    {
      id: 3,
      date: "April 11th 2020",
      title: "18 Days Voyage",
      author: "Alexei Borodin",
      img: "/assets/stories/desktop/18-days-voyage.jpg",
    },
    {
      id: 4,
      date: "April 9th 2020",
      title: "Architecturals",
      author: "Samantha Brooke",
      img: "/assets/stories/desktop/architecturals.jpg",
    },
  ];

  const containerRef = useRef<HTMLInputElement>(null);
  const windowSize = useWindowSize();
  const [divSize, setDivSize] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      const size = containerRef.current.offsetWidth;
      setDivSize(+size);
    }
  }, [windowSize]);

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
    <main>
      <animated.section style={{ ...animatedPage }}>
        {data.map((d) => {
          return (
            <StoriesComponent
              key={d.id}
              title={d.title}
              text={d.text}
              img={d.img}
              type={d.type}
              side={d.side}
              button={true}
            />
          );
        })}
        <div className="flex w-full flex-wrap" ref={containerRef}>
          {data2.map((d) => {
            return (
              <StorieCard
                key={d.id}
                date={d.date}
                title={d.title}
                author={d.author}
                img={d.img}
                divSize={divSize}
              />
            );
          })}
        </div>
      </animated.section>
    </main>
  );
};

export default IndexPage;
